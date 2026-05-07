<script setup>
import "./Footer.scss";
import { CalendarDays } from "lucide-vue-next";

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

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Accessibility",
    href: "/accessibility",
  },
  {
    label: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    label: "HIPAA Policy",
    href: "/hipaa-policy",
  },
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

            <a class="btn btn-primary" href="/booking"> Book Appointment </a>
          </div>
        </div>
      </div>
    </section>

    <div class="container footer__inner">
      <div class="footer__brand">
        <a class="footer__logo" href="/">
          <div class="footer__mark">FH</div>

          <div>
            <span>Forest Hills</span>
            <span>Chiropractic</span>
          </div>
        </a>

        <p>
          Performance-focused chiropractic care designed to help you move,
          recover, and feel your best.
        </p>
      </div>

      <div class="footer__column">
        <h2>Quick Links</h2>

        <a v-for="link in quickLinks" :key="link.label" :href="link.href">
          {{ link.label }}
        </a>
      </div>

      <div class="footer__column">
        <h2>Services</h2>

        <a v-for="link in serviceLinks" :key="link.label" :href="link.href">
          {{ link.label }}
        </a>
      </div>

      <div class="footer__column footer__contact">
        <h2>Contact</h2>

        <p>
          21 Yost Blvd Ste. 148/150<br />
          Forest Hills, PA 15221
        </p>

        <a href="tel:+14126464344">(412) 646-4344</a>

        <a href="mailto:info@fhchiropractic.com"> info@fhchiropractic.com </a>
      </div>
    </div>

    <div class="container footer__bottom">
      <p>© 2026 Forest Hills Chiropractic. All rights reserved.</p>

      <div class="footer__legal">
        <a v-for="link in legalLinks" :key="link.label" :href="link.href">
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
