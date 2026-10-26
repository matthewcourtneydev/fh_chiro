<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LegalLayout from '@/components/legal/LegalLayout/LegalLayout.vue'
import { legalPagesBySlug } from '@/data/legalPages'
import './LegalPage.scss'

const route = useRoute()
const page = computed(() => legalPagesBySlug[route.meta.legalSlug])
</script>

<template>
  <LegalLayout v-if="page" :title="page.title" :updated="page.updated || undefined">
    <div class="legal-page-content">
      <p v-if="page.intro" class="legal-page-content__intro">{{ page.intro }}</p>
      <section v-for="(section, index) in page.sections" :key="index" class="legal-page-content__section">
        <h2>{{ section.heading }}</h2>
        <template v-for="(block, blockIndex) in section.blocks" :key="blockIndex">
          <p v-if="block.type === 'paragraph'">{{ block.text }}</p>
          <ul v-else-if="block.type === 'list'">
            <li v-for="(item, itemIndex) in block.items" :key="itemIndex">{{ item }}</li>
          </ul>
          <p v-else-if="block.type === 'link'">
            <a :href="block.href" target="_blank" rel="noopener noreferrer">{{ block.text }} <span class="sr-only">(opens in a new tab)</span></a>
          </p>
        </template>
      </section>
    </div>
  </LegalLayout>
</template>
