<script setup>
import "./CorrectiveCare.scss";
import { RouterLink } from "vue-router";
import Footer from "@/components/Footer/Footer.vue";
import {
  Target, UserRound, TrendingUp, ShieldCheck, CheckCircle,
  ClipboardList, Activity, Dumbbell, HeartHandshake, ArrowUpRight,
} from "lucide-vue-next";

import heroImage from "@/assets/images/corrective-hero.png";
import bodyImage from "@/assets/images/corrective body.png";

const trustItems = [
  { icon: Target, title: "Individualized Evaluation", text: "Care begins with understanding your symptoms and movement." },
  { icon: UserRound, title: "Personalized Plans", text: "Recommendations tailored to your needs and goals." },
  { icon: TrendingUp, title: "Progress Tracking", text: "Your plan can be adjusted as your needs change." },
  { icon: ShieldCheck, title: "Long-Term Support", text: "Building movement habits that support daily life." },
];

const phases = [
  { icon: ClipboardList, title: "Relief Care", time: "Initial Phase", text: "Focus on comfort, symptom management, and restoring movement where appropriate." },
  { icon: Activity, title: "Corrective Care", time: "Progressive Phase", text: "Work on mobility, movement patterns, and functional limitations identified during your assessment." },
  { icon: Dumbbell, title: "Stabilization", time: "Building Phase", text: "Support strength, control, and confidence with exercises and care tailored to your progress." },
  { icon: HeartHandshake, title: "Ongoing Support", time: "As Needed", text: "Review progress and discuss practical strategies for maintaining comfortable everyday movement." },
];

// Use established condition routes. Add or change items here as new pages launch.
const relatedConditions = [
  { title: "Back Pain", slug: "back-pain" },
  { title: "Neck Pain", slug: "neck-pain" },
  { title: "Headaches", slug: "headaches" },
  { title: "Sciatica", slug: "sciatica" },
  { title: "Sports Injuries", slug: "sports-injuries" },
  { title: "Joint Pain", slug: "joint-pain" },
];

const process = [
  { icon: ClipboardList, title: "Consultation", text: "Discuss your symptoms, health history, and what you want to improve." },
  { icon: Target, title: "Assessment", text: "Evaluate relevant movement, mobility, and functional concerns." },
  { icon: TrendingUp, title: "Personalized Plan", text: "Review care options and set realistic goals together." },
  { icon: HeartHandshake, title: "Progress Review", text: "Monitor your response and adapt recommendations when needed." },
];

const testimonials = [
  { quote: "I had back pain that set me back for 3 years not being able to do the normal things I do now... I can once again enjoy going out with my husband and son. I tell everyone about Dr. Testen.", name: "M. N." },
  { quote: "I am a teacher who was having trouble standing at the blackboard because of the pain. Chiropractic has taken away my pain leaving me with more energy. I now am pain free with no movement problems.", name: "A. M." },
];
</script>

