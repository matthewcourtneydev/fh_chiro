<script setup>
import './AboutApproach.scss'
import { Target, HandHeart, BarChart3 } from 'lucide-vue-next'

const items = [
  {
    icon: Target,
    title: 'Find the Root Cause',
    text: 'We identify the source of your pain, not just the symptoms.',
  },
  {
    icon: HandHeart,
    title: 'Personalized Care',
    text: 'Every treatment plan is tailored to your unique needs and goals.',
  },
  {
    icon: BarChart3,
    title: 'Long-Term Results',
    text: 'We focus on lasting results so you can keep doing what you love.',
  },
]
</script>

<template>
  <section class="about-approach section">
    <div class="container">
      <div class="about-approach__header">
        <p class="eyebrow">Our Approach</p>
      </div>

      <div class="about-approach__grid">
        <article
          v-for="item in items"
          :key="item.title"
          class="about-approach__item"
        >
          <div class="about-approach__icon">
            <component :is="item.icon" :size="32" :stroke-width="1.8" />
          </div>

          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>