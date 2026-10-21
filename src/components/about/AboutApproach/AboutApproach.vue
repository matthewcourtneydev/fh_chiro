<script setup>
import './AboutApproach.scss'
import { Target, HandHeart, ChartNoAxesCombined, ArrowUpRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const items = [
  {
    icon: Target,
    number: '01',
    title: 'Find the Root Cause',
    text: 'We take time to understand your symptoms, movement, and health history to identify potential underlying causes of discomfort—not just where it hurts.',
    linkText: 'Conditions We Treat',
    to: '/conditions',
  },
  {
    icon: HandHeart,
    number: '02',
    title: 'Personalized Care',
    text: 'No two patients are alike. We develop individualized care plans using chiropractic adjustments and supportive therapies suited to your needs and goals.',
    linkText: 'Explore Our Services',
    to: '/services',
  },
  {
    icon: ChartNoAxesCombined,
    number: '03',
    title: 'Long-Term Results',
    text: 'Our focus extends beyond short-term relief. We work with patients to support mobility, recovery, and the ability to stay active in everyday life.',
    linkText: 'Explore Chiropractic Care',
    to: '/services/chiropractic-adjustments',
  },
]
</script>

<template>
  <section class="about-approach section" aria-labelledby="about-approach-title">
    <div class="container">
      <header class="about-approach__header">
        <p class="eyebrow">Our Approach</p>
        <h2 id="about-approach-title">Care Built Around <span>You.</span></h2>
        <p class="about-approach__intro">
          From understanding your discomfort to developing a personalized treatment plan,
          our approach is focused on helping you move better and live healthier.
        </p>
      </header>

      <div class="about-approach__grid">
        <article v-for="item in items" :key="item.number" class="about-approach__item">
          <div class="about-approach__top">
            <div class="about-approach__icon" aria-hidden="true">
              <component :is="item.icon" :size="32" :stroke-width="1.7" />
            </div>
            <span class="about-approach__number" aria-hidden="true">{{ item.number }}</span>
          </div>

          <h3>{{ item.title }}</h3>
          <p class="about-approach__description">{{ item.text }}</p>

          <RouterLink class="about-approach__link" :to="item.to">
            <span>{{ item.linkText }}</span>
            <ArrowUpRight :size="19" :stroke-width="1.9" aria-hidden="true" />
          </RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>
