<script setup>
import "./ServicesPreview.scss";
import {
  Activity,
  Bone,
  Sparkles,
  HeartHandshake,
  Footprints,
  ArrowUpRight,
} from "lucide-vue-next";

const services = [
  {
    icon: Activity,
    title: "Chiropractic Adjustments",
    text: "Personalized spinal care to help relieve discomfort, restore mobility, and improve everyday movement.",
    link: "/services/chiropractic-adjustments",
  },
  {
    icon: Bone,
    title: "Spinal Decompression",
    text: "Non-surgical treatment options for disc-related discomfort, sciatica, and persistent back pain.",
    link: "/services/spinal-decompression",
  },
  {
    icon: Sparkles,
    title: "Therapies & Recovery",
    text: "Targeted therapies designed to support recovery, reduce discomfort, and improve physical function.",
    link: "/services/therapies",
  },
  {
    icon: HeartHandshake,
    title: "Family Chiropractic",
    text: "Individualized chiropractic care for families, including pregnancy and pediatric needs.",
    link: "/services/family",
  },
  {
    icon: Footprints,
    title: "Custom Orthotics",
    text: "Custom-fit foot support designed to improve alignment, stability, and everyday comfort.",
    link: "/services/orthotics",
  },
];
</script>

<template>
  <section
    id="services"
    class="services-preview section"
    aria-labelledby="services-preview-heading"
  >
    <div class="container">
      <div class="services-preview__header">
        <div class="services-preview__heading">
          <p class="eyebrow">Our Services</p>

          <h2 id="services-preview-heading">
            Care that gets you<br />
            back to what you <span>love.</span>
          </h2>
        </div>

        <div class="services-preview__intro">
          <p class="services-preview__intro-label">
            Personalized chiropractic care in Forest Hills, PA
          </p>

          <p>
            Whether you're managing persistent discomfort, recovering from an
            injury, or working toward better mobility, Forest Hills Chiropractic
            offers treatment options tailored to your needs and goals.
          </p>
        </div>
      </div>

      <div id="services-preview-grid" class="services-preview__grid">
        <a
          v-for="service in services"
          :key="service.title"
          class="services-preview__card"
          :href="service.link"
        >
          <div class="services-preview__icon">
            <component
              :is="service.icon"
              :size="26"
              :stroke-width="1.8"
              aria-hidden="true"
            />
          </div>

          <h3>{{ service.title }}</h3>

          <p>{{ service.text }}</p>

          <span class="services-preview__link">
            Learn More
            <span aria-hidden="true">→</span>
          </span>
        </a>
      </div>

      <div class="services-preview__footer">
        <p>Not sure which treatment is right for you?</p>

        <a href="/services" class="services-preview__all-link">
          Explore All Services
        </a>
      </div>
    </div>
  </section>
</template>
