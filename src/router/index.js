
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home/Home.vue";
import About from "@/pages/About/About.vue";
import Services from "@/pages/Services/Services.vue";

import SpinalDecompression from "@/pages/Services/SpinalDecompression/SpinalDecompression.vue";
import ChiropracticAdjustments from "@/pages/Services/ChiropracticAdjustments/ChiropracticAdjustments.vue";
import CustomOrthotics from "@/pages/Services/CustomOrthotics/CustomOrthotics.vue";
import Therapies from "@/pages/Services/Therapies/Therapies.vue";
import FamilyChiropractic from "@/pages/Services/FamilyChiropractic/FamilyChiropractic.vue";
import CorrectiveCare from "@/pages/Services/CorrectiveCare/CorrectiveCare.vue";

import Conditions from "@/pages/Conditions/Conditions.vue";
import ConditionDetail from "@/pages/Conditions/ConditionsDetail/ConditionDetail.vue";

import Contact from "@/pages/Contact/Contact.vue";
import Booking from "@/pages/Booking/Booking.vue";
import LegalPage from "@/pages/Legal/LegalPage.vue";

import { publishedLegalPages } from "@/data/legalPages";
import { conditions } from "@/data/conditions";

const SITE_URL = "https://fhchiropractic.com";

const DEFAULT_TITLE =
  "Forest Hills Chiropractic | Chiropractor in Pittsburgh, PA";

const DEFAULT_DESCRIPTION =
  "Forest Hills Chiropractic provides personalized chiropractic care, spinal decompression, corrective care, recovery therapies, and custom orthotics in Pittsburgh, PA.";

const DEFAULT_SOCIAL_DESCRIPTION =
  "Personalized chiropractic care designed to help you move better, recover, and feel your best in Pittsburgh, PA.";

