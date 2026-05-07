<script setup>
import './CustomOrthotics.scss'
import Footer from '@/components/Footer/Footer.vue'
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
} from 'lucide-vue-next'

import heroImage from '@/assets/images/orthotics-hero.png'
import bodyImage from '@/assets/images/orthotics-body.png'

const trustItems = [
  {
    icon: Footprints,
    title: 'Improved Alignment',
    text: 'Supports proper foot mechanics and spinal alignment.',
    gold: true,
  },
  {
    icon: Leaf,
    title: 'Pain Relief',
    text: 'Reduces stress on feet, knees, hips, and back.',
  },
  {
    icon: Activity,
    title: 'Better Performance',
    text: 'Enhances movement and athletic performance.',
  },
  {
    icon: ShieldCheck,
    title: 'Prevent Injuries',
    text: 'Helps reduce overuse injuries and future problems.',
  },
  {
    icon: UserRound,
    title: 'Custom Fit',
    text: 'Made specifically for your unique feet and needs.',
  },
]

const process = [
  {
    icon: ClipboardList,
    title: 'Consultation',
    text: 'We listen, learn about your concerns, and understand your goals.',
  },
  {
    icon: ScanLine,
    title: 'Assessment',
    text: 'We evaluate your posture, gait, and foot mechanics to find the root cause.',
  },
  {
    icon: Ruler,
    title: 'Custom Design',
    text: 'Your orthotics are designed for the perfect fit and support.',
  },
  {
    icon: CalendarCheck,
    title: 'Fitting & Follow-Up',
    text: 'We ensure a proper fit and support your progress with follow-up care.',
  },
]

const benefits = [
  'Plantar fasciitis',
  'Sports injuries',
  'Knee, hip, and lower back pain',
  'Overpronation and flat feet',
  'Poor posture and alignment',
  'Shin splints and overuse injuries',
]

const testimonials = [
  {
    quote:
      'My custom orthotics have been a game changer. My foot pain is gone and I’m more active than ever.',
    name: 'Sarah M.',
  },
  {
    quote:
      'I noticed improvements in my posture and back pain within a few weeks. Highly recommend.',
    name: 'Jason T.',
  },
  {
    quote:
      'Great experience from start to finish. The orthotics are comfortable and really make a difference.',
    name: 'Michael R.',
  },
]
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

          <p class="eyebrow">Custom Orthotics</p>

          <h1>
            Better support.<br />
            Better movement.
          </h1>

          <p>
            Custom orthotics are designed to improve alignment, reduce pain, and
            support your body from the ground up.
          </p>

          <div class="orthotics-hero__actions">
            <a href="/booking" class="btn btn-primary">Request Appointment</a>
            <a href="#orthotics-process" class="btn btn-secondary">Learn More</a>
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
            Over-the-counter insoles cannot address the unique way your body
            moves. Our custom orthotics are designed based on a thorough
            evaluation to support your alignment, improve mobility, and reduce
            pain.
          </p>

          <ul>
            <li>
              <CheckCircle :size="18" :stroke-width="1.8" />
              Comprehensive foot and gait analysis
            </li>
            <li>
              <CheckCircle :size="18" :stroke-width="1.8" />
              Digitally scanned for precision
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
          <h2>A personalized process for lasting results.</h2>
          <p>
            Your orthotics are selected and fitted around your movement needs,
            activity level, and long-term goals.
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
          <h2>Orthotics can help with:</h2>
        </div>

        <div class="orthotics-benefits__grid">
          <div
            v-for="benefit in benefits"
            :key="benefit"
            class="orthotics-benefits__item"
          >
            <Footprints :size="32" :stroke-width="1.6" />
            <h3>{{ benefit }}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="orthotics-testimonials section">
      <div class="container">
        <div class="orthotics-section-header orthotics-section-header--center">
          <p class="eyebrow">What patients are saying</p>
        </div>

        <div class="orthotics-testimonials__grid">
          <article
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="orthotics-testimonials__card"
          >
            <div>“</div>
            <p>{{ testimonial.quote }}</p>
            <strong>— {{ testimonial.name }}</strong>
          </article>
        </div>
      </div>
    </section>

    <section class="orthotics-final-cta">
      <div class="container orthotics-final-cta__inner">
        <h2>Step into better support.</h2>
        <a href="/booking" class="btn btn-primary">
          Request Your Orthotics Today
        </a>
      </div>
    </section>

    <Footer />
  </main>
</template>