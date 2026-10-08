
<script setup>
import './BookingCTA.scss'

import {
  CalendarDays,
  Phone,
  MapPin,
  ArrowUpRight,
  Navigation,
} from 'lucide-vue-next'

const communities = [
  'Forest Hills',
  'Churchill',
  'Wilkinsburg',
  'Braddock Hills',
  'Swissvale',
  'Edgewood',
  'Turtle Creek',
  'Penn Hills',
]

const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=21%20Yost%20Blvd%20Ste%20148%2F150%20Pittsburgh%20PA%2015221'
</script>

<template>
  <section class="booking-cta" aria-labelledby="booking-cta-heading">
    <!-- Appointment CTA -->
    <div class="booking-cta__top">
      <div class="container booking-cta__top-inner">
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

            <a href="tel:+14126464344" class="booking-cta__phone">
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
    </div>

    <!-- Communities Served -->
    <div class="booking-cta__communities">
      <div class="container booking-cta__communities-inner">
        <div class="booking-cta__local">
          <p class="eyebrow">Rooted in the Community</p>

          <h2>
            Local Care.<br />
            <span>Close to Home.</span>
          </h2>

          <p class="booking-cta__local-description">
            Conveniently located in Forest Hills, Pennsylvania,
            Forest Hills Chiropractic welcomes patients from
            Pittsburgh's eastern communities and surrounding areas.
          </p>
        </div>

        <div class="booking-cta__areas">
          <div class="booking-cta__areas-header">
            <div>
              <p class="eyebrow">Areas We Serve</p>
              <h3>Our Surrounding Communities</h3>
            </div>

            <Navigation :size="27" :stroke-width="1.5" />
          </div>

          <ul class="booking-cta__grid">
            <li
              v-for="community in communities"
              :key="community"
              class="booking-cta__community"
            >
              <span class="booking-cta__diamond"></span>
              <span>{{ community }}</span>
            </li>
          </ul>

          <p class="booking-cta__note">
            Don't see your neighborhood? We welcome patients
            from throughout the greater Pittsburgh area.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
