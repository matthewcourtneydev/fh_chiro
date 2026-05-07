<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import './Navbar.scss'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

function closeMenu() {
  isMenuOpen.value = false
}

function isActiveRoute(to) {
  if (to === '/') {
    return route.path === '/'
  }

  if (to === '/services') {
    return route.path === '/services' || route.path.startsWith('/services/')
  }

  return route.path === to
}
</script>

<template>
  <header class="navbar" :class="{ 'navbar--open': isMenuOpen }">
    <div class="navbar__inner">
      <RouterLink class="navbar__brand" to="/" @click="closeMenu">
        <div class="navbar__mark">FH</div>

        <div class="navbar__name">
          <span>Forest Hills</span>
          <span>Chiropractic</span>
        </div>
      </RouterLink>

      <nav class="navbar__links" aria-label="Main navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.label"
          class="navbar__link"
          :class="{ 'navbar__link--active': isActiveRoute(item.to) }"
          :to="item.to"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <RouterLink class="navbar__cta" to="/booking" @click="closeMenu">
        Book Appointment
      </RouterLink>

      <button
        class="navbar__menu"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav class="navbar__mobile" aria-label="Mobile navigation">
      <RouterLink
        v-for="item in navItems"
        :key="item.label"
        class="navbar__mobile-link"
        :class="{ 'navbar__mobile-link--active': isActiveRoute(item.to) }"
        :to="item.to"
        @click="closeMenu"
      >
        {{ item.label }}
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