<script setup>
import "./Therapies.scss";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import Footer from "@/components/Footer/Footer.vue";
import {
  CheckCircle,
  ChevronDown,
  HandHeart,
  Sparkles,
  Activity,
  Dumbbell,
  Wind,
  StretchHorizontal,
  ArrowRight,
} from "lucide-vue-next";
import { conditions as conditionsData } from "@/data/conditions.js";

import heroImage from "@/assets/images/therapies-recovery-hero.png";
import bodyImageOne from "@/assets/images/therapies-recovery-body-1.png";
import bodyImageTwo from "@/assets/images/therapies-recovery-body-2.png";

const modalities = [
  {
    icon: HandHeart,
    title: "Soft Tissue Therapy",
    text: "Hands-on techniques may help address muscle tension and soft tissue discomfort as part of a personalized treatment plan.",
  },
  {
    icon: StretchHorizontal,
    title: "Stretch Therapy",
    text: "Guided stretching and movement strategies can support flexibility, comfort, and range of motion.",
  },
  {
    icon: Sparkles,
    title: "Recovery Therapies",
    text: "Individualized approaches to managing soreness and supporting recovery between daily activities or training sessions.",
  },
  {
    icon: Activity,
    title: "Mobility Work",
    text: "Targeted movement exercises designed to address restrictions and help improve everyday function.",
  },
  {
    icon: Wind,
    title: "Tension Management",
    text: "Focused care for muscle tightness, discomfort, and stress-related movement limitations.",
  },
  {
    icon: Dumbbell,
    title: "Performance Support",
    text: "Movement and recovery guidance tailored to the demands of sports, exercise, and active lifestyles.",
  },
];

const recoveryQuestions = [
  {
    title: "What can therapy and recovery care help with?",
    text: "Depending on your evaluation, therapy may help manage muscle tension, soreness, stiffness, postural discomfort, and restricted movement. Your clinician can recommend an approach based on your symptoms and goals.",
  },
  {
    title: "Can therapies be combined with chiropractic adjustments?",
    text: "Yes. When appropriate, soft tissue techniques, guided stretching, and mobility exercises can complement chiropractic adjustments as part of a coordinated care plan.",
  },
  {
    title: "What should I expect during a session?",
    text: "Your clinician will discuss the treatment approach and tailor the intensity to your comfort level. Some techniques feel gentle, while others may involve controlled pressure or active movement. Let your provider know if anything feels uncomfortable.",
  },
  {
    title: "Who may benefit from recovery-focused care?",
    text: "Athletes, active adults, desk workers, and people experiencing recurring muscle tension or movement limitations may be candidates. An assessment helps determine which techniques, if any, are appropriate.",
  },
  {
    title: "How often should I schedule treatment?",
    text: "Frequency varies according to your health history, symptoms, goals, and response to treatment. Your clinician can explain recommended visits and self-care strategies after an evaluation.",
  },
];

// Titles and destinations come from the same conditions.js used by the conditions pages.
const featuredConditionSlugs = [
  "neck-pain",
  "shoulder-pain",
  "posture-related-pain",
  "sports-injuries",
  "muscle-strain-overuse",
  "joint-pain",
];

const linkedConditions = computed(() =>
  featuredConditionSlugs
    .filter((slug) => conditionsData[slug])
    .map((slug) => ({
      slug,
      title: conditionsData[slug].title,
      to: `/conditions/${slug}`,
    }))
);
</script>

