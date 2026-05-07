<script setup>
import './Home.scss'
import HomeHero from '@/components/home/HomeHero/HomeHero.vue'
import TrustBar from '@/components/home/TrustBar/TrustBar.vue'
import ServicesPreview from '@/components/home/ServicesPreview/ServicesPreview.vue'
import WhyChooseUs from '@/components/home/WhyChooseUs/WhyChooseUs.vue'
import BookingCTA from '@/components/home/BookingCTA/BookingCTA.vue'
import LocationMap from '@/components/home/LocationMap/LocationMap.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <main class="home">
    <HomeHero />
    <TrustBar />
    <ServicesPreview />
    <WhyChooseUs />
    <BookingCTA />
    <LocationMap />
    <Footer />
  </main>
</template>