<template>
  <main class="corrective-page">
    <section class="corrective-hero" aria-labelledby="corrective-page-heading">
      <div class="corrective-hero__image">
        <img :src="heroImage" alt="Chiropractic care in a treatment room" fetchpriority="high" />
      </div>
      <div class="container corrective-hero__inner">
        <div class="corrective-hero__content">
          <nav class="corrective-breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/services">Services</RouterLink>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Corrective Care</span>
          </nav>
          <h1 id="corrective-page-heading">Care focused on how you move and feel.</h1>
          <p>Individualized corrective chiropractic care in Forest Hills, Pittsburgh, focused on movement, mobility, posture, and long-term function.</p>
          <RouterLink to="/booking" class="btn btn-primary">Request Appointment</RouterLink>
        </div>
      </div>
    </section>

    <section class="corrective-trust" aria-label="Our approach to corrective care">
      <div class="container corrective-trust__inner">
        <div v-for="item in trustItems" :key="item.title" class="corrective-trust__item">
          <component :is="item.icon" class="corrective-trust__icon" :class="{ 'corrective-trust__icon--gold': item.gold }" :size="32" :stroke-width="1.7" aria-hidden="true" />
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section class="corrective-intro section" aria-labelledby="corrective-intro-heading">
      <div class="container corrective-intro__inner">
        <div class="corrective-intro__image">
          <img :src="bodyImage" alt="Chiropractor discussing spinal health and treatment options" loading="lazy" />
        </div>
        <div class="corrective-intro__content">
          <p class="eyebrow">What is corrective care?</p>
          <h2 id="corrective-intro-heading">A personalized approach to better movement.</h2>
          <p>Corrective chiropractic care looks beyond a single symptom to evaluate how joint mobility, posture, muscle function, and daily movement habits may contribute to discomfort. At Forest Hills Chiropractic, we consider your history and goals before recommending an appropriate plan.</p>
          <p>Care may combine chiropractic adjustments, guided movement, and practical strategies to help you move more comfortably in everyday life.</p>
          <ul>
            <li><CheckCircle :size="18" :stroke-width="1.8" aria-hidden="true" /> Individualized assessment</li>
            <li><CheckCircle :size="18" :stroke-width="1.8" aria-hidden="true" /> Care tailored to your symptoms</li>
            <li><CheckCircle :size="18" :stroke-width="1.8" aria-hidden="true" /> Movement and mobility guidance</li>
            <li><CheckCircle :size="18" :stroke-width="1.8" aria-hidden="true" /> Progress reviews and ongoing support</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="how-it-works" class="corrective-plan section" aria-labelledby="corrective-plan-heading">
      <div class="container">
        <div class="corrective-section-header">
          <p class="eyebrow">Your Care Plan</p>
          <h2 id="corrective-plan-heading">A thoughtful path forward.</h2>
          <p>Corrective care is not a fixed schedule for every patient. Depending on your assessment, treatment may progress from addressing current discomfort to improving mobility, developing stability, and maintaining the progress that matters to you.</p>
        </div>
        <div class="corrective-plan__phases">
          <article v-for="(phase, index) in phases" :key="phase.title" class="corrective-plan__phase">
            <span class="corrective-plan__number">0{{ index + 1 }}</span>
            
            <h3>{{ phase.title }}</h3>
            <span class="corrective-plan__stage">{{ phase.time }}</span>
            <p>{{ phase.text }}</p>
          </article>
        </div>
        <p class="corrective-plan__note">Your care plan, visit frequency, and expected timeline depend on your individual needs and clinical evaluation.</p>
      </div>
    </section>

    <section class="corrective-conditions section" aria-labelledby="corrective-conditions-heading">
      <div class="container corrective-conditions__inner">
        <div class="corrective-conditions__content">
          <p class="eyebrow">Who it can help</p>
          <h2 id="corrective-conditions-heading">Care for a range of conditions and concerns.</h2>
          <p>Patients seek corrective chiropractic care for many musculoskeletal concerns, including recurring discomfort, restricted movement, and activity-related strain. Explore the conditions we evaluate at Forest Hills Chiropractic to learn more about symptoms and care options.</p>
          <div class="corrective-conditions__grid">
            <RouterLink v-for="condition in relatedConditions" :key="condition.slug" :to="`/conditions/${condition.slug}`" class="corrective-conditions__card">
              <span>{{ condition.title }}</span>
              <ArrowUpRight :size="18" :stroke-width="1.8" aria-hidden="true" />
            </RouterLink>
          </div>
          <RouterLink to="/conditions" class="btn btn-primary corrective-conditions__all">Explore All Conditions</RouterLink>
        </div>
      </div>
    </section>

    <section class="corrective-process section" aria-labelledby="corrective-process-heading">
      <div class="container">
        <div class="corrective-section-header corrective-section-header--center">
          <p class="eyebrow">What to expect</p>
          <h2 id="corrective-process-heading">A simple, personalized process.</h2>
        </div>
        <div class="corrective-process__steps">
          <article v-for="(step, index) in process" :key="step.title" class="corrective-process__step">
            <span class="corrective-process__number">0{{ index + 1 }}</span>
            <component :is="step.icon" :size="27" :stroke-width="1.7" aria-hidden="true" />
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="corrective-testimonials section" aria-labelledby="corrective-testimonials-heading">
      <div class="container">
        <div class="corrective-section-header corrective-section-header--center">
          <p class="eyebrow">Patient Experiences</p>
          <h2 id="corrective-testimonials-heading">What our patients have shared.</h2>
        </div>
        <div class="corrective-testimonials__grid">
          <blockquote v-for="testimonial in testimonials" :key="testimonial.name" class="corrective-testimonials__card">
            <span class="corrective-testimonials__quote" aria-hidden="true">“</span>
            <p>{{ testimonial.quote }}</p>
            <footer>— {{ testimonial.name }}</footer>
          </blockquote>
        </div>
        <p class="corrective-testimonials__disclaimer">Individual experiences vary. Testimonials do not guarantee specific results.</p>
      </div>
    </section>

    <!-- Footer includes the site's shared appointment CTA. -->
    <Footer />
  </main>
</template>
