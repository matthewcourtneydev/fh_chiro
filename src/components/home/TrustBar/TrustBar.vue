<script setup>
import './TrustBar.scss'
import {
  Star,
  BadgeCheck,
  Users,
  ShieldCheck,
  CircleCheck,
} from 'lucide-vue-next'

const items = [
  {
    icon: Star,
    title: '5.0 Rating',
    text: '400+ Google Reviews',
    accent: true,
  },
  {
    icon: BadgeCheck,
    title: 'Trusted Chiropractor',
    text: 'Evidence-based care',
  },
  {
    icon: Users,
    title: '500+',
    text: 'Happy Patients',
  },
  {
    icon: ShieldCheck,
    title: 'Evidence-Based Care',
    text: 'Focused on lasting results',
  },
  {
    icon: CircleCheck,
    title: 'Personalized Treatment',
    text: 'Plans built around you',
  },
]
</script>

<template>
  <section class="trust-bar" aria-label="Practice highlights">
    <div class="container trust-bar__inner">
      <div
        v-for="item in items"
        :key="item.title"
        class="trust-bar__item"
      >
        <div
          class="trust-bar__icon"
          :class="{ 'trust-bar__icon--gold': item.accent }"
        >
          <component
            :is="item.icon"
            :size="32"
            :stroke-width="1.8"
          />
        </div>

        <div class="trust-bar__copy">
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>