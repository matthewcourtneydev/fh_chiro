<script setup>
import { ref } from 'vue'
import './AboutDoctor.scss'
import doctorHeadshot from '@/assets/images/doctor-headshot.jpg'

const isExpanded = ref(false)

function toggleExpanded() {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <section class="about-doctor section">
    <div class="container about-doctor__inner">
      <div class="about-doctor__media">
        <img :src="doctorHeadshot" alt="Forest Hills Chiropractic doctor" />
      </div>

      <div class="about-doctor__content">
        <p class="eyebrow">Meet the Doctor</p>

        <h2>
          Michael Testen, D.C.
        </h2>

        <p class="about-doctor__label">Chiropractor</p>

        <p>
          Originally from a small town in Pennsylvania, Dr. Michael Testen now
          calls Pittsburgh home. After practicing in Chicago for three years, he
          returned to his home state to serve the Forest Hills community.
        </p>

        <p>
          His approach is shaped by athletics, discipline, and a firsthand
          understanding of how impactful the right care can be.
        </p>

        <button
          class="about-doctor__toggle"
          type="button"
          :aria-expanded="isExpanded"
          @click="toggleExpanded"
        >
          <span>{{ isExpanded ? 'Read Less' : 'Read More' }}</span>
          <span class="about-doctor__toggle-icon">
            {{ isExpanded ? '−' : '+' }}
          </span>
        </button>
      </div>
    </div>

    <div
      v-if="isExpanded"
      class="container-reading about-doctor__expanded"
    >
      <p>
        At only 13 years old, Dr. Michael vividly remembers limping into a
        chiropractor’s office after a wrestling injury. He could barely bend his
        knee. After an adjustment, the pain suddenly stopped — and the experience
        left a lasting impression.
      </p>

      <p>
        That moment helped shape his path through college wrestling at
        Bloomsburg University of Pennsylvania and later toward earning his Doctor
        of Chiropractic degree from Life University in Marietta, Georgia.
      </p>

      <blockquote>
        “Giving, loving, serving with no attachment to the results.”
      </blockquote>

      <p>
        In practice, Dr. Michael’s personal mission is to spread the benefits of
        chiropractic care to as many people as possible. He is driven to help
        people of all ages stay active, healthy, and confident in how they move.
      </p>

      <p>
        His care philosophy centers on listening closely, identifying the root
        cause, restoring function, and helping patients get back to the life they
        want to live.
      </p>
    </div>
  </section>
</template>