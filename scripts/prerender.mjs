
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import puppeteer from "puppeteer";
import chromium from "@sparticuz/chromium";

import { conditions } from "../src/data/conditions.js";
import { publishedLegalPages } from "../src/data/legalPages.js";

const PORT = 4178;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const OUTPUT_DIR = path.resolve("dist");

const SITE_URL = "https://fhchiropractic.com";

const isVercel = process.env.VERCEL === "1";

// All static routes outside the condition and legal-page collections.
const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/services/spinal-decompression",
  "/services/chiropractic-adjustments",
  "/services/therapies",
  "/services/orthotics",
  "/services/family",
  "/services/corrective",
  "/conditions",
  "/contact",
  "/booking",
];

// Automatically include every condition in conditions.js.
const conditionRoutes = Object.keys(conditions).map(
  (slug) => `/conditions/${slug}`
);

// Automatically include published legal pages.
const legalRoutes = publishedLegalPages.map(
  (page) => `/${page.slug}`
);

const routes = [
  ...staticRoutes,
  ...conditionRoutes,
  ...legalRoutes,
];

// Prevent accidentally generating the same page twice.
if (new Set(routes).size !== routes.length) {
  throw new Error("Duplicate routes found in prerender configuration.");
}

const server = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    String(PORT),
    "--strictPort",
  ],
  {
    stdio: "inherit",
  }
);

let browser;

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) {
      throw new Error(
        "Vite preview server exited unexpectedly."
      );
    }

    try {
      const response = await fetch(BASE_URL);

      if (response.ok) return;
    } catch {
      // The preview server may still be starting.
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );
  }

  throw new Error(
    "Timed out waiting for Vite preview server."
  );
}

async function launchBrowser() {
  if (isVercel) {
    console.log(
      "Launching serverless Chromium on Vercel..."
    );

    return puppeteer.launch({
      executablePath: await chromium.executablePath(),
      headless: true,
      args: chromium.args,
    });
  }

  console.log(
    "Launching local Puppeteer Chrome..."
  );

  return puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  });
}

async function prerender() {
  await waitForServer();

  browser = await launchBrowser();

  const page = await browser.newPage();

  for (const route of routes) {
    console.log(`Prerendering: ${route}`);

    const errors = [];

    const onPageError = (error) => {
      errors.push(error.message);
    };

    page.on("pageerror", onPageError);

    try {
      const response = await page.goto(
        `${BASE_URL}${route}`,
        {
          waitUntil: "networkidle0",
          timeout: 60000,
        }
      );

      if (!response?.ok()) {
        throw new Error(
          `Failed to render ${route}. HTTP status: ${response?.status() ?? "unknown"}`
        );
      }

      // Wait for Vue to mount and SEO metadata to be available.
      await page.waitForFunction(
        () =>
          document.querySelector("#app")?.children.length > 0 &&
          document.querySelector('link[rel="canonical"]'),
        { timeout: 15000 }
      );

      // Validate the actual page, not just the Vue mount point.
      const pageData = await page.evaluate(() => {
        const main = document.querySelector("main");
        const h1 = document.querySelector("h1");
        const description = document.querySelector(
          'meta[name="description"]'
        );
        const canonical = document.querySelector(
          'link[rel="canonical"]'
        );

        return {
          title: document.title.trim(),
          description:
            description?.getAttribute("content")?.trim() || "",
          canonical:
            canonical?.getAttribute("href") || "",
          h1: h1?.textContent?.trim() || "",
          hasMain: Boolean(main),
          mainTextLength:
            main?.textContent?.trim().length || 0,
        };
      });

      if (errors.length) {
        throw new Error(
          `JavaScript errors on ${route}:\n${errors.join("\n")}`
        );
      }

      if (!pageData.title) {
        throw new Error(
          `Missing page title on ${route}`
        );
      }

      if (!pageData.description) {
        throw new Error(
          `Missing meta description on ${route}`
        );
      }

      if (!pageData.hasMain) {
        throw new Error(
          `Missing <main> element on ${route}`
        );
      }

      if (!pageData.h1) {
        throw new Error(
          `Missing H1 heading on ${route}`
        );
      }

      if (pageData.mainTextLength < 50) {
        throw new Error(
          `Insufficient main content on ${route}`
        );
      }

      const expectedCanonical = `${SITE_URL}${route}`;

      if (pageData.canonical !== expectedCanonical) {
        throw new Error(
          `Unexpected canonical for ${route}:\n` +
          `Expected: ${expectedCanonical}\n` +
          `Received: ${pageData.canonical}`
        );
      }

      const html = await page.content();

      const outputPath =
        route === "/"
          ? path.join(OUTPUT_DIR, "index.html")
          : path.join(
              OUTPUT_DIR,
              route.slice(1),
              "index.html"
            );

      await mkdir(
        path.dirname(outputPath),
        { recursive: true }
      );

      await writeFile(
        outputPath,
        `<!doctype html>\n${html.replace(
          /^<!doctype html>\s*/i,
          ""
        )}`,
        "utf8"
      );

      console.log(`Completed: ${route}`);
    } finally {
      page.off("pageerror", onPageError);
    }
  }

  console.log(
    `Successfully prerendered ${routes.length} pages.`
  );
}

try {
  await prerender();
} catch (error) {
  console.error(
    "Prerendering failed:",
    error
  );

  process.exitCode = 1;
} finally {
  await browser?.close();
  server.kill();
}
