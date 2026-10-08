
<script setup>
import './Conditions.scss'

import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
} from 'lucide-vue-next'

import { conditions } from '@/data/conditions'
import Footer from '@/components/Footer/Footer.vue'

// Convert the conditions object into an array with slugs
const conditionList = Object.entries(conditions).map(
  ([slug, condition]) => ({
    slug,
    ...condition,
  })
)

const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=21%20Yost%20Blvd%20Ste%20148%2F150%20Pittsburgh%20PA%2015221'
</script>

<template>
  <main class="conditions-page">
    <!-- Hero -->
    <section class="conditions-hero">
      <div class="container conditions-hero__inner">
        <div class="conditions-hero__content">
          <p class="eyebrow">Conditions We Treat</p>

          <h1>
            Find Care for<br />
            <span>What You're Experiencing.</span>
          </h1>

          <p class="conditions-hero__description">
            From everyday stiffness to persistent pain and movement
            limitations, explore common conditions our team evaluates
            and learn about care options available at Forest Hills
            Chiropractic in Pittsburgh, PA.
          </p>

          <div class="conditions-hero__actions">
            <a href="#explore-conditions" class="btn btn-primary">
              Explore Conditions
              <ArrowRight :size="18" />
            </a>

            <RouterLink
              to="/services"
              class="conditions-hero__secondary"
            >
              View Our Services
              <ArrowUpRight :size="18" />
            </RouterLink>
          </div>
        </div>

        <div class="conditions-hero__aside">
          <span class="conditions-hero__aside-label">
            Our Approach
          </span>

          <p>
            Understanding your symptoms is the first step toward
            finding the right care.
          </p>

          <div class="conditions-hero__aside-line"></div>

          <span>
            Personalized evaluations. Thoughtful treatment options.
          </span>
        </div>
      </div>
    </section>

    <!-- Conditions Grid -->
    <section
      id="explore-conditions"
      class="conditions-list section"
      aria-labelledby="conditions-list-heading"
    >
      <div class="container">
        <div class="conditions-list__heading">
          <div>
            <p class="eyebrow">Explore by Condition</p>

            <h2 id="conditions-list-heading">
              What Can We<br />
              <span>Help You With?</span>
            </h2>
          </div>

          <p>
            Every patient's symptoms and needs are different.
            Select a condition below to learn about common symptoms,
            potential causes, and care options that may be appropriate.
          </p>
        </div>

        <div class="conditions-list__grid">
          <RouterLink
            v-for="(condition, index) in conditionList"
            :key="condition.slug"
            :to="`/conditions/${condition.slug}`"
            class="conditions-list__card"
          >
            <div class="conditions-list__card-top">
              <span class="conditions-list__number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <ArrowUpRight :size="23" :stroke-width="1.7" />
            </div>

            <div class="conditions-list__card-body">
              <h3>{{ condition.title }}</h3>
              <p>{{ condition.intro }}</p>
            </div>

            <div class="conditions-list__card-bottom">
              <span>Explore Condition</span>
              <ArrowRight :size="18" :stroke-width="1.8" />
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Care Process -->
    <section class="conditions-care section">
      <div class="container conditions-care__inner">
        <div class="conditions-care__intro">
          <p class="eyebrow">A Personalized Approach</p>

          <h2>
            Your Symptoms.<br />
            <span>Your Care Plan.</span>
          </h2>

          <p>
            The same symptoms can have different causes. That's why
            understanding your concerns, movement, and goals matters
            before choosing a treatment approach.
          </p>

          <RouterLink
            to="/services"
            class="conditions-care__link"
          >
            Explore Our Services
            <ArrowUpRight :size="19" />
          </RouterLink>
        </div>

        <div class="conditions-care__steps">
          <div class="conditions-care__step">
            <span>01</span>

            <div>
              <h3>Understand Your Symptoms</h3>
              <p>
                We start by discussing your concerns, health history,
                and how your symptoms affect daily life.
              </p>
            </div>
          </div>

          <div class="conditions-care__step">
            <span>02</span>

            <div>
              <h3>Evaluate Your Movement</h3>
              <p>
                An individualized assessment helps identify relevant
                movement limitations and areas of concern.
              </p>
            </div>
          </div>

          <div class="conditions-care__step">
            <span>03</span>

            <div>
              <h3>Explore Appropriate Care</h3>
              <p>
                Based on your evaluation, we'll discuss suitable
                treatment options or referrals when needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="conditions-cta">
      <div class="container conditions-cta__inner">
        <div class="conditions-cta__content">
          <p class="eyebrow">Not Sure Where to Start?</p>

          <h2>
            Let's Find Your<br />
            <span>Next Step.</span>
          </h2>

          <p>
            Have questions about your symptoms or available care?
            Contact our office and our team will be happy to help.
          </p>

          <div class="conditions-cta__actions">
            <RouterLink to="/booking" class="btn btn-primary">
              Request Appointment
              <ArrowRight :size="18" />
            </RouterLink>

            <a
              href="tel:+14126464344"
              class="conditions-cta__phone"
            >
              <Phone :size="18" />
              (412) 646-4344
            </a>
          </div>
        </div>

        <div class="conditions-cta__location">
          <MapPin :size="28" :stroke-width="1.5" />

          <h3>Care Close to Home</h3>

          <p>
            21 Yost Blvd, Suite 148/150<br />
            Pittsburgh, PA 15221
          </p>

          <a
            :href="directionsUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
            <ArrowUpRight :size="18" />
          </a>
        </div>
      </div>
    </section>

    <Footer :show-top-cta="false" />
  </main>
</template>
