<script setup>
import "./SpinalDecompression.scss";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import Footer from "@/components/Footer/Footer.vue";
import {
  Leaf,
  UserCheck,
  ShieldCheck,
  Clock3,
  RefreshCw,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-vue-next";
import { conditions as conditionsData } from "@/data/conditions.js";

import heroImage from "@/assets/images/spinal-decompression-hero.png";
import bodyImageOne from "@/assets/images/spinal-decompression-body-1.png";
import bodyImageTwo from "@/assets/images/spinal-decompression-body-2.png";

const trustItems = [
  {
    icon: Leaf,
    title: "Non-Surgical Care",
    text: "A non-surgical option for selected spinal conditions"
  },
  {
    icon: UserCheck,
    title: "Individual Assessment",
    text: "Care based on your symptoms and examination",
  },
  {
    icon: ShieldCheck,
    title: "Targeted Treatment",
    text: "Focused on spinal mobility and symptom management",
  },
  {
    icon: Clock3,
    title: "Gentle Approach",
    text: "Controlled traction tailored to your comfort",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support",
    text: "Guidance for movement and long-term function",
  },
];

const benefits = [
  {
    title: "May ease disc-related discomfort",
    text: "Non-surgical spinal decompression uses controlled traction to gently stretch the spine. For some patients with disc-related back or neck pain, this may provide short-term symptom relief as part of a broader treatment plan.",
  },
  {
    title: "A conservative option for disc problems",
    text: "People with certain bulging or herniated discs may be evaluated for decompression therapy. An examination helps determine whether traction is appropriate, because not every disc condition benefits from this approach.",
  },
  {
    title: "May help selected cases of radiating pain",
    text: "Pain, tingling, or discomfort traveling into an arm or leg can have several causes, including nerve irritation. Your clinician can assess whether spinal decompression or another form of care is appropriate.",
  },
  {
    title: "Supports a movement-focused care plan",
    text: "When symptoms improve, patients may find it easier to participate in mobility work, strengthening exercises, and everyday activities. Decompression may be combined with other conservative treatments when appropriate.",
  },
  {
    title: "Personalized to your needs",
    text: "Treatment settings, visit frequency, and other recommendations depend on your health history, examination findings, symptoms, and response to care. Results vary from person to person.",
  },
  {
    title: "Non-surgical and generally outpatient",
    text: "Spinal decompression does not involve surgery. Your clinician will review potential benefits, limitations, and contraindications before recommending treatment.",
  },
];

// Only show condition pages that exist in the shared conditions data.
// Slugs match the existing ConditionsPreview and dynamic condition routes.
const featuredSlugs = [
  "back-pain",
  "sciatica",
  "disc-problems",
  "neck-pain",
  "posture-related-pain",
  "joint-pain",
];

const linkedConditions = computed(() =>
  featuredSlugs
    .filter((slug) => conditionsData[slug])
    .map((slug) => ({
      slug,
      title: conditionsData[slug].title,
      to: `/conditions/${slug}`,
    }))
);
</script>

<template>
  <main class="spinal-page">
    <section class="spinal-hero" aria-labelledby="spinal-hero-title">
      <div class="spinal-hero__image">
        <img
          :src="heroImage"
          alt="Patient receiving spinal decompression therapy"
        />
      </div>

      <div class="container spinal-hero__inner">
        <div class="spinal-hero__content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/services">Services</RouterLink>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Spinal Decompression</span>
          </nav>

          <h1 id="spinal-hero-title">
            Gentle care.<br />
            Better movement.
          </h1>

          <p>
            Explore non-surgical spinal decompression in Forest Hills,
            Pittsburgh, PA. Treatment may help manage certain types of
            disc-related discomfort as part of a personalized care plan.
          </p>

          <RouterLink to="/booking" class="btn btn-primary">
            Request Appointment
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="spinal-trust" aria-label="Our approach">
      <div class="container spinal-trust__inner">
        <div
          v-for="item in trustItems"
          :key="item.title"
          class="spinal-trust__item"
        >
          <component
            :is="item.icon"
            class="spinal-trust__icon"
            :class="{ 'spinal-trust__icon--gold': item.gold }"
            :size="34"
            :stroke-width="1.7"
            aria-hidden="true"
          />
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section class="spinal-intro section">
      <div class="container spinal-intro__inner">
        <div class="spinal-intro__media">
          <img
            :src="bodyImageOne"
            alt="Chiropractor explaining spinal care using a spine model"
            loading="lazy"
          />
        </div>

        <div class="spinal-intro__content">
          <p class="eyebrow">How It Works</p>
          <h2>
            A gentle approach<br />
            to spinal care.
          </h2>
          <p>
            Non-surgical spinal decompression uses a specialized treatment
            table to apply controlled, intermittent traction to the spine.
            The goal is to gently change the forces acting on spinal
            structures and potentially reduce discomfort for appropriately
            selected patients.
          </p>
          <p>
            At Forest Hills Chiropractic, we evaluate your symptoms,
            health history, and movement needs before discussing whether
            spinal decompression belongs in your treatment plan.
          </p>
        </div>
      </div>
    </section>

    <section class="spinal-benefits section" aria-labelledby="spinal-benefits-heading">
      <div class="container spinal-benefits__inner">
        <div class="spinal-benefits__heading">
          <p class="eyebrow">The Benefits</p>
          <h2 id="spinal-benefits-heading">
            An individualized approach to disc-related discomfort.
          </h2>
          <p>
            Spinal decompression therapy in Pittsburgh is one of several
            conservative treatment options that may be considered for certain
            types of back pain, neck pain, and disc-related symptoms. By
            applying gentle, controlled traction, this approach aims to
            reduce discomfort and support participation in everyday movement.
            Not every patient is a candidate, and results vary. At Forest
            Hills Chiropractic, recommendations are based on a clinical
            evaluation rather than a one-size-fits-all treatment schedule.
          </p>
        </div>

        <div class="spinal-benefits__list">
          <details
            v-for="(benefit, index) in benefits"
            :key="benefit.title"
            class="spinal-benefits__item"
            :open="index === 0"
          >
            <summary>
              <CheckCircle :size="21" :stroke-width="1.8" aria-hidden="true" />
              <span>{{ benefit.title }}</span>
              <ChevronDown :size="19" :stroke-width="1.8" aria-hidden="true" />
            </summary>
            <p>{{ benefit.text }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="spinal-conditions section" aria-labelledby="spinal-conditions-heading">
      <div class="container spinal-conditions__inner">
        <div class="spinal-conditions__content">
          <p class="eyebrow">Who It Can Help</p>
          <h2 id="spinal-conditions-heading">
            Explore related spinal and movement concerns.
          </h2>
          <p>
            Symptoms such as persistent back pain, sciatica, and neck
            discomfort can have different underlying causes. Explore the
            conditions we evaluate and learn more about available care
            options. Decompression is not appropriate for every condition.
          </p>

          <div class="spinal-conditions__grid">
            <RouterLink
              v-for="condition in linkedConditions"
              :key="condition.slug"
              :to="condition.to"
              class="spinal-conditions__card"
            >
              <span>{{ condition.title }}</span>
              <ArrowRight :size="19" :stroke-width="1.8" aria-hidden="true" />
            </RouterLink>
          </div>

          <RouterLink to="/conditions" class="btn btn-primary spinal-conditions__all">
            Explore All Conditions
            <ArrowRight :size="18" :stroke-width="1.8" aria-hidden="true" />
          </RouterLink>
        </div>

        <div class="spinal-conditions__image">
          <img
            :src="bodyImageTwo"
            alt="Patient resting on a spinal decompression treatment table"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>
