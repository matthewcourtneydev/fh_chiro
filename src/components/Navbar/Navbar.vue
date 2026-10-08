
<script setup>
import { ref, watch, onBeforeUnmount } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { ChevronDown, Instagram, Facebook, Music2 } from "lucide-vue-next";

import logo from "@/assets/images/logo.png";
import "./Navbar.scss";

const route = useRoute();

const isMenuOpen = ref(false);
const isDesktopServicesOpen = ref(false);
const isDesktopConditionsOpen = ref(false);
const isMobileServicesOpen = ref(false);
const isMobileConditionsOpen = ref(false);

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

const serviceLinks = [
  { label: "All Services", to: "/services" },
  {
    label: "Chiropractic Adjustments",
    to: "/services/chiropractic-adjustments",
  },
  {
    label: "Spinal Decompression",
    to: "/services/spinal-decompression",
  },
  {
    label: "Therapies & Recovery",
    to: "/services/therapies",
  },
  {
    label: "Custom Orthotics",
    to: "/services/orthotics",
  },
  {
    label: "Family Chiropractic",
    to: "/services/family",
  },
  {
    label: "Corrective Chiropractic",
    to: "/services/corrective",
  },
];

const conditionLinks = [
  { label: "All Conditions", to: "/conditions" },
  { label: "Back Pain", to: "/conditions/back-pain" },
  { label: "Neck Pain", to: "/conditions/neck-pain" },
  { label: "Sciatica", to: "/conditions/sciatica" },
  { label: "Headaches", to: "/conditions/headaches" },
  { label: "Joint Pain", to: "/conditions/joint-pain" },
  { label: "Sports Injuries", to: "/conditions/sports-injuries" },
  { label: "Carpal Tunnel", to: "/conditions/carpal-tunnel" },
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

function closeDesktopDropdowns() {
  isDesktopServicesOpen.value = false;
  isDesktopConditionsOpen.value = false;
}

function closeMenu() {
  isMenuOpen.value = false;
  isMobileServicesOpen.value = false;
  isMobileConditionsOpen.value = false;
  closeDesktopDropdowns();
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;

  if (!isMenuOpen.value) {
    isMobileServicesOpen.value = false;
    isMobileConditionsOpen.value = false;
  }
}

function toggleDesktopServices() {
  isDesktopConditionsOpen.value = false;
  isDesktopServicesOpen.value = !isDesktopServicesOpen.value;
}

function toggleDesktopConditions() {
  isDesktopServicesOpen.value = false;
  isDesktopConditionsOpen.value = !isDesktopConditionsOpen.value;
}

function openDesktopServices() {
  isDesktopConditionsOpen.value = false;
  isDesktopServicesOpen.value = true;
}

function openDesktopConditions() {
  isDesktopServicesOpen.value = false;
  isDesktopConditionsOpen.value = true;
}

function onDesktopServicesFocusOut(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    isDesktopServicesOpen.value = false;
  }
}

function onDesktopConditionsFocusOut(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    isDesktopConditionsOpen.value = false;
  }
}

function isActiveRoute(to) {
  if (to === "/") {
    return route.path === "/";
  }

  if (to === "/services") {
    return (
      route.path === "/services" ||
      route.path.startsWith("/services/")
    );
  }

  if (to === "/conditions") {
    return (
      route.path === "/conditions" ||
      route.path.startsWith("/conditions/")
    );
  }

  return route.path === to;
}

