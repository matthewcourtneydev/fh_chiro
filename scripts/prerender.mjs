
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";

const PORT = 4178;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const OUTPUT_DIR = path.resolve("dist");

const routes = [
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
  "/conditions/back-pain",
  "/conditions/neck-pain",
  "/conditions/sciatica",
  "/conditions/headaches",
  "/conditions/joint-pain",
  "/conditions/sports-injuries",
  "/conditions/carpal-tunnel",
  "/contact",
  "/booking",
  "/privacy-policy",
  "/accessibility",
  "/terms-of-service",
  "/hipaa-policy",
];

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
      throw new Error("Vite preview server exited unexpectedly.");
    }

    try {
      const response = await fetch(BASE_URL);

      if (response.ok) return;
    } catch {
      // Server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error("Timed out waiting for Vite preview server.");
}

async function prerender() {
  await waitForServer();

  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  for (const route of routes) {
    console.log(`Prerendering: ${route}`);

    const errors = [];

    const onPageError = (error) => {
      errors.push(error.message);
    };

    page.on("pageerror", onPageError);

    const response = await page.goto(`${BASE_URL}${route}`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    await page.waitForFunction(
      () =>
        document.querySelector("#app")?.children.length > 0 &&
        document.querySelector('link[rel="canonical"]'),
      { timeout: 15000 }
    );

    if (!response?.ok()) {
      throw new Error(`Failed to render ${route}`);
    }

    if (errors.length) {
      throw new Error(
        `JavaScript errors on ${route}:\n${errors.join("\n")}`
      );
    }

    const canonical = await page.$eval(
      'link[rel="canonical"]',
      (element) => element.href
    );

    const expectedCanonical =
      `https://fh-chiropractic.com${route}`;

    if (canonical !== expectedCanonical) {
      throw new Error(
        `Unexpected canonical for ${route}: ${canonical}`
      );
    }

    const html = await page.content();

    const outputPath =
      route === "/"
        ? path.join(OUTPUT_DIR, "index.html")
        : path.join(OUTPUT_DIR, route, "index.html");

    await mkdir(path.dirname(outputPath), {
      recursive: true,
    });

    await writeFile(
      outputPath,
      `<!doctype html>\n${html.replace(/^<!doctype html>\s*/i, "")}`,
      "utf8"
    );

    page.off("pageerror", onPageError);
  }

  console.log(`Successfully prerendered ${routes.length} pages.`);
}

try {
  await prerender();
} catch (error) {
  console.error("Prerendering failed:", error);
  process.exitCode = 1;
} finally {
  await browser?.close();
  server.kill();
}
