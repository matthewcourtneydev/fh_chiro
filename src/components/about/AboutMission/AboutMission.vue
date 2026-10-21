<script setup>
import "./AboutMission.scss";
import missionLogo from "@/assets/images/logos/mobile_logo_dark.PNG";
</script>

<template>
  <section class="about-mission" aria-labelledby="about-mission-heading">
    <div class="container about-mission__inner">
      <div class="about-mission__brand" aria-hidden="true">
        <div class="about-mission__logo-wrap">
          <img :src="missionLogo" alt="" class="about-mission__logo" />
        </div>
      </div>

      <div class="about-mission__content">
        <p class="eyebrow about-mission__eyebrow">Our Mission</p>
        <h2 id="about-mission-heading" class="about-mission__heading">
          Care Rooted in <span>Community.</span>
        </h2>
        <div class="about-mission__rule" aria-hidden="true"></div>
        <p class="about-mission__text">
          Our mission is to serve the Forest Hills community through
          compassionate, personalized chiropractic care built on trust,
          understanding, and lasting relationships. We believe everyone
          deserves the opportunity to move freely, live actively, and enjoy
          the moments that matter most. By treating each patient as an
          individual, we strive to make a meaningful difference in the health
          and well-being of the families we serve.
        </p>
      </div>
    </div>
  </section>
</template>
