
<script setup>
import './TrustBar.scss'
import { RouterLink } from 'vue-router'
import {
  Star,
  Award,
  HeartHandshake,
  Activity,
  MapPin,
} from 'lucide-vue-next'

const items = [
  {
    icon: Star,
    title: '4.9 Google Rating',
    text: '350+ Google Reviews',
    href: 'https://www.google.com/maps/search/?api=1&query=Forest+Hills+Chiropractic+Pittsburgh+PA',
    external: true,
  },
  {
    icon: Award,
    title: 'Experienced Chiropractor',
    text: 'Meet Dr. Michael Testen',
    href: '/about',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    text: 'Treatment built around you',
    href: '/services',
  },
  {
    icon: Activity,
    title: 'Recovery & Performance',
    text: 'Move better. Feel better.',
    href: '/services/therapies',
  },
  {
    icon: MapPin,
    title: 'Locally Owned & Operated',
    text: 'Proudly serving Forest Hills',
    href: '/contact',
  },
]
</script>

<template>
  <section class="trust-bar" aria-label="Practice highlights">
    <div class="container trust-bar__inner">
      <component
        :is="item.external ? 'a' : RouterLink"
        v-for="item in items"
        :key="item.title"
        :href="item.external ? item.href : undefined"
        :to="item.external ? undefined : item.href"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
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
            aria-hidden="true"
          />
        </div>

        <div class="trust-bar__copy">
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </component>
    </div>
  </section>
</template>
