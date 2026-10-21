
<script setup>
import "./ServicesHero.scss";
import servicesHeroImage from "@/assets/images/services-hero.webp";
</script>

<template>
  <section class="services-hero">
    <div class="container services-hero__inner">
      <div class="services-hero__content">
        <p class="eyebrow">Our Services</p>

        <h1>
          Care That Gets You Back to
          <span class="services-hero__accent">
            What You Love.
          </span>
        </h1>

        <p class="services-hero__text">
          Personalized chiropractic services in Pittsburgh, PA designed to
          support mobility, improve function, and help you move and feel your
          best.
        </p>

        <div class="services-hero__actions">
          <a href="/booking" class="btn btn-primary">
            Request Appointment
          </a>

          <a
            href="#core-services"
            class="services-hero__explore"
          >
            <span>Explore Our Services</span>
            <span class="services-hero__arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </div>

      <div class="services-hero__visual">
        <img
          :src="servicesHeroImage"
          alt="Modern chiropractic treatment room with an adjustment table"
          class="services-hero__image"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>
