<script setup>
import './PreFooterCTA.scss'
import { CalendarDays } from 'lucide-vue-next'
</script>

<template>
  <section class="pre-footer-cta">
    <div class="container pre-footer-cta__inner">
      <div class="pre-footer-cta__content">
        <p class="eyebrow">Start your journey today</p>

        <h2>
          Feel better.<br />
          Move better.<br />
          Live better.
        </h2>

        <p>
          Book your first visit and take the first step toward long-term health
          and performance.
        </p>

        <a class="btn btn-primary" href="/booking">
          <CalendarDays :size="20" :stroke-width="1.8" />
          Book Appointment
        </a>
      </div>
    </div>
  </section>
</template>