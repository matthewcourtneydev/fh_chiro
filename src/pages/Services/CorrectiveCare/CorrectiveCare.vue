<script setup>
import './CorrectiveCare.scss'
import Footer from '@/components/Footer/Footer.vue'
import {
  Target,
  UserRound,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
  ChevronDown,
  ClipboardList,
  Activity,
  Dumbbell,
  HeartHandshake,
} from 'lucide-vue-next'

import heroImage from '@/assets/images/corrective-hero.png'
import bodyImage from '@/assets/images/corrective body.png'

const trustItems = [
  {
    icon: Target,
    title: 'Root Cause Focused',
    text: 'We identify and address the underlying issues causing pain or dysfunction.',
    gold: true,
  },
  {
    icon: UserRound,
    title: 'Personalized Plans',
    text: 'Every plan is tailored to your body, goals, and lifestyle.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Progress',
    text: 'We track your progress and adjust your plan as you improve.',
  },
  {
    icon: ShieldCheck,
    title: 'Long-Term Results',
    text: 'Our goal is lasting correction, not temporary relief.',
  },
]

const phases = [
  {
    icon: ClipboardList,
    title: 'Relief Care',
    time: '0–4 Weeks',
    text: 'Reduce pain and inflammation. Restore comfort and improve function so you can move and feel better.',
  },
  {
    icon: Activity,
    title: 'Corrective Care',
    time: '4–12 Weeks',
    text: 'Improve spinal alignment and mobility. Strengthen supporting muscles and correct movement patterns.',
  },
  {
    icon: Dumbbell,
    title: 'Stabilization Care',
    time: '3–6 Months',
    text: 'Build strength, endurance, and resilience. Support your body in maintaining long-term improvements.',
  },
  {
    icon: HeartHandshake,
    title: 'Wellness Care',
    time: 'Ongoing',
    text: 'Maintain results and continue supporting your health so you can live life to the fullest.',
  },
]

const conditions = [
  {
    title: 'Chronic back & neck pain',
    text:
      'Corrective care can help address recurring pain by improving movement patterns, posture, joint function, and the way your body handles stress.',
  },
  {
    title: 'Posture & spinal misalignment',
    text:
      'Long hours sitting, daily habits, and old injuries can contribute to postural changes. Corrective care focuses on improving alignment and function over time.',
  },
  {
    title: 'Headaches & migraines',
    text:
      'Neck tension, joint restriction, and posture strain may contribute to headaches. A structured plan can help reduce irritation and improve function.',
  },
  {
    title: 'Sciatica & nerve irritation',
    text:
      'Care may help reduce pressure and irritation around sensitive nerves while supporting mobility and better spinal mechanics.',
  },
  {
    title: 'Sports injuries',
    text:
      'Corrective care can support recovery by improving mobility, stability, and movement quality after injury or overuse.',
  },
  {
    title: 'Repetitive strain & overuse',
    text:
      'Small repeated stresses can build over time. Corrective care helps identify those patterns and support healthier movement.',
  },
]

const process = [
  {
    icon: ClipboardList,
    title: 'Consultation',
    text: 'We listen, learn about your goals, and understand your health history.',
  },
  {
    icon: Target,
    title: 'Assessment',
    text: 'We perform a thorough exam to identify the root cause of concerns.',
  },
  {
    icon: TrendingUp,
    title: 'Personalized Plan',
    text: 'We create a care plan tailored to your needs and lifestyle.',
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing Care',
    text: 'We support your progress with consistent care and long-term guidance.',
  },
]

const testimonials = [
  {
    quote:
      'Corrective care helped me finally fix my back pain for good. I’m stronger, more active, and able to do the things I love again.',
    name: 'Jessica M.',
  },
  {
    quote:
      'The plan was easy to follow and the progress I’ve made has been incredible. I wish I started sooner.',
    name: 'Michael T.',
  },
  {
    quote:
      'I feel better every week and know I’m building a healthier future with Corrective Care.',
    name: 'David R.',
  },
]
</script>

