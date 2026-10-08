
<script setup>
import './CommunitiesServed.scss'
import { MapPin, ArrowUpRight, Navigation } from 'lucide-vue-next'

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
  <section class="communities section" aria-labelledby="communities-heading">
    <div class="container communities__inner">
      <div class="communities__content">
        <p class="eyebrow">Rooted in the Community</p>

        <h2 id="communities-heading">
          Local Care.<br />
          <span>Close to Home.</span>
        </h2>

        <p class="communities__description">
          Located in Forest Hills, Pennsylvania, Forest Hills Chiropractic
          welcomes patients from Pittsburgh's eastern communities.
          We're proud to provide personalized chiropractic care
          close to where you live and work.
        </p>

        <div class="communities__location">
          <div class="communities__location-icon">
            <MapPin :size="22" :stroke-width="1.8" />
          </div>

          <div>
            <strong>Forest Hills Chiropractic</strong>
            <p>21 Yost Blvd, Suite 148/150</p>
            <p>Pittsburgh, PA 15221</p>
          </div>
        </div>

        <a
          :href="directionsUrl"
          class="communities__directions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
          <ArrowUpRight :size="18" :stroke-width="1.8" />
        </a>
      </div>

      <div class="communities__areas">
        <div class="communities__areas-header">
          <div>
            <p class="eyebrow">Areas We Serve</p>
            <h3>Our Surrounding Communities</h3>
          </div>

          <Navigation :size="28" :stroke-width="1.5" />
        </div>

        <ul class="communities__grid">
          <li
            v-for="community in communities"
            :key="community"
            class="communities__item"
          >
            <span class="communities__dot"></span>
            <span>{{ community }}</span>
          </li>
        </ul>

        <p class="communities__note">
          Don't see your neighborhood? We welcome patients from
          throughout the greater Pittsburgh area.
        </p>
      </div>
    </div>
  </section>
</template>
