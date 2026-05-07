<script setup>
import './ConditionsPreview.scss'

const conditions = [
  {
    title: "Back & Neck Pain",
    description:
      "Relief for chronic stiffness, tension, and spinal discomfort.",
  },
  {
    title: "Sciatica",
    description:
      "Targeted care for nerve pain radiating through the lower body.",
  },
  {
    title: "Headaches & Migraines",
    description: "Reduce frequency and intensity through spinal alignment.",
  },
  {
    title: "Joint Pain",
    description: "Improve mobility in shoulders, knees, hips, and more.",
  },
  {
    title: "Sports Injuries",
    description: "Recover faster and prevent future strain or imbalance.",
  },
  {
    title: "Carpal Tunnel",
    description: "Address wrist pain and nerve compression without surgery.",
  },
];
</script>

<template>
  <section class="section conditions-preview">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">Conditions We Treat</span>
        <h2>Relief for Common Pain and Movement Issues.</h2>
        <p class="section-subtext">
          From everyday discomfort to chronic conditions, we help patients move
          better and feel better.
        </p>
      </div>

      <div class="conditions-preview__grid">
        <div
          v-for="condition in conditions"
          :key="condition.title"
          class="condition-item"
        >
          <h3>{{ condition.title }}</h3>
          <p>{{ condition.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
