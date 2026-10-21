<script setup>
import "./PreFooterCTA.scss";
import { CalendarDays } from "lucide-vue-next";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="pre-footer-cta" aria-labelledby="pre-footer-heading">
    <div class="container pre-footer-cta__inner">
      <div class="pre-footer-cta__headline">
        <p class="eyebrow">Start Your Journey Today</p>
        <h2 id="pre-footer-heading">
          Feel better.<br />
          Move better.<br />
          <span>Live better.</span>
        </h2>
      </div>

      <div class="pre-footer-cta__action">
        <div class="pre-footer-cta__icon" aria-hidden="true">
          <CalendarDays :size="32" :stroke-width="1.7" />
        </div>

        <div class="pre-footer-cta__copy">
          <p>
            Take the first step toward better movement, recovery,
            and long-term health. We're here to help you get started.
          </p>

          <RouterLink class="btn btn-primary" to="/booking">
            Book Appointment
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
