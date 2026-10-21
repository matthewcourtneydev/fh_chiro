
<script setup>
import './CommunitiesServed.scss'

import { Navigation } from 'lucide-vue-next'

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
</script>

<template>
  <section
    class="communities-served"
    aria-labelledby="communities-served-heading"
  >
    <div class="container communities-served__inner">
      <div class="communities-served__local">
        <p class="eyebrow">Rooted in the Community</p>

        <h2 id="communities-served-heading">
          Local Care.<br />
          <span>Close to Home.</span>
        </h2>

        <p class="communities-served__description">
          Conveniently located in Forest Hills, Pennsylvania,
          Forest Hills Chiropractic welcomes patients from
          Pittsburgh's eastern communities and surrounding areas.
        </p>
      </div>

      <div class="communities-served__areas">
        <div class="communities-served__areas-header">
          <div>
            <p class="eyebrow">Areas We Serve</p>
            <h3>Our Surrounding Communities</h3>
          </div>

          <Navigation :size="27" :stroke-width="1.5" />
        </div>

        <ul class="communities-served__grid">
          <li
            v-for="community in communities"
            :key="community"
            class="communities-served__community"
          >
            <span
              class="communities-served__diamond"
              aria-hidden="true"
            ></span>
            <span>{{ community }}</span>
          </li>
        </ul>

        <p class="communities-served__note">
          Don't see your neighborhood? We welcome patients
          from throughout the greater Pittsburgh area.
        </p>
      </div>
    </div>
  </section>
</template>
