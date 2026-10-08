
<script setup>
import './ConditionsPreview.scss'
import {
  ArrowUpRight,
  ArrowRight,
  Activity,
  HeartPulse,
  Brain,
  Bone,
  Dumbbell,
  Hand,
  Accessibility,
} from 'lucide-vue-next'

const conditions = [
  {
    title: 'Back Pain',
    description:
      'Explore personalized care options for lower back discomfort, stiffness, and movement limitations.',
    icon: Activity,
    href: '/conditions/back-pain',
  },
  {
    title: 'Neck Pain',
    description:
      'Learn about care options for neck stiffness, muscle tension, and restricted mobility.',
    icon: Accessibility,
    href: '/conditions/neck-pain',
  },
  {
    title: 'Sciatica',
    description:
      'Understand radiating leg pain and explore treatment options that may be appropriate for your symptoms.',
    icon: HeartPulse,
    href: '/conditions/sciatica',
  },
  {
    title: 'Headaches',
    description:
      'Explore care options for certain headaches associated with neck tension and movement restrictions.',
    icon: Brain,
    href: '/conditions/headaches',
  },
  {
    title: 'Joint Pain',
    description:
      'Learn about personalized care for joint stiffness and movement limitations affecting everyday activities.',
    icon: Bone,
    href: '/conditions/joint-pain',
  },
  {
    title: 'Sports Injuries',
    description:
      'Explore recovery-focused care designed to support mobility and a safe return to activity.',
    icon: Dumbbell,
    href: '/conditions/sports-injuries',
  },
  {
    title: 'Carpal Tunnel Symptoms',
    description:
      'Learn about wrist discomfort, tingling, and when a professional evaluation may be appropriate.',
    icon: Hand,
    href: '/conditions/carpal-tunnel',
  },
]
</script>

<template>
  <section
    class="section conditions-preview"
    aria-labelledby="conditions-preview-heading"
  >
    <div class="container">
      <div class="conditions-preview__header">
        <div>
          <p class="eyebrow">What We Can Help With</p>

          <h2 id="conditions-preview-heading">
            Find Care for<br />
            <span>What You're Experiencing.</span>
          </h2>
        </div>

        <p class="conditions-preview__intro">
          Whether you're experiencing persistent back pain, neck stiffness,
          headaches, or movement limitations, explore common conditions
          our team evaluates and learn about available care options.
        </p>
      </div>

      <div class="conditions-preview__grid">
        <a
          v-for="condition in conditions"
          :key="condition.title"
          :href="condition.href"
          class="conditions-preview__card"
          :aria-label="`Learn more about ${condition.title}`"
        >
          <div class="conditions-preview__card-top">
            <div class="conditions-preview__icon">
              <component
                :is="condition.icon"
                :size="25"
                :stroke-width="1.7"
              />
            </div>

            <ArrowUpRight
              class="conditions-preview__arrow"
              :size="21"
              :stroke-width="1.8"
            />
          </div>

          <div class="conditions-preview__card-content">
            <h3>{{ condition.title }}</h3>
            <p>{{ condition.description }}</p>
          </div>

          <span class="conditions-preview__card-link">
            Learn More
            <ArrowRight :size="17" :stroke-width="1.8" />
          </span>
        </a>
      </div>

      <div class="conditions-preview__footer">
        <div>
          <strong>Not sure where to start?</strong>
          <p>
            Our team can help you explore care options based on
            your individual needs.
          </p>
        </div>

        <a href="/conditions" class="btn btn-primary">
          Explore All Conditions
          <ArrowRight :size="18" :stroke-width="1.8" />
        </a>
      </div>
    </div>
  </section>
</template>
