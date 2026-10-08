<script setup>
import "./ServicesGrid.scss";
import ServiceCard from "@/components/ServiceCard/ServiceCard.vue";

const services = [
  {
    title: "Chiropractic Adjustments",
    category: "Spinal Care",
    description:
      "Personalized chiropractic adjustments designed to improve joint mobility, reduce discomfort, and restore healthy movement. Care is tailored to your individual needs and goals.",
    link: "/services/chiropractic-adjustments",
  },
  {
    title: "Spinal Decompression",
    category: "Disc & Nerve Care",
    description:
      "A non-surgical treatment approach designed to relieve pressure on spinal discs and nerves. Often explored for persistent back pain, sciatica, and disc-related conditions.",
    link: "/services/spinal-decompression",
  },
  {
    title: "Therapies & Recovery",
    category: "Recovery & Mobility",
    description:
      "Support your recovery with targeted therapeutic treatments focused on reducing discomfort, improving mobility, and helping your body return to everyday activities.",
    link: "/services/therapies",
  },
  {
    title: "Family Chiropractic",
    category: "Whole-Family Care",
    description:
      "Individualized chiropractic care for patients at different stages of life, including children, adults, and expectant mothers, with techniques adapted to each patient's needs.",
    link: "/services/family",
  },
  {
    title: "Corrective Care",
    category: "Posture & Movement",
    description:
      "Go beyond temporary relief with a personalized approach to posture, movement limitations, and muscular imbalances that may contribute to recurring discomfort.",
    link: "/services/corrective",
  },
  {
    title: "Custom Orthotics",
    category: "Alignment & Support",
    description:
      "Custom-fit foot support designed to improve alignment, distribute pressure more evenly, and support comfortable movement throughout your daily activities.",
    link: "/services/orthotics",
  },
];
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
          :category="service.category"
          :description="service.description"
          :link="service.link"
        />
      </div>
    </div>
  </section>
</template>
