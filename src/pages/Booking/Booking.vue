<script setup>
import "./Booking.scss";

import Footer from "@/components/Footer/Footer.vue";

import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-vue-next";

const route = useRoute();

/*
 * TEMPORARY BOOKING FLAG
 *
 * false = production currently shows the "Call the Office" state.
 * true  = enables the online appointment request form.
 *
 * IMPORTANT:
 * Do not set this to true in production until handleSubmit()
 * is connected to a real backend/email/ChiroTouch integration.
 */
const onlineBookingEnabled = false;

const currentStep = ref(1);

const form = ref({
  patientType: "",
  service: "",
  day: "",
  time: "",
  name: "",
  phone: "",
  email: "",
  message: "",
});

const services = [
  {
    title: "New Patient Consultation",
    description:
      "Start here if this is your first visit or you want to discuss symptoms.",
  },
  {
    title: "Chiropractic Adjustment",
    description:
      "For back pain, neck pain, stiffness, posture, or general alignment care.",
  },
  {
    title: "Spinal Decompression",
    description:
      "For disc issues, sciatica, radiating pain, or chronic back discomfort.",
  },
  {
    title: "Therapies & Recovery",
    description:
      "Support healing, reduce inflammation, and improve recovery between visits.",
  },
  {
    title: "Custom Orthotics",
    description:
      "For foot support, alignment issues, and movement from the ground up.",
  },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];

const times = [
  "9:00am - 10:00am",
  "10:00am - 11:00am",
  "11:00am - 12:00pm",
  "3:30pm - 4:30pm",
  "4:30pm - 5:30pm",
  "5:30pm - 6:00pm",
];

const canContinue = computed(() => {
  if (currentStep.value === 1) return form.value.patientType;
  if (currentStep.value === 2) return form.value.service;
  if (currentStep.value === 3) return form.value.day && form.value.time;

  return true;
});

function applyPatientTypeFromQuery(type) {
  if (!onlineBookingEnabled) return;

  if (type === "new") {
    form.value.patientType = "New Patient";
    currentStep.value = 2;
  }

  if (type === "existing") {
    form.value.patientType = "Existing Patient";
    currentStep.value = 2;
  }
}

