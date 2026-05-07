<script setup>
import './ChiropracticAdjustments.scss'
import Footer from '@/components/Footer/Footer.vue'
import {
  Star,
  UserRound,
  ShieldCheck,
  HeartPulse,
  CheckCircle,
  ChevronDown,
} from 'lucide-vue-next'

import heroImage from '@/assets/images/chiropractor-hero-img.png'
import officeImage from '@/assets/images/chiropractor-office-image.png'
import neckImage from '@/assets/images/chiropractor-neck-image.png'

const trustItems = [
  {
    icon: Star,
    title: 'Evidence-Based Care',
    text: 'Proven techniques for real results',
    gold: true,
  },
  {
    icon: UserRound,
    title: 'Personalized Treatment',
    text: 'Care tailored to your body and goals',
  },
  {
    icon: ShieldCheck,
    title: 'Improved Movement',
    text: 'Restoring function and mobility',
  },
  {
    icon: HeartPulse,
    title: 'Pain Relief',
    text: 'Reducing pain and supporting healing',
  },
  {
    icon: CheckCircle,
    title: 'Long-Term Support',
    text: 'Helping you move better every day',
  },
]

const benefits = [
  {
    title: 'Helps reduce back and neck pain',
    text:
      'Adjustments can help reduce pain caused by joint restriction, muscle tension, posture stress, and everyday wear. Many patients seek care for chronic or recurring discomfort.',
  },
  {
    title: 'Supports better mobility and posture',
    text:
      'By improving joint motion and reducing stiffness, chiropractic care can help you move more freely and support healthier posture patterns.',
  },
  {
    title: 'Addresses joint restriction and stiffness',
    text:
      'When joints are not moving well, surrounding muscles and tissues may compensate. Adjustments are designed to restore more natural movement.',
  },
  {
    title: 'Improves athletic performance',
    text:
      'For active patients, chiropractic care may support better mechanics, recovery, mobility, and overall movement quality.',
  },
  {
    title: 'Personalized to your symptoms and goals',
    text:
      'Care is tailored to your comfort level, symptoms, activity level, and long-term goals.',
  },
  {
    title: 'Supports long-term spinal health',
    text:
      'Regular care may help reduce recurring stiffness, improve movement habits, and support a healthier lifestyle over time.',
  },
]

const conditions = [
  'Back and neck pain',
  'Headaches and migraines',
  'Postural strain',
  'Sports and overuse injuries',
  'Joint stiffness',
  'Sciatica',
  'Everyday movement challenges',
  'And more',
]
</script>

<template>
  <main class="adjustments-page">
    <section class="adjustments-hero">
      <div class="adjustments-hero__image">
        <img
          :src="heroImage"
          alt="Chiropractor performing an adjustment on a patient"
        />
      </div>

      <div class="container adjustments-hero__inner">
        <div class="adjustments-hero__content">
          <div class="breadcrumb">
            <a href="/services">Services</a>
            <span>/</span>
            <span>Chiropractic Adjustments</span>
          </div>

          <h1>Chiropractic care designed to restore movement.</h1>

          <p>
            Gentle, precise adjustments to help improve alignment, reduce joint
            restriction, and support better everyday movement.
          </p>

          <a href="/booking" class="btn btn-primary">Request Appointment</a>
        </div>
      </div>
    </section>

    <section class="adjustments-trust">
      <div class="container adjustments-trust__inner">
        <div
          v-for="item in trustItems"
          :key="item.title"
          class="adjustments-trust__item"
        >
          <component
            :is="item.icon"
            :class="{ 'adjustments-trust__icon--gold': item.gold }"
            class="adjustments-trust__icon"
            :size="36"
            :stroke-width="1.7"
          />

          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section class="adjustments-intro section">
      <div class="container adjustments-intro__inner">
        <div class="adjustments-intro__media">
          <img
            :src="officeImage"
            alt="Clean modern chiropractic treatment room"
          />
        </div>

        <div class="adjustments-intro__content">
          <p class="eyebrow">How it helps</p>

          <h2>Focused care for alignment, stiffness, and pain.</h2>

          <p>
            Chiropractic adjustments are used to help restore proper motion to
            joints that are not moving correctly. By improving joint function,
            care may help reduce pain, ease tension, and improve how your body
            moves.
          </p>

          <p>
            At Forest Hills Chiropractic, treatment is tailored to your unique
            symptoms, movement needs, and long-term goals.
          </p>
        </div>
      </div>
    </section>

    <section class="adjustments-benefits section">
      <div class="container adjustments-benefits__inner">
        <div class="adjustments-benefits__heading">
          <p class="eyebrow">The Benefits</p>
          <h2>Designed to help your body move better.</h2>
          <p>
            Chiropractic care supports your body’s ability to move, heal, and
            perform at its best.
          </p>
        </div>

        <div class="adjustments-benefits__list">
          <details
            v-for="(benefit, index) in benefits"
            :key="benefit.title"
            class="adjustments-benefits__item"
            :open="index === 0"
          >
            <summary>
              <CheckCircle :size="22" :stroke-width="1.8" />
              <span>{{ benefit.title }}</span>
              <ChevronDown :size="20" :stroke-width="1.8" />
            </summary>

            <p>{{ benefit.text }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="adjustments-conditions section">
      <div class="container adjustments-conditions__inner">
        <div class="adjustments-conditions__content">
          <p class="eyebrow">Who it can help</p>

          <h2>Care for a wide range of people and conditions.</h2>

          <p>
            Chiropractic adjustments can help people of all ages — whether
            you’re dealing with pain, recovering from an injury, or simply
            looking to move and feel better.
          </p>

          <ul>
            <li v-for="condition in conditions" :key="condition">
              <CheckCircle :size="18" :stroke-width="1.8" />
              <span>{{ condition }}</span>
            </li>
          </ul>
        </div>

        <div class="adjustments-conditions__image">
          <img
            :src="neckImage"
            alt="Chiropractor working on a patient’s neck and shoulders"
          />
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>