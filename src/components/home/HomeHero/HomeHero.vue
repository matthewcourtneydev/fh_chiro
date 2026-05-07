<script setup>
import './HomeHero.scss'
import heroImage from '@/assets/images/home-hero-chiro.png'
</script>

<template>
  <section
    class="home-hero"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="home-hero__overlay"></div>

    <div class="container home-hero__inner">
      <div class="home-hero__content">
        <p class="eyebrow animate-fade-up">Performance focused. Results driven.</p>

        <h1 class="animate-fade-up animate-delay-1">
          Stronger <span>Movement</span><br />
          Starts Here.
        </h1>

        <p class="home-hero__text animate-fade-up animate-delay-2">
          Chiropractic care in Forest Hills, focused on getting you back to doing
          what you love.
        </p>

        <div class="home-hero__actions animate-fade-up animate-delay-3">
          <a class="btn btn-primary" href="/booking">Book Appointment</a>
          <a class="btn btn-secondary" href="#services">Learn More</a>
        </div>

        <a class="home-hero__scroll animate-fade-up animate-delay-3" href="#services">
          Scroll to explore
          <span>↓</span>
        </a>
      </div>
    </div>
  </section>
</template>