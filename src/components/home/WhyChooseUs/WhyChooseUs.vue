<script setup>
import './WhyChooseUs.scss'
import whyImage from '@/assets/images/why-choose-us.png'
import {
  UserRound,
  Target,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-vue-next'

const items = [
  {
    icon: UserRound,
    title: 'Experienced Doctor',
    text: 'Years of clinical experience with a focus on real results.',
  },
  {
    icon: Target,
    title: 'Performance Focused',
    text: 'We treat athletes, active individuals, and everyday movement.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    text: 'Every treatment plan is tailored to your goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Proven Results',
    text: 'Evidence-based care that delivers lasting relief.',
  },
]
</script>

<template>
  <section
    class="why"
    :style="{ backgroundImage: `url(${whyImage})` }"
    aria-label="Why choose us"
  >
    <div class="why__overlay"></div>

    <div class="container why__inner">
      <div class="why__spacer"></div>

      <div class="why__content">
        <p class="eyebrow">Why Choose Us</p>

        <h2>
          Built on experience.<br />
          Driven by purpose.
        </h2>

        <p class="why__intro">
          We combine hands-on expertise with a performance-driven approach to help
          you move better, feel better, and live better.
        </p>

        <div class="why__grid">
          <div
            v-for="item in items"
            :key="item.title"
            class="why__item"
          >
            <div class="why__icon">
              <component :is="item.icon" :size="28" :stroke-width="1.7" />
            </div>

            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>