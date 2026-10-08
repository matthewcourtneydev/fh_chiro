
<script setup>
import './ConditionDetail.scss'

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  MapPin,
} from 'lucide-vue-next'

import Footer from '@/components/Footer/Footer.vue'
import { conditions, serviceData } from '@/data/conditions'

const route = useRoute()

const condition = computed(() => conditions[route.params.slug])

const recommendedServices = computed(() => {
  if (!condition.value) return []

  return condition.value.services
    .map((key) => serviceData[key])
    .filter(Boolean)
})

const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=21%20Yost%20Blvd%20Ste%20148%2F150%20Pittsburgh%20PA%2015221'
</script>

<template>
  <main v-if="condition" class="condition-detail">
    <section class="condition-detail__hero">
      <div class="container condition-detail__hero-inner">
        <div class="condition-detail__hero-content">
          <nav class="condition-detail__breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/conditions">Conditions We Treat</RouterLink>
            <span>/</span>
            <span>{{ condition.title }}</span>
          </nav>

          <p class="eyebrow">{{ condition.eyebrow }}</p>

          <h1>{{ condition.headline }}</h1>

          <p class="condition-detail__lead">
            {{ condition.intro }}
          </p>

          <div class="condition-detail__actions">
            <RouterLink to="/booking" class="btn btn-primary">
              Request Appointment
              <ArrowRight :size="18" />
            </RouterLink>

            <a href="#condition-overview" class="condition-detail__text-link">
              Learn More
              <ArrowUpRight :size="18" />
            </a>
          </div>
        </div>

        <aside class="condition-detail__hero-aside">
          <span class="condition-detail__aside-number">01 / 03</span>
          <p class="eyebrow">Our Approach</p>
          <h2>Care Starts With Understanding Your Symptoms.</h2>
          <p>
            Every patient is different. We focus on evaluating your
            concerns before recommending treatment.
          </p>
        </aside>
      </div>
    </section>

    <section id="condition-overview" class="condition-detail__overview section">
      <div class="container condition-detail__overview-inner">
        <div class="condition-detail__overview-copy">
          <p class="eyebrow">Understanding Your Condition</p>
          <h2>{{ condition.overviewTitle }}</h2>
          <p>{{ condition.overview }}</p>
        </div>

        <div class="condition-detail__symptoms">
          <p class="eyebrow">Common Symptoms</p>
          <h3>What You May Be Experiencing</h3>

          <ul>
            <li
              v-for="symptom in condition.symptoms"
              :key="symptom"
            >
              <CheckCircle2 :size="19" :stroke-width="1.7" />
              <span>{{ symptom }}</span>
            </li>
          </ul>

          <p class="condition-detail__disclaimer">
            Symptoms can have different causes. A professional
            evaluation helps determine appropriate next steps.
          </p>
        </div>
      </div>
    </section>

    <section class="condition-detail__services section">
      <div class="container">
        <div class="condition-detail__section-heading">
          <div>
            <p class="eyebrow">Explore Your Options</p>
            <h2>
              Care Options<br />
              <span>Worth Exploring.</span>
            </h2>
          </div>

          <p>
            Depending on your evaluation, our team may discuss
            these services as potential options for your symptoms.
            Not every treatment is appropriate for every patient.
          </p>
        </div>

        <div class="condition-detail__services-grid">
          <RouterLink
            v-for="(service, index) in recommendedServices"
            :key="service.href"
            :to="service.href"
            class="condition-detail__service-card"
          >
            <div class="condition-detail__service-top">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <ArrowUpRight :size="20" />
            </div>

            <div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>

            <span class="condition-detail__service-link">
              Explore Service
              <ArrowRight :size="17" />
            </span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="condition-detail__cta section">
      <div class="container condition-detail__cta-inner">
        <div>
          <p class="eyebrow">Your Next Step</p>
          <h2>
            Let's Find the<br />
            Right Path Forward.
          </h2>

          <p>
            Have questions about {{ condition.title.toLowerCase() }}?
            Contact Forest Hills Chiropractic to discuss your
            symptoms and learn about available care options.
          </p>

          <div class="condition-detail__cta-actions">
            <RouterLink to="/booking" class="btn btn-primary">
              Request Appointment
              <ArrowRight :size="18" />
            </RouterLink>

            <a href="tel:+14126464344" class="condition-detail__phone">
              <Phone :size="18" />
              (412) 646-4344
            </a>
          </div>
        </div>

        <div class="condition-detail__location">
          <MapPin :size="25" :stroke-width="1.6" />
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
