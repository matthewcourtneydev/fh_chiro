<script setup>
import './AboutMission.scss'
import { HeartHandshake } from 'lucide-vue-next'
</script>

<template>
  <section class="about-mission">
    <div class="container-narrow about-mission__inner">
      <div class="about-mission__icon">
        <HeartHandshake :size="34" :stroke-width="1.8" />
      </div>

      <div>
        <p class="eyebrow">Our Mission</p>

        <p class="about-mission__text">
          To deliver exceptional chiropractic care that restores function,
          reduces pain, and helps you perform at your best.
        </p>
      </div>
    </div>
  </section>
</template>