<template>
  <main class="therapies-page">
    <section class="therapies-hero" aria-labelledby="therapies-hero-title">
      <div class="container therapies-hero__inner">
        <div class="therapies-hero__content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/services">Services</RouterLink>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Therapies &amp; Recovery</span>
          </nav>

          <h1 id="therapies-hero-title">Recover.<br />Restore.<br />Move better.</h1>
          <p>
            Explore personalized therapy and recovery care in Forest Hills,
            Pittsburgh, PA. Our movement-focused approach may help address
            muscle tension, stiffness, and activity-related discomfort.
          </p>
          <RouterLink to="/booking" class="btn btn-primary">Request Appointment</RouterLink>
        </div>

        <div class="therapies-hero__visual">
          <img :src="heroImage" alt="Treatment area at a chiropractic and recovery clinic" />
          <div class="therapies-hero__card">
            <Sparkles :size="29" :stroke-width="1.6" aria-hidden="true" />
            <span aria-hidden="true"></span>
            <h2>Care focused on helping you:</h2>
            <ul>
              <li><CheckCircle :size="17" aria-hidden="true" />Manage muscle tension</li>
              <li><CheckCircle :size="17" aria-hidden="true" />Improve mobility</li>
              <li><CheckCircle :size="17" aria-hidden="true" />Support recovery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="therapies-modalities section" aria-labelledby="therapies-modalities-heading">
      <div class="container">
        <div class="therapies-section-header">
          <p class="eyebrow">Recovery Modalities</p>
          <h2 id="therapies-modalities-heading">Care options built around how your body moves.</h2>
          <p>
            Recovery needs differ from person to person. After evaluating your symptoms,
            movement, and goals, our team may recommend hands-on therapy, stretching,
            mobility exercises, or other supportive techniques.
          </p>
        </div>
        <div class="therapies-modalities__grid">
          <div v-for="item in modalities" :key="item.title" class="therapies-modalities__card">
            <div class="therapies-modalities__icon">
              <component :is="item.icon" :size="27" :stroke-width="1.7" aria-hidden="true" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="therapies-intro section">
      <div class="container therapies-intro__inner">
        <div class="therapies-intro__media">
          <img :src="bodyImageOne" alt="Hands-on treatment in a chiropractic clinic" loading="lazy" />
        </div>
        <div class="therapies-intro__content">
          <p class="eyebrow">How It Helps</p>
          <h2>Less tension. More control. Better movement.</h2>
          <p>
            Muscles, joints, and surrounding soft tissues all contribute to how you move.
            When discomfort or stiffness affects your routine, therapy may be used to
            address soft tissue restrictions and help you participate more comfortably
            in everyday activity.
          </p>
          <p>
            At Forest Hills Chiropractic, therapy and recovery services can complement
            chiropractic adjustments, guided mobility work, and individualized movement
            recommendations when clinically appropriate.
          </p>
        </div>
      </div>
    </section>

    <section class="therapies-accordion section" aria-labelledby="therapies-questions-heading">
      <div class="container therapies-accordion__inner">
        <div class="therapies-accordion__heading">
          <p class="eyebrow">Common Questions</p>
          <h2 id="therapies-questions-heading">What to know about therapy and recovery care.</h2>
          <p>
            Therapy and recovery services in Forest Hills, Pittsburgh may include
            soft tissue techniques, stretching, and movement-focused exercises.
            The right approach depends on your health history, physical evaluation,
            symptoms, and activity goals. Explore answers to common questions
            about what treatment may involve and how it fits into your care plan.
          </p>
        </div>
        <div class="therapies-accordion__list">
          <details
            v-for="(item, index) in recoveryQuestions"
            :key="item.title"
            class="therapies-accordion__item"
            :open="index === 0"
          >
            <summary>
              <CheckCircle :size="21" :stroke-width="1.8" aria-hidden="true" />
              <span>{{ item.title }}</span>
              <ChevronDown :size="19" :stroke-width="1.8" aria-hidden="true" />
            </summary>
            <p>{{ item.text }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="therapies-performance" aria-labelledby="therapies-performance-heading">
      <div class="container therapies-performance__inner">
        <div>
          <p class="eyebrow">Performance Recovery</p>
          <h2 id="therapies-performance-heading">For athletes, active adults, and everyday movers.</h2>
        </div>
        <p>
          Whether you're returning to exercise, spending long hours at a desk,
          or managing recurring muscle tightness, a personalized recovery plan
          can help you work toward more comfortable movement and activity.
        </p>
      </div>
    </section>

    <section class="therapies-help section" aria-labelledby="therapies-help-heading">
      <div class="container therapies-help__inner">
        <div class="therapies-help__content">
          <p class="eyebrow">Who It Can Help</p>
          <h2 id="therapies-help-heading">Explore related conditions and movement concerns.</h2>
          <p>
            Muscle tension, stiffness, and restricted movement can have different
            underlying causes. Explore conditions our team evaluates and learn
            about the care options that may be appropriate for your needs.
          </p>
          <div class="therapies-help__grid">
            <RouterLink
              v-for="condition in linkedConditions"
              :key="condition.slug"
              :to="condition.to"
              class="therapies-help__card"
            >
              <span>{{ condition.title }}</span>
              <ArrowRight :size="19" :stroke-width="1.8" aria-hidden="true" />
            </RouterLink>
          </div>
          <RouterLink to="/conditions" class="btn btn-primary therapies-help__all">
            Explore All Conditions
            <ArrowRight :size="18" :stroke-width="1.8" aria-hidden="true" />
          </RouterLink>
        </div>
        <div class="therapies-help__image">
          <img :src="bodyImageTwo" alt="Patient practicing guided recovery and mobility work" loading="lazy" />
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>
