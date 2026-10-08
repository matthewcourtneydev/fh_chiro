<script setup>
import "./ServiceCard.scss";

defineProps({
  title: String,
  category: String,
  description: String,
  link: String,
});
</script>

<template>
  <RouterLink :to="link" class="service-card">
    <div class="service-card__inner">
      <span class="service-card__accent" aria-hidden="true"></span>

      <span class="service-card__category">
        {{ category }}
      </span>

      <h3>{{ title }}</h3>

      <p>{{ description }}</p>

      <span class="service-card__link">
        Learn More
        <span aria-hidden="true">→</span>
      </span>
    </div>
  </RouterLink>
</template>