<template>
  <main class="corrective-page">
    <section class="corrective-hero">
      <div class="corrective-hero__image">
        <img
          :src="heroImage"
          alt="Chiropractor assessing posture in a modern clinic"
        />
      </div>

      <div class="corrective-hero__overlay"></div>

      <div class="container corrective-hero__inner">
        <div class="corrective-hero__content">
          <div class="breadcrumb breadcrumb--light">
            <a href="/services">Services</a>
            <span>/</span>
            <span>Corrective Care</span>
          </div>

          <p class="eyebrow">Corrective Care</p>

          <h1>
            Correct the cause.<br />
            Build lasting results.
          </h1>

          <p>
            Corrective Care is a structured, goal-oriented plan designed to
            address the root cause of your concerns — not just the symptoms.
          </p>

          <div class="corrective-hero__actions">
            <a href="/booking" class="btn btn-primary">Book Appointment</a>
            <a href="#how-it-works" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <section class="corrective-trust">
      <div class="container corrective-trust__inner">
        <div
          v-for="item in trustItems"
          :key="item.title"
          class="corrective-trust__item"
        >
          <component
            :is="item.icon"
            :class="{ 'corrective-trust__icon--gold': item.gold }"
            class="corrective-trust__icon"
            :size="36"
            :stroke-width="1.7"
          />

          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section class="corrective-intro section">
      <div class="container corrective-intro__inner">
        <div class="corrective-intro__content">
          <p class="eyebrow">What is corrective care?</p>

          <h2>
            A proactive approach to long-term wellness.
          </h2>

          <p>
            Corrective Care goes beyond short-term relief. It focuses on
            improving spinal alignment, restoring proper movement, and retraining
            your body so you can function, move, and feel your best — every day.
          </p>

          <ul>
            <li>
              <CheckCircle :size="18" :stroke-width="1.8" />
              Comprehensive assessments
            </li>
            <li>
              <CheckCircle :size="18" :stroke-width="1.8" />
              Customized treatment plans
            </li>
            <li>
              <CheckCircle :size="18" :stroke-width="1.8" />
              Rehabilitation and movement training
            </li>
            <li>
              <CheckCircle :size="18" :stroke-width="1.8" />
              Ongoing support and adjustments
            </li>
          </ul>

          <a href="#how-it-works" class="btn btn-primary">How It Works</a>
        </div>

        <div class="corrective-intro__image">
          <img
            :src="bodyImage"
            alt="Chiropractor reviewing spinal imaging with a patient"
          />
        </div>
      </div>
    </section>

    <section id="how-it-works" class="corrective-plan section">
      <div class="container">
        <div class="corrective-section-header corrective-section-header--center">
          <p class="eyebrow">Corrective Care Plan</p>

          <h2>A clear path to lasting results.</h2>

          <p>
            Your plan is divided into phases that build upon each other to
            correct, stabilize, and maintain your results.
          </p>
        </div>

        <div class="corrective-plan__box">
          <div class="corrective-plan__phases">
            <div
              v-for="(phase, index) in phases"
              :key="phase.title"
              class="corrective-plan__phase"
            >
              <div class="corrective-plan__icon">
                <component :is="phase.icon" :size="30" :stroke-width="1.7" />
              </div>

              <h3>{{ index + 1 }}. {{ phase.title }}</h3>
              <span>{{ phase.time }}</span>
              <p>{{ phase.text }}</p>
            </div>
          </div>

          <div class="corrective-plan__note">
            <CheckCircle :size="18" :stroke-width="1.8" />
            <p>
              Timeframes are estimates and vary for each individual. Your plan
              will be personalized for your goals and progress.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="corrective-conditions section">
      <div class="container corrective-conditions__inner">
        <div class="corrective-conditions__heading">
          <p class="eyebrow">Common conditions we address</p>

          <h2>
            We help with more than just pain.
          </h2>

          <p>
            Corrective care is designed to identify patterns, improve function,
            and help your body move with more stability and confidence.
          </p>
        </div>

        <div class="corrective-conditions__list">
          <details
            v-for="(condition, index) in conditions"
            :key="condition.title"
            class="corrective-conditions__item"
            :open="index === 0"
          >
            <summary>
              <CheckCircle :size="22" :stroke-width="1.8" />
              <span>{{ condition.title }}</span>
              <ChevronDown :size="20" :stroke-width="1.8" />
            </summary>

            <p>{{ condition.text }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="corrective-process section">
      <div class="container">
        <div class="corrective-section-header corrective-section-header--center">
          <p class="eyebrow">What to expect</p>
          <h2>A simple, personalized process.</h2>
          <span></span>
        </div>

        <div class="corrective-process__steps">
          <div
            v-for="step in process"
            :key="step.title"
            class="corrective-process__step"
          >
            <div class="corrective-process__icon">
              <component :is="step.icon" :size="30" :stroke-width="1.7" />
            </div>

            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="corrective-testimonials section">
      <div class="container">
        <div class="corrective-section-header corrective-section-header--center">
          <p class="eyebrow">What patients are saying</p>
        </div>

        <div class="corrective-testimonials__grid">
          <article
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="corrective-testimonials__card"
          >
            <div>“</div>
            <p>{{ testimonial.quote }}</p>
            <strong>— {{ testimonial.name }}</strong>
          </article>
        </div>
      </div>
    </section>

    <section class="corrective-final-cta">
      <div class="container corrective-final-cta__inner">
        <h2>Ready to correct the cause and build a healthier future?</h2>
        <a href="/booking" class="btn btn-primary">
          Book Your Appointment Today
        </a>
      </div>
    </section>

    <Footer />
  </main>
</template>