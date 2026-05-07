<script setup>
import './Therapies.scss'
import Footer from '@/components/Footer/Footer.vue'
import {
  CheckCircle,
  ChevronDown,
  HandHeart,
  Sparkles,
  Activity,
  Dumbbell,
  Wind,
  StretchHorizontal,
  ArrowRight,
} from 'lucide-vue-next'

import heroImage from '@/assets/images/therapies-recovery-hero.png'
import bodyImageOne from '@/assets/images/therapies-recovery-body-1.png'
import bodyImageTwo from '@/assets/images/therapies-recovery-body-2.png'

const modalities = [
  {
    icon: HandHeart,
    title: 'Soft Tissue Therapy',
    text: 'Hands-on care designed to reduce tension and improve tissue quality.',
  },
  {
    icon: StretchHorizontal,
    title: 'Stretch Therapy',
    text: 'Guided movement to improve flexibility, comfort, and mobility.',
  },
  {
    icon: Sparkles,
    title: 'Recovery Therapies',
    text: 'Support healing, circulation, and comfort between visits.',
  },
  {
    icon: Activity,
    title: 'Mobility Work',
    text: 'Targeted movement strategies to help restore better function.',
  },
  {
    icon: Wind,
    title: 'Tension Relief',
    text: 'Focused care for tight muscles, soreness, and everyday stress.',
  },
  {
    icon: Dumbbell,
    title: 'Performance Support',
    text: 'Recovery-focused care for active lifestyles and training demands.',
  },
]

const recoveryQuestions = [
  {
    title: 'What can therapies help with?',
    text:
      'Therapies may help with muscle tension, soreness, stiffness, limited mobility, postural strain, and recovery between chiropractic visits.',
  },
  {
    title: 'Can therapies be combined with adjustments?',
    text:
      'Yes. Many patients benefit from combining chiropractic adjustments with soft tissue work, stretching, or recovery therapies to support better movement.',
  },
  {
    title: 'What does treatment feel like?',
    text:
      'Treatment is personalized to your comfort level. Care may feel relaxing, relieving, or mildly intense depending on the area being treated.',
  },
  {
    title: 'Who is this best for?',
    text:
      'Therapies can be helpful for athletes, active adults, desk workers, people dealing with chronic tension, and anyone looking to move and recover better.',
  },
  {
    title: 'How often should I schedule recovery care?',
    text:
      'Frequency depends on your symptoms, goals, and activity level. Your care plan may include short-term recovery support or ongoing maintenance.',
  },
]

const helpedConditions = [
  'Muscle tension',
  'Neck and shoulder tightness',
  'Post-workout soreness',
  'Limited mobility',
  'Postural strain',
  'Overuse irritation',
  'Recovery between visits',
  'Everyday aches and stiffness',
]
</script>

<template>
  <main class="therapies-page">
    <section class="therapies-hero">
      <div class="container therapies-hero__inner">
        <div class="therapies-hero__content">
          <div class="breadcrumb">
            <a href="/services">Services</a>
            <span>/</span>
            <span>Therapies & Recovery</span>
          </div>

          <h1>
            Recover.<br />
            Restore.<br />
            Perform.
          </h1>

          <p>
            Targeted therapies to reduce tension, speed recovery, and help your
            body move and feel its best.
          </p>

          <a href="/booking" class="btn btn-primary">
            Request Appointment
            <ArrowRight :size="18" :stroke-width="1.8" />
          </a>
        </div>

        <div class="therapies-hero__visual">
          <img
            :src="heroImage"
            alt="Modern therapy room with treatment table"
          />

          <div class="therapies-hero__card">
            <Sparkles :size="34" :stroke-width="1.6" />
            <span></span>

            <h2>
              Therapies designed<br />
              to help you:
            </h2>

            <ul>
              <li>
                <CheckCircle :size="17" :stroke-width="1.8" />
                Reduce muscle tension
              </li>
              <li>
                <CheckCircle :size="17" :stroke-width="1.8" />
                Improve mobility
              </li>
              <li>
                <CheckCircle :size="17" :stroke-width="1.8" />
                Support faster recovery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="therapies-modalities section">
      <div class="container">
        <div class="therapies-section-header">
          <p class="eyebrow">Recovery Modalities</p>

          <h2>
            Care options built around how your body moves.
          </h2>

          <p>
            Recovery care is not one-size-fits-all. We use targeted therapies to
            support comfort, motion, and long-term performance.
          </p>
        </div>

        <div class="therapies-modalities__grid">
          <div
            v-for="item in modalities"
            :key="item.title"
            class="therapies-modalities__card"
          >
            <div class="therapies-modalities__icon">
              <component :is="item.icon" :size="28" :stroke-width="1.7" />
            </div>

            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="therapies-intro section">
      <div class="container therapies-intro__inner">
        <div class="therapies-intro__media">
          <img
            :src="bodyImageOne"
            alt="Hands-on therapy treatment in a chiropractic clinic"
          />
        </div>

        <div class="therapies-intro__content">
          <p class="eyebrow">How it helps</p>

          <h2>
            Less tension. More control. Better recovery.
          </h2>

          <p>
            Therapies and recovery work can help calm irritated tissues, reduce
            muscle tension, and improve the way your body handles daily movement,
            training, or stress.
          </p>

          <p>
            At Forest Hills Chiropractic, therapy is personalized to your care
            plan and can be used alongside adjustments, mobility work, or
            performance-focused treatment.
          </p>
        </div>
      </div>
    </section>

    <section class="therapies-accordion section">
      <div class="container therapies-accordion__inner">
        <div class="therapies-accordion__heading">
          <p class="eyebrow">Common Questions</p>

          <h2>
            What to know before recovery care.
          </h2>

          <p>
            Therapy should feel clear, purposeful, and tailored to what your body
            needs. Here are a few things patients often ask.
          </p>
        </div>

        <div class="therapies-accordion__list">
          <details
            v-for="(item, index) in recoveryQuestions"
            :key="item.title"
            class="therapies-accordion__item"
            :open="index === 0"
          >
            <summary>
              <CheckCircle :size="22" :stroke-width="1.8" />
              <span>{{ item.title }}</span>
              <ChevronDown :size="20" :stroke-width="1.8" />
            </summary>

            <p>{{ item.text }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="therapies-performance">
      <div class="container therapies-performance__inner">
        <div>
          <p class="eyebrow">Performance Recovery</p>

          <h2>
            Built for athletes, active adults, and everyday movers.
          </h2>
        </div>

        <p>
          Whether you train hard, sit for long hours, or feel like your body is
          always tight, recovery-focused care can help you move with more ease
          and confidence.
        </p>
      </div>
    </section>

    <section class="therapies-help section">
      <div class="container therapies-help__inner">
        <div class="therapies-help__content">
          <p class="eyebrow">Who it can help</p>

          <h2>
            Support for tension, soreness, and movement limitations.
          </h2>

          <p>
            Therapies and recovery care can be useful for people looking to feel
            better between visits, reduce tightness, and support a more active
            lifestyle.
          </p>

          <ul>
            <li v-for="condition in helpedConditions" :key="condition">
              <CheckCircle :size="18" :stroke-width="1.8" />
              <span>{{ condition }}</span>
            </li>
          </ul>
        </div>

        <div class="therapies-help__image">
          <img
            :src="bodyImageTwo"
            alt="Patient doing guided recovery and mobility work"
          />
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>