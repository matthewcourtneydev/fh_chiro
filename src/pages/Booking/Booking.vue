<script setup>
import "./Booking.scss";

import Footer from "@/components/Footer/Footer.vue";
import {
  ArrowUpRight,
  CalendarDays,
  ClipboardList,
  Phone,
} from "lucide-vue-next";

const chiroTouchUrl =
  "https://patient.chirotouch.com/ForestHillsChiropractic/guest/booking/appointment-type";

const officePhoneHref = "tel:+14126464344";
const officePhoneDisplay = "(412) 646-4344";
</script>

<template>
  <main class="booking-page">
    <!-- HERO -->
    <section class="booking-hero">
      <div class="container booking-hero__inner">
        <p class="eyebrow">BOOK YOUR VISIT</p>

        <h1>
          Your Path to Better Health
          <span>Starts Here.</span>
        </h1>

        <p class="booking-hero__description">
          Whether you're visiting us for the first time or continuing your care,
          getting your next appointment scheduled should be simple.
        </p>
      </div>
    </section>

    <!-- BOOKING OPTIONS -->
    <section class="booking-options-section section">
      <div class="container">
        <div class="booking-options-heading">
          <p class="eyebrow">GET STARTED</p>
          <h2>How Can We Help You Today?</h2>
          <p>Select the option that best describes you.</p>
        </div>

        <div class="booking-patient-grid">
          <!-- EXISTING PATIENT -->
          <article class="booking-patient-card">
            <div class="booking-patient-card__top">
              <div class="booking-patient-card__icon" aria-hidden="true">
                <CalendarDays :size="29" :stroke-width="1.6" />
              </div>
              <span class="booking-patient-card__number" aria-hidden="true">
                01
              </span>
            </div>

            <div class="booking-patient-card__content">
              <p class="eyebrow">RETURNING PATIENTS</p>
              <h3>Schedule Your Next Visit.</h3>
              <p>
                Already a patient at Forest Hills Chiropractic? Choose your
                appointment type and schedule your next visit through our
                ChiroTouch patient portal.
              </p>
            </div>

            <div class="booking-patient-card__bottom">
              <a
                :href="chiroTouchUrl"
                class="btn btn-primary booking-patient-card__button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Schedule an appointment through ChiroTouch (opens in a new tab)"
              >
                Schedule Online
                <ArrowUpRight :size="18" :stroke-width="1.8" aria-hidden="true" />
              </a>
              <span class="booking-patient-card__note">
                Opens ChiroTouch in a new tab
              </span>
            </div>
          </article>

          <!-- NEW PATIENT -->
          <article class="booking-patient-card">
            <div class="booking-patient-card__top">
              <div class="booking-patient-card__icon" aria-hidden="true">
                <ClipboardList :size="29" :stroke-width="1.6" />
              </div>
              <span class="booking-patient-card__number" aria-hidden="true">
                02
              </span>
            </div>

            <div class="booking-patient-card__content">
              <p class="eyebrow">NEW PATIENTS</p>
              <h3>Let's Get Acquainted.</h3>
              <p>
                New to Forest Hills Chiropractic? We'd love to help you get
                started. Please call our office to schedule your first visit,
                and our team will walk you through the next steps.
              </p>
            </div>

            <div class="booking-patient-card__bottom">
              <a
                :href="officePhoneHref"
                class="btn btn-primary booking-patient-card__button"
                :aria-label="`Call Forest Hills Chiropractic at ${officePhoneDisplay} to schedule your first visit`"
              >
                <Phone :size="18" :stroke-width="1.8" aria-hidden="true" />
                Call to Schedule
              </a>
              <span class="booking-patient-card__note">
                New patient appointments are currently scheduled by phone.
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- PHONE CALLOUT -->
    <section class="booking-callout">
      <div class="container booking-callout__inner">
        <div class="booking-callout__icon" aria-hidden="true">
          <Phone :size="26" :stroke-width="1.8" />
        </div>

        <div class="booking-callout__text">
          <h2>Prefer to Talk?</h2>
          <p>
            Have questions or need help scheduling? Give our office a call and
            we'll be happy to help.
          </p>
        </div>

        <a :href="officePhoneHref" class="btn btn-outline">
          Call {{ officePhoneDisplay }}
        </a>
      </div>
    </section>

    <Footer :show-top-cta="false" />
  </main>
</template>
