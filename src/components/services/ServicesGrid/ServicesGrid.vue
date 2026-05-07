<script setup>
import './ServicesGrid.scss'
import ServiceCard from '@/components/ServiceCard/ServiceCard.vue'

const services = [
  {
    title: "Chiropractic Adjustments",
    description: "Restore alignment and relieve pain through precise spinal care.",
    link: "/services/chiropractic-adjustments"
  },
  {
    title: "Spinal Decompression",
    description: "Non-surgical treatment for disc issues, sciatica, and chronic back pain.",
    link: "/services/spinal-decompression"
  },
  {
    title: "Therapies & Recovery",
    description: "Advanced treatments to reduce inflammation and accelerate healing.",
    link: "/services/therapies"
  },
  {
    title: "Family Chiropractic",
    description: "Safe, specialized care for pregnancy and pediatric needs.",
    link: "/services/family"
  },
  {
    title: "Corrective Care",
    description: "Improve posture, prevent injury, and maintain long-term wellness.",
    link: "/services/corrective"
  },
  {
    title: "Custom Orthotics",
    description: "Improve alignment and movement with custom-fit support.",
    link: "/services/orthotics"
  }
]
</script>

<template>
  <section class="services-grid section">
    <div class="container">
      <p class="eyebrow">Core Services</p>
      <h2>Personalized Care for How You Move.</h2>

      <div class="services-grid__wrapper">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :link="service.link"
        />
      </div>
    </div>
  </section>
</template>