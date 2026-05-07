<script setup>
import './ServicesPreview.scss'
import { Activity, Bone, Sparkles, HeartHandshake, Footprints } from 'lucide-vue-next'

const services = [
  {
    icon: Activity,
    title: 'Chiropractic Adjustments',
    text: 'Restore alignment and relieve pain through precise spinal care.',
    link: '/services/chiropractic-adjustments',
  },
  {
    icon: Bone,
    title: 'Spinal Decompression',
    text: 'Non-surgical treatment for disc issues, sciatica, and chronic back pain.',
    link: '/services/spinal-decompression',
  },
  {
    icon: Sparkles,
    title: 'Therapies & Recovery',
    text: 'Advanced treatments to reduce inflammation and accelerate healing.',
    link: '/services/therapies',
  },
  {
    icon: HeartHandshake,
    title: 'Family Chiropractic',
    text: 'Safe, specialized care for pregnancy and pediatric needs.',
    link: '/services/family',
  },
  {
    icon: Footprints,
    title: 'Custom Orthotics',
    text: 'Improve alignment and movement with custom-fit support.',
    link: '/services/orthotics',
  },
]
</script>

<template>
  <section id="services" class="services-preview section">
    <div class="container">
      <div class="services-preview__header">
        <div>
          <p class="eyebrow">Our Services</p>
          <h2>
            Care that gets you<br />
            back to what you love.
          </h2>
        </div>

        <p class="services-preview__intro">
          We offer a range of evidence-based chiropractic services designed to
          reduce pain, restore function, and help you move better every day.
        </p>
      </div>

      <div class="services-preview__grid">
        <a
          v-for="service in services"
          :key="service.title"
          class="services-preview__card"
          :href="service.link"
        >
          <div class="services-preview__icon">
            <component :is="service.icon" :size="26" :stroke-width="1.8" />
          </div>

          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>

          <span class="services-preview__link">Learn More →</span>
        </a>
      </div>
    </div>
  </section>
</template>