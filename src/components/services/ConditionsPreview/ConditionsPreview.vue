<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import {
  Activity,
  Accessibility,
  HeartPulse,
  Brain,
  Bone,
  Dumbbell,
  Hand,
  Disc3,
  ScanLine,
  BicepsFlexed,
  Footprints,
  Waves,
  ChevronDown,
  ArrowRight,
} from "lucide-vue-next";
import { conditions } from "@/data/conditions.js";
import "./ConditionsPreview.scss";

// The condition records, titles, descriptions, and routes come from conditions.js.
// Icons are presentation-only and keyed by the same condition slugs.
const iconsBySlug = {
  "back-pain": Activity,
  "neck-pain": Accessibility,
  sciatica: HeartPulse,
  headaches: Brain,
  "joint-pain": Bone,
  "sports-injuries": Dumbbell,
  "carpal-tunnel": Hand,
  "disc-problems": Disc3,
  "posture-related-pain": ScanLine,
  "shoulder-pain": BicepsFlexed,
  "foot-heel-pain": Footprints,
  "muscle-strain-overuse": Waves,
};

const conditionItems = computed(() =>
  Object.entries(conditions).map(([slug, data]) => ({
    slug,
    title: data.title,
    description: data.intro || data.overview || "",
    icon: iconsBySlug[slug] || Activity,
    href: `/conditions/${slug}`,
  }))
);

const expandedSlug = ref(null);

function toggleCondition(slug) {
  expandedSlug.value = expandedSlug.value === slug ? null : slug;
}
</script>

<template>
  <section
    class="section conditions-preview"
    aria-labelledby="conditions-preview-heading"
  >
    <div class="container">
      <header class="conditions-preview__header">
        <p class="eyebrow">What We Can Help With</p>
        <h2 id="conditions-preview-heading">
          Find Care for <span>What You're Experiencing.</span>
        </h2>
      </header>

      <!-- Desktop/tablet: compact, fully clickable condition cards -->
      <div class="conditions-preview__grid">
        <RouterLink
          v-for="condition in conditionItems"
          :key="condition.slug"
          :to="condition.href"
          class="conditions-preview__card"
          :aria-label="`Explore ${condition.title}`"
        >
          <component
            :is="condition.icon"
            class="conditions-preview__icon"
            :size="30"
            :stroke-width="1.6"
            aria-hidden="true"
          />
          <h3>{{ condition.title }}</h3>
        </RouterLink>
      </div>

      <!-- Mobile: accessible accordion with condition summary and route -->
      <div class="conditions-preview__accordion">
        <div
          v-for="condition in conditionItems"
          :key="condition.slug"
          class="conditions-preview__accordion-item"
          :class="{ 'is-open': expandedSlug === condition.slug }"
        >
          <h3 class="conditions-preview__accordion-heading">
            <button
              type="button"
              class="conditions-preview__accordion-trigger"
              :aria-expanded="expandedSlug === condition.slug"
              :aria-controls="`condition-panel-${condition.slug}`"
              @click="toggleCondition(condition.slug)"
            >
              <component
                :is="condition.icon"
                class="conditions-preview__accordion-icon"
                :size="22"
                :stroke-width="1.7"
                aria-hidden="true"
              />
              <span>{{ condition.title }}</span>
              <ChevronDown
                class="conditions-preview__chevron"
                :size="19"
                aria-hidden="true"
              />
            </button>
          </h3>
          <div
            v-show="expandedSlug === condition.slug"
            :id="`condition-panel-${condition.slug}`"
            class="conditions-preview__accordion-panel"
          >
            <p>{{ condition.description }}</p>
            <RouterLink
              :to="condition.href"
              class="conditions-preview__accordion-link"
            >
              Explore Condition
              <ArrowRight :size="17" aria-hidden="true" />
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="conditions-preview__footer">
        <p>
          Not sure what you're experiencing?
          <span>Explore all conditions we evaluate.</span>
        </p>

        <RouterLink to="/conditions" class="conditions-preview__footer-link">
          View All Conditions
          <ArrowRight :size="18" :stroke-width="1.8" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