function onEscape(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

watch(
  () => route.fullPath,
  () => closeMenu()
);

onBeforeUnmount(() => {
  closeMenu();
});
</script>

<template>
  <header
    class="navbar"
    :class="{ 'navbar--open': isMenuOpen }"
    @keydown="onEscape"
  >
    <div class="navbar__inner">
      <!-- Brand -->
      <RouterLink
        class="navbar__brand"
        to="/"
        aria-label="Forest Hills Chiropractic - Home"
        @click="closeMenu"
      >
        <img
          :src="logo"
          alt="Forest Hills Chiropractic"
          class="navbar__logo"
          width="210"
          height="75"
        />
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="navbar__links" aria-label="Main navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.label"
          class="navbar__link"
          :class="{
            'navbar__link--active': isActiveRoute(item.to),
          }"
          :to="item.to"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>

        <!-- Desktop Services Dropdown -->
        <div
          class="navbar__dropdown"
          :class="{
            'navbar__dropdown--open': isDesktopServicesOpen,
          }"
          @mouseenter="openDesktopServices"
          @mouseleave="isDesktopServicesOpen = false"
          @focusout="onDesktopServicesFocusOut"
        >
          <button
            type="button"
            class="navbar__link navbar__dropdown-trigger"
            :class="{
              'navbar__link--active': isActiveRoute('/services'),
            }"
            :aria-expanded="isDesktopServicesOpen"
            aria-controls="desktop-services-menu"
            aria-haspopup="true"
            @click="toggleDesktopServices"
          >
            Services

            <ChevronDown
              :size="15"
              :stroke-width="2"
              class="navbar__chevron"
            />
          </button>

          <div
            id="desktop-services-menu"
            class="navbar__dropdown-menu"
            :inert="!isDesktopServicesOpen"
          >
            <RouterLink
              v-for="item in serviceLinks"
              :key="item.to"
              :to="item.to"
              class="navbar__dropdown-link"
              :class="{
                'navbar__dropdown-link--active': route.path === item.to,
              }"
              @click="closeMenu"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </div>

        <!-- Desktop Conditions Dropdown -->
        <div
          class="navbar__dropdown"
          :class="{
            'navbar__dropdown--open': isDesktopConditionsOpen,
          }"
          @mouseenter="openDesktopConditions"
          @mouseleave="isDesktopConditionsOpen = false"
          @focusout="onDesktopConditionsFocusOut"
        >
          <button
            type="button"
            class="navbar__link navbar__dropdown-trigger"
            :class="{
              'navbar__link--active': isActiveRoute('/conditions'),
            }"
            :aria-expanded="isDesktopConditionsOpen"
            aria-controls="desktop-conditions-menu"
            aria-haspopup="true"
            @click="toggleDesktopConditions"
          >
            Conditions

            <ChevronDown
              :size="15"
              :stroke-width="2"
              class="navbar__chevron"
            />
          </button>

          <div
            id="desktop-conditions-menu"
            class="navbar__dropdown-menu"
            :inert="!isDesktopConditionsOpen"
          >
            <RouterLink
              v-for="item in conditionLinks"
              :key="item.to"
              :to="item.to"
              class="navbar__dropdown-link"
              :class="{
                'navbar__dropdown-link--active': route.path === item.to,
              }"
              @click="closeMenu"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </div>

        <!-- Desktop Contact -->
        <RouterLink
          to="/contact"
          class="navbar__link"
          :class="{
            'navbar__link--active': isActiveRoute('/contact'),
          }"
          @click="closeMenu"
        >
          Contact
        </RouterLink>
      </nav>

      <!-- Desktop Booking CTA -->
      <RouterLink
        class="navbar__cta"
        to="/booking"
        @click="closeMenu"
      >
        Book Appointment
      </RouterLink>

      <!-- Mobile Menu Button -->
      <button
        class="navbar__menu"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <nav
      id="mobile-navigation"
      class="navbar__mobile"
      aria-label="Mobile navigation"
      :inert="!isMenuOpen"
    >
      <!-- Home and About -->
      <RouterLink
        v-for="item in navItems"
        :key="item.label"
        class="navbar__mobile-link"
        :class="{
          'navbar__mobile-link--active': isActiveRoute(item.to),
        }"
        :to="item.to"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>

      <!-- Mobile Services Dropdown -->
      <div class="navbar__mobile-group">
        <button
          type="button"
          class="navbar__mobile-link navbar__mobile-trigger"
          :class="{
            'navbar__mobile-link--active': isActiveRoute('/services'),
          }"
          :aria-expanded="isMobileServicesOpen"
          aria-controls="mobile-services-menu"
          @click="isMobileServicesOpen = !isMobileServicesOpen"
        >
          Services

          <ChevronDown
            :size="18"
            class="navbar__mobile-chevron"
            :class="{
              'navbar__mobile-chevron--open': isMobileServicesOpen,
            }"
          />
        </button>

        <div
          id="mobile-services-menu"
          class="navbar__mobile-submenu"
          v-show="isMobileServicesOpen"
        >
          <RouterLink
            v-for="item in serviceLinks"
            :key="item.to"
            :to="item.to"
            class="navbar__mobile-sublink"
            :class="{
              'navbar__mobile-sublink--active': route.path === item.to,
            }"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>

      <!-- Mobile Conditions Dropdown -->
      <div class="navbar__mobile-group">
        <button
          type="button"
          class="navbar__mobile-link navbar__mobile-trigger"
          :class="{
            'navbar__mobile-link--active': isActiveRoute('/conditions'),
          }"
          :aria-expanded="isMobileConditionsOpen"
          aria-controls="mobile-conditions-menu"
          @click="isMobileConditionsOpen = !isMobileConditionsOpen"
        >
          Conditions We Treat

          <ChevronDown
            :size="18"
            class="navbar__mobile-chevron"
            :class="{
              'navbar__mobile-chevron--open': isMobileConditionsOpen,
            }"
          />
        </button>

        <div
          id="mobile-conditions-menu"
          class="navbar__mobile-submenu"
          v-show="isMobileConditionsOpen"
        >
          <RouterLink
            v-for="item in conditionLinks"
            :key="item.to"
            :to="item.to"
            class="navbar__mobile-sublink"
            :class="{
              'navbar__mobile-sublink--active': route.path === item.to,
            }"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>

      <!-- Mobile Contact -->
      <RouterLink
        to="/contact"
        class="navbar__mobile-link"
        :class="{
          'navbar__mobile-link--active': isActiveRoute('/contact'),
        }"
        @click="closeMenu"
      >
        Contact
      </RouterLink>

      <!-- Mobile Booking CTA -->
      <RouterLink
        class="btn btn-primary navbar__mobile-cta"
        to="/booking"
        @click="closeMenu"
      >
        Book Appointment
      </RouterLink>

      <!-- Mobile Social Media -->
      <div class="navbar__mobile-socials">
        <p class="navbar__mobile-socials-label">
          Follow Us
        </p>

        <div class="navbar__mobile-socials-links">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            :aria-label="`Visit Forest Hills Chiropractic on ${social.label} (opens in a new tab)`"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar__mobile-social-link"
          >
            <component
              :is="social.icon"
              :size="20"
              :stroke-width="1.8"
            />
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
