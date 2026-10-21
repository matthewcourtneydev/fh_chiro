<script setup>
import "./ChiropracticAdjustments.scss";
import { RouterLink } from "vue-router";
import Footer from "@/components/Footer/Footer.vue";
import {
  Star,
  UserRound,
  ShieldCheck,
  HeartPulse,
  CheckCircle,
  ChevronDown,
} from "lucide-vue-next";

import heroImage from "@/assets/images/chiropractor-hero-img.png";
import officeImage from "@/assets/images/chiropractor-office-image.png";
import neckImage from "@/assets/images/chiropractor-neck-image.png";

const trustItems = [
  { icon: Star, title: "Evidence-Based Care", text: "Proven techniques for real results"},
  { icon: UserRound, title: "Personalized Treatment", text: "Care tailored to your body and goals" },
  { icon: ShieldCheck, title: "Improved Movement", text: "Restoring function and mobility" },
  { icon: HeartPulse, title: "Pain Relief", text: "Reducing pain and supporting healing" },
  { icon: CheckCircle, title: "Long-Term Support", text: "Helping you move better every day" },
];

const benefits = [
  { title: "Helps reduce back and neck pain", text: "Adjustments can help reduce pain caused by joint restriction, muscle tension, posture stress, and everyday wear. Many patients seek care for chronic or recurring discomfort." },
  { title: "Supports better mobility and posture", text: "By improving joint motion and reducing stiffness, chiropractic care can help you move more freely and support healthier posture patterns." },
  { title: "Addresses joint restriction and stiffness", text: "When joints are not moving well, surrounding muscles and tissues may compensate. Adjustments are designed to restore more natural movement." },
  { title: "Improves athletic performance", text: "For active patients, chiropractic care may support better mechanics, recovery, mobility, and overall movement quality." },
  { title: "Personalized to your symptoms and goals", text: "Care is tailored to your comfort level, symptoms, activity level, and long-term goals." },
  { title: "Supports long-term spinal health", text: "Regular care may help reduce recurring stiffness, improve movement habits, and support a healthier lifestyle over time." },
];

// Link only to condition routes already established on the site.

const conditions = [
  {
    title: "Back Pain",
    href: "/conditions/back-pain",
  },
  {
    title: "Neck Pain",
    href: "/conditions/neck-pain",
  },
  {
    title: "Headaches",
    href: "/conditions/headaches",
  },
  {
    title: "Joint Pain",
    href: "/conditions/joint-pain",
  },
  {
    title: "Sciatica",
    href: "/conditions/sciatica",
  },
  {
    title: "Sports Injuries",
    href: "/conditions/sports-injuries",
  },
];

</script>

<template>
  <main class="adjustments-page">
    <section class="adjustments-hero" aria-labelledby="adjustments-page-heading">
      <div class="adjustments-hero__image">
        <img :src="heroImage" alt="Chiropractor performing an adjustment on a patient" fetchpriority="high" />
      </div>
      <div class="container adjustments-hero__inner">
        <div class="adjustments-hero__content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/services">Services</RouterLink>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Chiropractic Adjustments</span>
          </nav>
          <h1 id="adjustments-page-heading">Chiropractic care designed to restore movement.</h1>
          <p>Personalized chiropractic adjustments at Forest Hills Chiropractic, serving Forest Hills and the greater Pittsburgh area, focused on joint mobility, comfort, and better everyday movement.</p>
          <RouterLink to="/booking" class="btn btn-primary">Request Appointment</RouterLink>
        </div>
      </div>
    </section>

    <section class="adjustments-trust" aria-label="Our approach to chiropractic care">
      <div class="container adjustments-trust__inner">
        <div v-for="item in trustItems" :key="item.title" class="adjustments-trust__item">
          <component :is="item.icon" :class="{ 'adjustments-trust__icon--gold': item.gold }" class="adjustments-trust__icon" :size="32" :stroke-width="1.7" aria-hidden="true" />
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section class="adjustments-intro section" aria-labelledby="adjustments-intro-heading">
      <div class="container adjustments-intro__inner">
        <div class="adjustments-intro__media">
          <img :src="officeImage" alt="Chiropractor providing personalized care in a treatment room" loading="lazy" />
        </div>
        <div class="adjustments-intro__content">
          <p class="eyebrow">How it helps</p>
          <h2 id="adjustments-intro-heading">Focused care for alignment, stiffness, and pain.</h2>
          <p>Chiropractic adjustments are used to help restore proper motion to joints that are not moving correctly. By improving joint function, care may help reduce pain, ease tension, and improve how your body moves.</p>
          <p>At Forest Hills Chiropractic, treatment is tailored to your unique symptoms, movement needs, and long-term goals.</p>
        </div>
      </div>
    </section>

    <section class="adjustments-benefits section" aria-labelledby="adjustments-benefits-heading">
      <div class="container adjustments-benefits__inner">
        <div class="adjustments-benefits__heading">
          <p class="eyebrow">The Benefits</p>
          <h2 id="adjustments-benefits-heading">Designed to help your body move better.</h2>
          <p>
            At Forest Hills Chiropractic, we provide individualized chiropractic
            adjustments for patients experiencing back pain, neck pain, joint
            stiffness, and restricted mobility. Our approach begins with an
            evaluation of your symptoms, posture, and movement to determine
            whether chiropractic care is appropriate for you. Treatment focuses
            on improving joint function, supporting comfortable movement, and
            helping you return to everyday activities with greater confidence.
          </p>
        </div>
        <div class="adjustments-benefits__list">
          <details v-for="(benefit, index) in benefits" :key="benefit.title" class="adjustments-benefits__item" :open="index === 0">
            <summary>
              <CheckCircle :size="20" :stroke-width="1.8" aria-hidden="true" />
              <span>{{ benefit.title }}</span>
              <ChevronDown class="adjustments-benefits__chevron" :size="20" :stroke-width="1.8" aria-hidden="true" />
            </summary>
            <p>{{ benefit.text }}</p>
          </details>
        </div>
      </div>
    </section>


<section class="adjustments-conditions section">
  <div class="container adjustments-conditions__inner">
    <div class="adjustments-conditions__content">
      <p class="eyebrow">Who It Can Help</p>

      <h2>Care for a wide range of people and conditions.</h2>

      <p>
        Chiropractic adjustments may be part of a personalized care
        plan for a variety of musculoskeletal concerns. Explore the
        conditions we evaluate at our Forest Hills office to learn
        more about symptoms and available treatment options.
      </p>

      <div class="adjustments-conditions__grid">
        <RouterLink
          v-for="condition in conditions"
          :key="condition.href"
          :to="condition.href"
          class="adjustments-conditions__card"
        >
          <span>{{ condition.title }}</span>
          <ArrowUpRight
            :size="18"
            :stroke-width="1.8"
            aria-hidden="true"
          />
        </RouterLink>
      </div>

      <RouterLink
        to="/conditions"
        class="btn btn-primary adjustments-conditions__all"
      >
        Explore All Conditions
        <ArrowRight
          :size="18"
          :stroke-width="1.8"
          aria-hidden="true"
        />
      </RouterLink>
    </div>

    <div class="adjustments-conditions__image">
      <img
        :src="neckImage"
        alt="Chiropractor working on a patient's back"
        loading="lazy"
      />
    </div>
  </div>
</section>

    <Footer />
  </main>
</template>
