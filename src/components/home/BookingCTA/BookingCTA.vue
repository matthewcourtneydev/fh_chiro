<script setup>
import './BookingCTA.scss'
import { CalendarDays, UserPlus, CalendarCheck } from 'lucide-vue-next'

const patientLinks = [
  {
    icon: UserPlus,
    label: 'New Patient',
    text: 'Your first visit starts here.',
    href: '/booking?type=new',
  },
  {
    icon: CalendarCheck,
    label: 'Existing Patient',
    text: 'Schedule your next visit.',
    href: '/booking?type=existing',
  },
]
</script>

<template>
  <section class="booking-cta">
    <div class="container booking-cta__inner">
      <div class="booking-cta__headline">
        <div class="booking-cta__icon">
          <CalendarDays :size="24" :stroke-width="1.8" />
        </div>

        <div>
          <p class="eyebrow">Ready to feel better?</p>

          <h2>
            Book your<br />
            appointment today.
          </h2>

          <a class="btn btn-primary" href="/booking">
            Book Appointment
          </a>
        </div>
      </div>

      <div class="booking-cta__paths">
        <a
          v-for="item in patientLinks"
          :key="item.label"
          class="booking-cta__path"
          :href="item.href"
        >
          <div class="booking-cta__path-icon">
            <component :is="item.icon" :size="22" :stroke-width="1.8" />
          </div>

          <div>
            <h3>{{ item.label }}</h3>
            <p>{{ item.text }}</p>
            <span>Book Now →</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>