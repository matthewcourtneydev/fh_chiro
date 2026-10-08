
<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ChevronDown } from 'lucide-vue-next'
import logo from '@/assets/images/logo.png'
import './Navbar.scss'

const route = useRoute()

const isMenuOpen = ref(false)
const isDesktopDropdownOpen = ref(false)
const isMobileConditionsOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const conditionLinks = [
  { label: 'All Conditions', to: '/conditions' },
  { label: 'Back Pain', to: '/conditions/back-pain' },
  { label: 'Neck Pain', to: '/conditions/neck-pain' },
  { label: 'Sciatica', to: '/conditions/sciatica' },
  { label: 'Headaches', to: '/conditions/headaches' },
  { label: 'Joint Pain', to: '/conditions/joint-pain' },
  { label: 'Sports Injuries', to: '/conditions/sports-injuries' },
  { label: 'Carpal Tunnel', to: '/conditions/carpal-tunnel' },
]

function closeMenu() {
  isMenuOpen.value = false
  isDesktopDropdownOpen.value = false
  isMobileConditionsOpen.value = false
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value

  if (!isMenuOpen.value) {
    isMobileConditionsOpen.value = false
  }
}

function isActiveRoute(to) {
  if (to === '/') {
    return route.path === '/'
  }

  if (to === '/services') {
    return route.path === '/services' ||
      route.path.startsWith('/services/')
  }

  if (to === '/conditions') {
    return route.path === '/conditions' ||
      route.path.startsWith('/conditions/')
  }

  return route.path === to
}

function onDesktopFocusOut(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    isDesktopDropdownOpen.value = false
  }
}

function onEscape(event) {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(
  () => route.fullPath,
  () => closeMenu()
)

onBeforeUnmount(() => {
  closeMenu()
})
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
          v-for="item in navItems.slice(0, 3)"
          :key="item.label"
          class="navbar__link"
          :class="{ 'navbar__link--active': isActiveRoute(item.to) }"
          :to="item.to"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>

        <!-- Conditions Dropdown -->
        <div
          class="navbar__dropdown"
          :class="{ 'navbar__dropdown--open': isDesktopDropdownOpen }"
          @mouseenter="isDesktopDropdownOpen = true"
          @mouseleave="isDesktopDropdownOpen = false"
          @focusout="onDesktopFocusOut"
        >
          <button
            type="button"
            class="navbar__link navbar__dropdown-trigger"
            :class="{
              'navbar__link--active': isActiveRoute('/conditions')
            }"
            :aria-expanded="isDesktopDropdownOpen"
            aria-controls="desktop-conditions-menu"
            aria-haspopup="true"
            @click="isDesktopDropdownOpen = !isDesktopDropdownOpen"
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
            :inert="!isDesktopDropdownOpen"
          >
            <RouterLink
              v-for="item in conditionLinks"
              :key="item.to"
              :to="item.to"
              class="navbar__dropdown-link"
              :class="{
                'navbar__dropdown-link--active': route.path === item.to
              }"
              @click="closeMenu"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </div>

        <RouterLink
          to="/contact"
          class="navbar__link"
          :class="{ 'navbar__link--active': isActiveRoute('/contact') }"
          @click="closeMenu"
        >
          Contact
        </RouterLink>
      </nav>

      <!-- Desktop CTA -->
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
      <RouterLink
        v-for="item in navItems.slice(0, 3)"
        :key="item.label"
        class="navbar__mobile-link"
        :class="{
          'navbar__mobile-link--active': isActiveRoute(item.to)
        }"
        :to="item.to"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>

      <!-- Mobile Conditions -->
      <div class="navbar__mobile-group">
        <button
          type="button"
          class="navbar__mobile-link navbar__mobile-trigger"
          :class="{
            'navbar__mobile-link--active': isActiveRoute('/conditions')
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
              'navbar__mobile-chevron--open': isMobileConditionsOpen
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
              'navbar__mobile-sublink--active': route.path === item.to
            }"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>

      <RouterLink
        to="/contact"
        class="navbar__mobile-link"
        :class="{
          'navbar__mobile-link--active': isActiveRoute('/contact')
        }"
        @click="closeMenu"
      >
        Contact
      </RouterLink>

      <RouterLink
        class="btn btn-primary navbar__mobile-cta"
        to="/booking"
        @click="closeMenu"
      >
        Book Appointment
      </RouterLink>
    </nav>
  </header>
</template>
