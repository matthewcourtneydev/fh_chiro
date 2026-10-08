
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
          Care That Gets You<br />
          Back to What You Love.
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