function nextStep() {
  if (canContinue.value && currentStep.value < 4) {
    currentStep.value++;
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
}

function handleSubmit() {
  /*
   * FUTURE STATE:
   * Connect this to the final appointment-request solution
   * (email API, ChiroTouch, or another scheduling platform).
   */
  console.log("Appointment request:", form.value);
}

onMounted(() => {
  applyPatientTypeFromQuery(route.query.type);
});

watch(
  () => route.query.type,
  (type) => {
    applyPatientTypeFromQuery(type);
  },
);
</script>

<template>
  <main class="booking-page">
    <!-- HERO -->
    <section class="booking-hero">
      <div class="container booking-hero__inner">
        <p class="eyebrow">Book Appointment</p>

        <h1>Request an Appointment</h1>

        <template v-if="onlineBookingEnabled">
          <p>
            Tell us what you need and our team will contact you to confirm your
            visit.
          </p>

          <p class="booking-hero__message">
            Whether you’re a new patient or returning for care, our team will
            review your request and contact you to confirm the best available
            appointment time.
          </p>
        </template>

        <template v-else>
          <p>
            Ready to schedule your visit? Give our office a call and our team
            will help you find an appointment time that works for you.
          </p>

          <p class="booking-hero__message">
            Online scheduling is currently being updated. Please contact our
            office directly to schedule your appointment.
          </p>
        </template>
      </div>
    </section>

    <!-- TEMPORARY PRODUCTION BOOKING STATE -->
    <section v-if="!onlineBookingEnabled" class="booking-flow section">
      <div class="container">
        <div class="booking-card booking-card--unavailable">
          <div class="booking-unavailable">
            <div class="booking-unavailable__icon">
              <Phone :size="30" :stroke-width="1.8" />
            </div>

            <p class="eyebrow">Schedule Your Visit</p>

            <h2>Online scheduling is currently unavailable.</h2>

            <p class="booking-unavailable__copy">
              We’re currently updating our online scheduling experience. To
              schedule an appointment, please call our office and our team will
              be happy to assist you.
            </p>

            <a href="tel:+14126464344" class="btn btn-primary">
              <Phone :size="18" :stroke-width="1.8" />
              Call (412) 646-4344
            </a>

            <span class="booking-unavailable__note">
              We apologize for the inconvenience and look forward to helping
              you.
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- FUTURE ONLINE BOOKING FLOW -->
    <section v-else class="booking-flow section">
      <div class="container booking-flow__inner">
        <aside class="booking-progress" aria-label="Booking progress">
          <button
            class="booking-progress__item"
            :class="{
              active: currentStep === 1,
              complete: currentStep > 1,
            }"
            type="button"
            @click="currentStep = 1"
          >
            <span>1</span>
            Patient Type
          </button>

          <button
            class="booking-progress__item"
            :class="{
              active: currentStep === 2,
              complete: currentStep > 2,
            }"
            type="button"
            :disabled="!form.patientType"
            @click="currentStep = 2"
          >
            <span>2</span>
            Service
          </button>

          <button
            class="booking-progress__item"
            :class="{
              active: currentStep === 3,
              complete: currentStep > 3,
            }"
            type="button"
            :disabled="!form.service"
            @click="currentStep = 3"
          >
            <span>3</span>
            Preferred Time
          </button>

          <button
            class="booking-progress__item"
            :class="{ active: currentStep === 4 }"
            type="button"
            :disabled="!form.day || !form.time"
            @click="currentStep = 4"
          >
            <span>4</span>
            Your Info
          </button>
        </aside>

        <div class="booking-card">
          <form @submit.prevent="handleSubmit">
            <!-- STEP 1 -->
            <section v-if="currentStep === 1" class="booking-step">
              <p class="eyebrow">Step 1</p>

              <h2>Are you a new or existing patient?</h2>

              <div class="booking-options booking-options--two">
                <button
                  type="button"
                  :class="{ active: form.patientType === 'New Patient' }"
                  @click="form.patientType = 'New Patient'"
                >
                  <strong>New Patient</strong>

                  <span>
                    Your first visit starts here. We’ll help you get set up.
                  </span>
                </button>

                <button
                  type="button"
                  :class="{ active: form.patientType === 'Existing Patient' }"
                  @click="form.patientType = 'Existing Patient'"
                >
                  <strong>Existing Patient</strong>

                  <span>
                    Returning for care? Request a follow-up appointment.
                  </span>
                </button>
              </div>
            </section>

            <!-- STEP 2 -->
            <section v-if="currentStep === 2" class="booking-step">
              <p class="eyebrow">Step 2</p>

              <h2>What can we help you with?</h2>

              <div class="booking-options">
                <button
                  v-for="item in services"
                  :key="item.title"
                  type="button"
                  :class="{ active: form.service === item.title }"
                  @click="form.service = item.title"
                >
                  <strong>{{ item.title }}</strong>
                  <span>{{ item.description }}</span>
                </button>
              </div>
            </section>

            <!-- STEP 3 -->
            <section v-if="currentStep === 3" class="booking-step">
              <p class="eyebrow">Step 3</p>

              <h2>Choose your preferred day and time.</h2>

              <div class="booking-picker">
                <div>
                  <h3>Preferred Day</h3>

                  <div class="booking-chip-grid">
                    <button
                      v-for="day in days"
                      :key="day"
                      type="button"
                      :class="{ active: form.day === day }"
                      @click="form.day = day"
                    >
                      {{ day }}
                    </button>
                  </div>
                </div>

                <div>
                  <h3>Preferred Time</h3>

                  <div class="booking-chip-grid">
                    <button
                      v-for="time in times"
                      :key="time"
                      type="button"
                      :class="{ active: form.time === time }"
                      @click="form.time = time"
                    >
                      {{ time }}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <!-- STEP 4 -->
            <section v-if="currentStep === 4" class="booking-step">
              <p class="eyebrow">Step 4</p>

              <h2>Your contact information.</h2>

              <div class="booking-summary">
                <div>
                  <span>Patient Type</span>
                  <strong>{{ form.patientType }}</strong>
                </div>

                <div>
                  <span>Service</span>
                  <strong>{{ form.service }}</strong>
                </div>

                <div>
                  <span>Preferred Time</span>
                  <strong>{{ form.day }} · {{ form.time }}</strong>
                </div>
              </div>

              <div class="booking-fields">
                <div class="booking-row">
                  <input
                    v-model="form.name"
                    type="text"
                    autocomplete="name"
                    placeholder="Full Name"
                  />

                  <input
                    v-model="form.phone"
                    type="tel"
                    autocomplete="tel"
                    placeholder="Phone Number"
                  />
                </div>

                <input
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  placeholder="Email Address"
                />

                <textarea
                  v-model="form.message"
                  placeholder="Anything you'd like us to know?"
                ></textarea>
              </div>

              <p class="booking-note">
                This request is not confirmed until our office contacts you.
              </p>
            </section>

            <!-- ACTIONS -->
            <div class="booking-actions">
              <button
                v-if="currentStep > 1"
                class="btn btn-outline"
                type="button"
                @click="prevStep"
              >
                <ArrowLeft :size="18" :stroke-width="1.8" />
                Back
              </button>

              <button
                v-if="currentStep < 4"
                class="btn btn-primary"
                type="button"
                :disabled="!canContinue"
                @click="nextStep"
              >
                Continue
                <ArrowRight :size="18" :stroke-width="1.8" />
              </button>

              <button v-else class="btn btn-primary" type="submit">
                <CheckCircle :size="18" :stroke-width="1.8" />
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- PHONE CALLOUT -->
    <section class="booking-callout">
      <div class="container booking-callout__inner">
        <div class="booking-callout__icon">
          <Phone :size="26" :stroke-width="1.8" />
        </div>

        <div>
          <h2>Prefer to talk?</h2>

          <p>
            Give us a call and our team will help you schedule your appointment.
          </p>
        </div>

        <a href="tel:+14126464344" class="btn btn-outline">
          Call (412) 646-4344
        </a>
      </div>
    </section>

    <Footer :show-top-cta="false" />
  </main>
</template>