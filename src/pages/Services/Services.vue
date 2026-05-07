<script setup>
import './Services.scss'

import ServicesHero from '@/components/services/ServicesHero/ServicesHero.vue'
import ServicesGrid from '@/components/services/ServicesGrid/ServicesGrid.vue'
import ConditionsPreview from '@/components/services/ConditionsPreview/ConditionsPreview.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <main class="services-page">
    <ServicesHero />
    <ServicesGrid />
    <ConditionsPreview />
    <Footer />
  </main>
</template>