
<script setup>
import "./Footer.scss";
import { CalendarDays, Instagram, Facebook, Music2 } from "lucide-vue-next";
import { RouterLink } from "vue-router";
import logo from "@/assets/images/logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Chiropractic Adjustments",
    href: "/services/chiropractic-adjustments",
  },
  {
    label: "Spinal Decompression",
    href: "/services/spinal-decompression",
  },
  {
    label: "Therapies & Recovery",
    href: "/services/therapies",
  },
  {
    label: "Custom Orthotics",
    href: "/services/orthotics",
  },
];

const conditionLinks = [
  { label: "Back Pain", href: "/conditions/back-pain" },
  { label: "Neck Pain", href: "/conditions/neck-pain" },
  { label: "Sciatica", href: "/conditions/sciatica" },
  { label: "Headaches", href: "/conditions/headaches" },
  { label: "Joint Pain", href: "/conditions/joint-pain" },
  { label: "Sports Injuries", href: "/conditions/sports-injuries" },
  { label: "Carpal Tunnel", href: "/conditions/carpal-tunnel" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/foresthillschiro_412/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@foresthillschiro",
    icon: Music2,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ForestHillsChiropractic",
    icon: Facebook,
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "HIPAA Policy", href: "/hipaa-policy" },
];

const props = defineProps({
  showTopCta: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <footer class="footer">
    <section v-if="props.showTopCta" class="footer-cta">
      <div class="container footer-cta__inner">
        <div class="footer-cta__headline">
          <h2>
            Move better.<br />
            Feel better.<br />
            <span>Live better.</span>
          </h2>
        </div>

        <div class="footer-cta__action">
          <div class="footer-cta__icon">
            <CalendarDays :stroke-width="1.8" />
          </div>

          <div class="footer-cta__copy">
            <p>
              Don’t wait to take control of your health. We’re here to help you
              perform at your best.
            </p>

            <RouterLink class="btn btn-primary" to="/booking">
              Book Appointment
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <div class="container footer__inner">
      <div class="footer__brand">
        <RouterLink
          class="footer__logo"
          to="/"
          aria-label="Forest Hills Chiropractic - Home"
        >
          <img
            :src="logo"
            alt="Forest Hills Chiropractic"
            class="footer__logo-image"
            width="240"
            height="86"
          />
        </RouterLink>

        <p>
          Performance-focused chiropractic care designed to help you move,
          recover, and feel your best.
        </p>

        <div class="footer__socials" aria-label="Social media">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            :aria-label="`Forest Hills Chiropractic on ${social.label}`"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__social-link"
          >
            <component :is="social.icon" :size="19" :stroke-width="1.8" />
          </a>
        </div>
      </div>

      <nav class="footer__column" aria-label="Quick links">
        <h2>Quick Links</h2>

        <RouterLink
          v-for="link in quickLinks"
          :key="link.label"
          :to="link.href"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <nav class="footer__column" aria-label="Services">
        <h2>Services</h2>

        <RouterLink
          v-for="link in serviceLinks"
          :key="link.label"
          :to="link.href"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <nav class="footer__column" aria-label="Conditions we treat">
        <h2>Conditions We Treat</h2>

        <RouterLink
          v-for="link in conditionLinks"
          :key="link.label"
          :to="link.href"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="footer__column footer__contact">
        <h2>Contact</h2>

        <p>
          21 Yost Blvd Ste. 148/150<br />
          Pittsburgh, PA 15221
        </p>

        <a href="tel:+14126464344">
          (412) 646-4344
        </a>

        <a href="mailto:info@fhchiropractic.com">
          info@fhchiropractic.com
        </a>
      </div>
    </div>

    <div class="container footer__bottom">
      <div class="footer__credits">
        <p>© {{ new Date().getFullYear() }} Forest Hills Chiropractic. All rights reserved.</p>
        <p>
          Website by
          <a
            href="#"
            class="footer__portfolio-link"
            aria-label="Website designer portfolio, coming soon"
          >
            Matthew Courtney
          </a>
        </p>
      </div>

      <nav class="footer__legal" aria-label="Legal links">
        <RouterLink
          v-for="link in legalLinks"
          :key="link.label"
          :to="link.href"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </footer>
</template>
