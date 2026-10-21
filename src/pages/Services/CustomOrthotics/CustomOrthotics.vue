<script setup>
import "./CustomOrthotics.scss";
import Footer from "@/components/Footer/Footer.vue";
import {
  Footprints,
  Leaf,
  Activity,
  ShieldCheck,
  UserRound,
  ClipboardList,
  ScanLine,
  Ruler,
  CalendarCheck,
  CheckCircle,
  PersonStanding,
  Dumbbell,
  Accessibility,
  GitBranch,
  Zap,
} from "lucide-vue-next";

import heroImage from "@/assets/images/orthotics-hero.png";
import bodyImage from "@/assets/images/orthotics-body.png";

const trustItems = [
  {
    icon: Footprints,
    title: "Improved Alignment",
    text: "Supports proper foot mechanics and spinal alignment.",
  },
  {
    icon: Leaf,
    title: "Pain Relief",
    text: "May help ease strain through the feet, knees, hips, and back.",
  },
  {
    icon: Activity,
    title: "Better Performance",
    text: "Supports comfortable movement during everyday activity and sport.",
  },
  {
    icon: ShieldCheck,
    title: "Activity Support",
    text: "May help manage repetitive stress during walking and training.",
  },
  {
    icon: UserRound,
    title: "Custom Fit",
    text: "Selected and fitted for your foot mechanics and individual needs.",
  },
];

const process = [
  {
    icon: ClipboardList,
    title: "Consultation",
    text: "We listen, learn about your concerns, and understand your goals.",
  },
  {
    icon: ScanLine,
    title: "Assessment",
    text: "We review posture, walking patterns, and foot mechanics to identify areas that may benefit from support.",
  },
  {
    icon: Ruler,
    title: "Custom Design",
    text: "Your orthotic recommendations are tailored to your assessment and comfort needs.",
  },
  {
    icon: CalendarCheck,
    title: "Fitting & Follow-Up",
    text: "We ensure a proper fit and support your progress with follow-up care.",
  },
];

const benefits = [
  {
    title: "Plantar fasciitis",
    icon: Footprints,
    path: "/conditions/foot-heel-pain",
  },
  {
    title: "Sports injuries",
    icon: Dumbbell,
    path: "/conditions/sports-injuries",
  },
  {
    title: "Knee, hip, and lower back pain",
    icon: Accessibility,
    path: "/conditions/joint-pain",
  },
  {
    title: "Overpronation and flat feet",
    icon: GitBranch,
    path: "/conditions/foot-heel-pain",
  },
  {
    title: "Poor posture and alignment",
    icon: PersonStanding,
    path: "/conditions/posture-related-pain",
  },
  {
    title: "Shin splints and overuse injuries",
    icon: Zap,
    path: "/conditions/muscle-strain-overuse",
  },
];
</script>

<template>
  <main class="orthotics-page">
    <section class="orthotics-hero">
      <div class="orthotics-hero__image">
        <img :src="heroImage" alt="Custom orthotic insole being reviewed" />
      </div>

      <div class="orthotics-hero__overlay"></div>

      <div class="container orthotics-hero__inner">
        <div class="orthotics-hero__content">
          <div class="breadcrumb breadcrumb--light">
            <a href="/services">Services</a>
            <span>/</span>
            <span>Custom Orthotics</span>
          </div>

          <p class="eyebrow">Personalized Foot Support</p>

          <h1>
            Better support.<br />
            Better movement.
          </h1>

          <p>
            Custom orthotics in Pittsburgh, PA designed to support better foot
            mechanics, alignment, comfort, and movement from the ground up.
          </p>

          <div class="orthotics-hero__actions">
            <a href="/booking" class="btn btn-primary">Request Appointment</a>
            <a href="#orthotics-process" class="btn btn-secondary"
              >Learn More</a
            >
          </div>
        </div>
      </div>
    </section>

    <section class="orthotics-trust">
      <div class="container orthotics-trust__inner">
        <div
          v-for="item in trustItems"
          :key="item.title"
          class="orthotics-trust__item"
        >
          <component
            :is="item.icon"
            :class="{ 'orthotics-trust__icon--gold': item.gold }"
            class="orthotics-trust__icon"
            :size="36"
            :stroke-width="1.7"
          />
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section class="orthotics-intro section">
      <div class="container orthotics-intro__inner">
        <div class="orthotics-intro__content">
          <p class="eyebrow">Custom Orthotics</p>
          <h2>Support that’s built for you.</h2>
          <p>
            Your feet influence how you walk, stand, and move throughout the
            day. At Forest Hills Chiropractic in Pittsburgh, we assess foot
            mechanics, gait, and your daily activities to determine whether
            custom orthotics may help improve comfort and support more efficient
            movement.
          </p>

          <ul>
            <li>
              <CheckCircle :size="18" :stroke-width="1.8" />
              Comprehensive foot and gait analysis
            </li>
            <li>
              <CheckCircle :size="18" :stroke-width="1.8" />
              Individualized assessment and fitting
            </li>
            <li>
              <CheckCircle :size="18" :stroke-width="1.8" />
              Designed for your lifestyle and goals
            </li>
            <li>
              <CheckCircle :size="18" :stroke-width="1.8" />
              Adjustments and follow-up care
            </li>
          </ul>

          <a href="#orthotics-process" class="btn btn-primary">How It Works</a>
        </div>

        <div class="orthotics-intro__image">
          <img
            :src="bodyImage"
            alt="Chiropractor explaining custom orthotics to a patient"
          />
        </div>
      </div>
    </section>

    <section id="orthotics-process" class="orthotics-process section">
      <div class="container">
        <div class="orthotics-section-header orthotics-section-header--center">
          <p class="eyebrow">Our Process</p>
          <h2>A thoughtful approach to better support.</h2>
          <p>
            From your initial consultation through fitting and follow-up, our
            custom orthotics process focuses on your foot mechanics, comfort,
            activity level, and individual movement goals.
          </p>
        </div>

        <div class="orthotics-process__steps">
          <div
            v-for="(step, index) in process"
            :key="step.title"
            class="orthotics-process__step"
          >
            <div class="orthotics-process__icon">
              <component :is="step.icon" :size="30" :stroke-width="1.7" />
            </div>
            <h3>{{ index + 1 }}. {{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="orthotics-benefits section">
      <div class="container orthotics-benefits__box">
        <div class="orthotics-section-header orthotics-section-header--center">
          <p class="eyebrow">Who can benefit?</p>
          <h2>Support for everyday movement challenges.</h2>
          <p>
            Custom foot orthotics may be considered for plantar heel discomfort,
            flat feet, overpronation, and movement-related strain. Our Forest
            Hills team evaluates your symptoms and determines whether orthotic
            support is appropriate as part of your care plan.
          </p>
        </div>
        <div class="orthotics-benefits__grid">
          <a
            v-for="benefit in benefits"
            :key="benefit.title"
            :href="benefit.path"
            class="orthotics-benefits__item"
          >
            <component :is="benefit.icon" :size="32" :stroke-width="1.6" />

            <h3>{{ benefit.title }}</h3>
          </a>
        </div>

        <div class="orthotics-benefits__footer">
          <a href="/conditions" class="btn btn-primary"
            >Explore All Conditions</a
          >
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>
