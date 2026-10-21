
<script setup>
import './BookingCTA.scss'

import {
  CalendarDays,
  Phone,
} from 'lucide-vue-next'
</script>

<template>
  <section
    class="booking-cta"
    aria-labelledby="booking-cta-heading"
  >
    <div class="container booking-cta__inner">
      <div class="booking-cta__icon">
        <CalendarDays :size="26" :stroke-width="1.7" />
      </div>

      <div class="booking-cta__content">
        <p class="eyebrow">Ready to feel better?</p>

        <h2 id="booking-cta-heading">
          Your Next Step<br />
          <span>Starts Here.</span>
        </h2>

        <p class="booking-cta__description">
          Personalized chiropractic care designed around your
          needs, movement, and long-term goals.
        </p>

        <div class="booking-cta__actions">
          <a href="/booking" class="btn btn-primary">
            Request Appointment
          </a>

          <a
            href="tel:+14126464344"
            class="booking-cta__phone"
          >
            <Phone :size="18" :stroke-width="1.8" />
            (412) 646-4344
          </a>
        </div>
      </div>

      <div class="booking-cta__side">
        <p class="booking-cta__side-label">
          Your Care. Your Goals.
        </p>

        <p>
          Whether you're visiting for the first time or
          continuing your care, we're here to help you
          move better and feel better.
        </p>

        <div class="booking-cta__side-rule"></div>

        <span>Forest Hills Chiropractic</span>
      </div>
    </div>
  </section>
</template>
