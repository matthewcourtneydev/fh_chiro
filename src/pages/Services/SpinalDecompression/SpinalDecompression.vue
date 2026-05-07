<script setup>
import './SpinalDecompression.scss'
import Footer from '@/components/Footer/Footer.vue'
import {
  Leaf,
  UserCheck,
  ShieldCheck,
  Clock3,
  RefreshCw,
  CheckCircle,
  ChevronDown,
} from 'lucide-vue-next'

import heroImage from '@/assets/images/spinal-decompression-hero.png'
import bodyImageOne from '@/assets/images/spinal-decompression-body-1.png'
import bodyImageTwo from '@/assets/images/spinal-decompression-body-2.png'

const trustItems = [
  {
    icon: Leaf,
    title: 'Non-Surgical Solution',
    text: 'Effective relief without surgery or medication',
    gold: true,
  },
  {
    icon: UserCheck,
    title: 'Targets the Source',
    text: 'Addresses disc pressure and nerve irritation',
  },
  {
    icon: ShieldCheck,
    title: 'Promotes Healing',
    text: 'Encourages your body’s natural recovery',
  },
  {
    icon: Clock3,
    title: 'Safe & Gentle',
    text: 'Comfortable treatments with no downtime',
  },
  {
    icon: RefreshCw,
    title: 'Long-Term Support',
    text: 'Helps reduce pain and improve quality of life',
  },
]

const benefits = [
  {
    title: 'Relieves pressure on discs and nerves',
    text:
      'Decompression gently relieves pressure caused by herniated or bulging discs, helping reduce pain, numbness, tingling, and radiating symptoms.',
  },
  {
    title: 'Supports herniated and bulging discs',
    text:
      'Gentle traction may help create space in the spine and reduce irritation around affected discs and nerves.',
  },
  {
    title: 'Reduces sciatica and nerve-related pain',
    text:
      'When nerve pressure is reduced, patients may experience less pain traveling into the hips, glutes, legs, or feet.',
  },
  {
    title: 'Improves mobility and flexibility',
    text:
      'By reducing pressure and stiffness, decompression care may help you move with less restriction and more confidence.',
  },
  {
    title: 'Promotes long-term spinal health',
    text:
      'Care is designed to support better spinal function, reduce recurring irritation, and help you maintain movement over time.',
  },
  {
    title: 'Non-invasive with no downtime',
    text:
      'Spinal decompression is a gentle, non-surgical option that allows most patients to return to normal daily activity after care.',
  },
]

const conditions = [
  'Herniated or bulging discs',
  'Sciatica',
  'Degenerative disc disease',
  'Chronic lower back pain',
  'Numbness or tingling',
  'Spinal stenosis',
  'Failed back surgery syndrome',
  'And more',
]
</script>

<template>
  <main class="spinal-page">
    <section class="spinal-hero">
      <div class="spinal-hero__image">
        <img
          :src="heroImage"
          alt="Patient receiving spinal decompression therapy"
        />
      </div>

      <div class="container spinal-hero__inner">
        <div class="spinal-hero__content">
          <div class="breadcrumb">
            <a href="/services">Services</a>
            <span>/</span>
            <span>Spinal Decompression</span>
          </div>

          <h1>
            Gentle relief.<br />
            Lasting results.
          </h1>

          <p>
            Spinal decompression is a non-surgical therapy designed to relieve
            pressure on spinal discs and nerves, reduce pain, and support natural
            healing.
          </p>

          <a href="/booking" class="btn btn-primary">Request Appointment</a>
        </div>
      </div>
    </section>

    <section class="spinal-trust">
      <div class="container spinal-trust__inner">
        <div
          v-for="item in trustItems"
          :key="item.title"
          class="spinal-trust__item"
        >
          <component
            :is="item.icon"
            :class="{ 'spinal-trust__icon--gold': item.gold }"
            class="spinal-trust__icon"
            :size="36"
            :stroke-width="1.7"
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
            alt="Doctor explaining spinal decompression using a spine model"
          />
        </div>

        <div class="spinal-intro__content">
          <p class="eyebrow">How it works</p>

          <h2>
            Relieve pressure.<br />
            Restore function.
          </h2>

          <p>
            Spinal decompression works by gently stretching the spine to help
            create negative pressure within the discs. This may help draw in
            nutrient-rich fluids, retract bulging or herniated discs, and take
            pressure off irritated nerves.
          </p>

          <p>
            Each session is tailored to your condition and comfort level to help
            you move, heal, and feel better.
          </p>
        </div>
      </div>
    </section>

    <section class="spinal-benefits section">
      <div class="container spinal-benefits__inner">
        <div class="spinal-benefits__heading">
          <p class="eyebrow">The Benefits</p>

          <h2>
            Designed to help you feel better and move more.
          </h2>

          <p>
            Spinal decompression offers a range of benefits for people dealing
            with chronic pain and disc-related issues.
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
              <CheckCircle :size="22" :stroke-width="1.8" />
              <span>{{ benefit.title }}</span>
              <ChevronDown :size="20" :stroke-width="1.8" />
            </summary>

            <p>{{ benefit.text }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="spinal-conditions section">
      <div class="container spinal-conditions__inner">
        <div class="spinal-conditions__content">
          <p class="eyebrow">Who it can help</p>

          <h2>
            Ideal for many conditions.
          </h2>

          <p>
            Spinal decompression may help if you’re dealing with persistent pain
            that hasn’t improved with other treatments.
          </p>

          <ul>
            <li v-for="condition in conditions" :key="condition">
              <CheckCircle :size="18" :stroke-width="1.8" />
              <span>{{ condition }}</span>
            </li>
          </ul>
        </div>

        <div class="spinal-conditions__image">
          <img
            :src="bodyImageTwo"
            alt="Patient relaxing during spinal decompression therapy"
          />
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>