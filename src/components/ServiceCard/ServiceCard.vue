<script setup>
import './ServiceCard.scss'
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  description: String,
  link: String,
})

const router = useRouter()

function handleClick() {
  if (props.link) {
    router.push(props.link)
  }
}
</script>

<template>
  <article
    class="service-card"
    role="button"
    tabindex="0"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <div class="service-card__inner">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>

      <span class="service-card__link">
        Learn More →
      </span>
    </div>
  </article>
</template>