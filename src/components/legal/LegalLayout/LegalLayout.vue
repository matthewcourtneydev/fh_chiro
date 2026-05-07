<script setup>
import './LegalLayout.scss'
import Footer from '@/components/Footer/Footer.vue'

defineProps({
  eyebrow: {
    type: String,
    default: 'Legal',
  },
  title: {
    type: String,
    required: true,
  },
  updated: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <main class="legal-page">
    <section class="legal-hero">
      <div class="container-reading legal-hero__inner">
        <p class="eyebrow">{{ eyebrow }}</p>
        <h1>{{ title }}</h1>

        <p v-if="updated" class="legal-hero__updated">
          Updated: {{ updated }}
        </p>
      </div>
    </section>

    <section class="legal-content section">
      <div class="container-reading legal-content__inner">
        <slot />
      </div>
    </section>

    <Footer />
  </main>
</template>