const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/social-preview.jpg`;

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      socialDescription: DEFAULT_SOCIAL_DESCRIPTION,
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "About Us | Forest Hills Chiropractic",
      description:
        "Learn about Forest Hills Chiropractic and our personalized approach to chiropractic care, movement, recovery, and long-term wellness in Pittsburgh, PA.",
    },
  },
  {
    path: "/services",
    component: Services,
    meta: {
      title:
        "Chiropractic Services in Pittsburgh, PA | Forest Hills Chiropractic",
      description:
        "Explore chiropractic adjustments, spinal decompression, corrective care, recovery therapies, family chiropractic care, and custom orthotics at Forest Hills Chiropractic.",
    },
  },
  {
    path: "/services/spinal-decompression",
    component: SpinalDecompression,
    meta: {
      title:
        "Spinal Decompression in Pittsburgh, PA | Forest Hills Chiropractic",
      description:
        "Explore non-surgical spinal decompression at Forest Hills Chiropractic in Pittsburgh, PA, designed to support mobility and address back and disc-related discomfort.",
    },
  },
  {
    path: "/services/chiropractic-adjustments",
    component: ChiropracticAdjustments,
    meta: {
      title:
        "Chiropractic Adjustments in Pittsburgh, PA | Forest Hills Chiropractic",
      description:
        "Personalized chiropractic adjustments in Pittsburgh, PA designed to improve mobility, address joint restriction, and help you move and feel your best.",
    },
  },
  {
    path: "/services/therapies",
    component: Therapies,
    meta: {
      title:
        "Therapies & Recovery in Pittsburgh, PA | Forest Hills Chiropractic",
      description:
        "Explore therapies and recovery services at Forest Hills Chiropractic designed to support healing, mobility, recovery, and physical performance.",
    },
  },
  {
    path: "/services/orthotics",
    component: CustomOrthotics,
    meta: {
      title:
        "Custom Orthotics in Pittsburgh, PA | Forest Hills Chiropractic",
      description:
        "Custom orthotics at Forest Hills Chiropractic provide personalized foot support designed to improve alignment, comfort, and movement from the ground up.",
    },
  },
  {
    path: "/services/family",
    component: FamilyChiropractic,
    meta: {
      title:
        "Family Chiropractic Care in Pittsburgh, PA | Forest Hills Chiropractic",
      description:
        "Personalized family chiropractic care in Pittsburgh, PA supporting comfortable movement, mobility, and wellness through every stage of life.",
    },
  },
  {
    path: "/services/corrective",
    component: CorrectiveCare,
    meta: {
      title:
        "Corrective Chiropractic Care in Pittsburgh, PA | Forest Hills Chiropractic",
      description:
        "Corrective chiropractic care at Forest Hills Chiropractic focuses on movement, alignment, mobility, and addressing underlying issues for lasting improvement.",
    },
  },
  {
    path: "/contact",
    component: Contact,
    meta: {
      title: "Contact Forest Hills Chiropractic | Pittsburgh, PA",
      description:
        "Contact Forest Hills Chiropractic at 21 Yost Blvd Ste. 148/150 in Pittsburgh, PA. Call our office for appointments, questions, and chiropractic care information.",
    },
  },
  {
    path: "/booking",
    component: Booking,
    meta: {
      title: "Book an Appointment | Forest Hills Chiropractic",
      description:
        "Schedule an appointment with Forest Hills Chiropractic in Pittsburgh, PA. Contact our office to get started with personalized chiropractic care.",
    },
  },
  {
    path: "/conditions",
    component: Conditions,
    meta: {
      title: "Conditions We Treat | Forest Hills Chiropractic",
      description:
        "Explore common conditions evaluated at Forest Hills Chiropractic in Pittsburgh, PA, including back pain, neck pain, sciatica, headaches, and joint pain.",
    },
  },
  {
    path: "/conditions/:slug",
    name: "condition-detail",
    component: ConditionDetail,
  },

  // Legal pages are generated from the same data used by the footer.
  ...publishedLegalPages.map((page) => ({
    path: `/${page.slug}`,
    name: `legal-${page.id}`,
    component: LegalPage,
    meta: {
      legalSlug: page.slug,
      title: `${page.title} | Forest Hills Chiropractic`,
      description: page.description,
      noindex: page.group === "website",
    },
  })),
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

function setMetaTag(selector, attributeName, attributeValue, content) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

// Prevent invalid condition slugs from rendering an empty page.
// Proper HTTP 404 responses will be addressed in the hosting audit.
router.beforeEach((to) => {
  if (
    to.name === "condition-detail" &&
    !Object.prototype.hasOwnProperty.call(
      conditions,
      String(to.params.slug)
    )
  ) {
    return "/conditions";
  }
});

router.afterEach((to) => {
  const conditionMeta =
    to.name === "condition-detail"
      ? conditions[String(to.params.slug)]
      : null;

  const title =
    conditionMeta?.seoTitle || to.meta.title || DEFAULT_TITLE;

  const description =
    conditionMeta?.seoDescription ||
    to.meta.description ||
    DEFAULT_DESCRIPTION;

  const socialDescription =
    to.meta.socialDescription ||
    description ||
    DEFAULT_SOCIAL_DESCRIPTION;

  const routePath =
    to.path === "/" ? "/" : to.path.replace(/\/+$/, "");

  const canonicalUrl = `${SITE_URL}${routePath}`;

  document.title = title;

  setMetaTag(
    'meta[name="description"]',
    "name",
    "description",
    description
  );

  setMetaTag(
    'meta[name="robots"]',
    "name",
    "robots",
    to.meta.noindex ? "noindex, follow" : "index, follow"
  );

  setCanonical(canonicalUrl);

  setMetaTag(
    'meta[property="og:title"]',
    "property",
    "og:title",
    title
  );

  setMetaTag(
    'meta[property="og:description"]',
    "property",
    "og:description",
    socialDescription
  );

  setMetaTag(
    'meta[property="og:type"]',
    "property",
    "og:type",
    "website"
  );

  setMetaTag(
    'meta[property="og:url"]',
    "property",
    "og:url",
    canonicalUrl
  );

  setMetaTag(
    'meta[property="og:image"]',
    "property",
    "og:image",
    DEFAULT_SOCIAL_IMAGE
  );

  setMetaTag(
    'meta[property="og:image:alt"]',
    "property",
    "og:image:alt",
    "Forest Hills Chiropractic in Pittsburgh, Pennsylvania"
  );

  setMetaTag(
    'meta[property="og:site_name"]',
    "property",
    "og:site_name",
    "Forest Hills Chiropractic"
  );

  setMetaTag(
    'meta[property="og:locale"]',
    "property",
    "og:locale",
    "en_US"
  );

  setMetaTag(
    'meta[name="twitter:card"]',
    "name",
    "twitter:card",
    "summary_large_image"
  );

  setMetaTag(
    'meta[name="twitter:title"]',
    "name",
    "twitter:title",
    title
  );

  setMetaTag(
    'meta[name="twitter:description"]',
    "name",
    "twitter:description",
    socialDescription
  );

  setMetaTag(
    'meta[name="twitter:image"]',
    "name",
    "twitter:image",
    DEFAULT_SOCIAL_IMAGE
  );

  setMetaTag(
    'meta[name="twitter:image:alt"]',
    "name",
    "twitter:image:alt",
    "Forest Hills Chiropractic in Pittsburgh, Pennsylvania"
  );
});

export default router;
