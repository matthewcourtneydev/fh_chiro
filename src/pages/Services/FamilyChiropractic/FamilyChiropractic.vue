<script setup>
import './FamilyChiropractic.scss'
import Footer from '@/components/Footer/Footer.vue'
import {
  Baby,
  UserRound,
  Activity,
  Heart,
  ShieldCheck,
  CheckCircle,
  ChevronDown,
  ClipboardList,
  Stethoscope,
  CalendarCheck,
  HeartHandshake,
} from 'lucide-vue-next'

import heroImage from '@/assets/images/family-hero.png'
import familyImage from '@/assets/images/family-page.png'

const trustItems = [
  {
    icon: Heart,
    title: 'For the Whole Family',
    text: 'Care for kids, teens, adults, and seniors.',
    gold: true,
  },
  {
    icon: HeartHandshake,
    title: 'Gentle & Personalized',
    text: 'Treatment plans built around your unique needs.',
  },
  {
    icon: Activity,
    title: 'Long-Term Wellness',
    text: 'Supporting healthy movement for today and tomorrow.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Care',
    text: 'A safe, supportive environment you can count on.',
  },
]

const groups = [
  {
    icon: Baby,
    title: 'Kids & Teens',
    text: 'Supporting healthy growth, posture, and active lifestyles.',
  },
  {
    icon: UserRound,
    title: 'Parents',
    text: 'Helping busy parents feel their best through every season.',
  },
  {
    icon: Activity,
    title: 'Athletes',
    text: 'Improving performance, preventing injuries, and speeding recovery.',
  },
  {
    icon: HeartHandshake,
    title: 'Seniors',
    text: 'Maintaining mobility, comfort, and quality of life.',
  },
  {
    icon: Heart,
    title: 'Everyday Wellness',
    text: 'Supporting posture, movement, and long-term wellbeing.',
  },
]

const reasons = [
  {
    title: 'Headaches & poor posture',
    text:
      'Family chiropractic care can help address posture stress, neck tension, and movement habits that may contribute to recurring headaches or stiffness.',
  },
  {
    title: 'Growing pains',
    text:
      'As kids grow and stay active, gentle care can help support movement, comfort, and body awareness.',
  },
  {
    title: 'Pregnancy discomfort',
    text:
      'Care may help support comfort through pregnancy by addressing low back, hip, and pelvic tension with gentle techniques.',
  },
  {
    title: 'Sports injuries',
    text:
      'For active kids, teens, and adults, chiropractic care can support recovery, mobility, and improved movement patterns.',
  },
  {
    title: 'Everyday back & neck pain',
    text:
      'Whether caused by work, school, parenting, or daily stress, care can help reduce stiffness and support better function.',
  },
  {
    title: 'Mobility & aging gracefully',
    text:
      'Chiropractic care can help older adults maintain movement, confidence, and comfort in everyday life.',
  },
]

const steps = [
  {
    icon: ClipboardList,
    title: 'Consultation',
    text: 'We listen, learn about your goals, and understand your health history.',
  },
  {
    icon: Stethoscope,
    title: 'Assessment',
    text: 'We perform a thorough exam to identify the root cause of concerns.',
  },
  {
    icon: CalendarCheck,
    title: 'Personalized Plan',
    text: 'We create a care plan tailored to your needs and lifestyle.',
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing Care',
    text: 'We support your progress with consistent care and long-term guidance.',
  },
]

const testimonials = [
  {
    quote:
      'Forest Hills Chiropractic has been a game changer for our family. My kids sleep better, I have more energy, and we all feel more like ourselves.',
    name: 'Kelly M.',
    detail: 'Mom of 2',
    initials: 'KM',
  },
  {
    quote:
      'The team is amazing with kids. They explain everything and make each visit comfortable and stress-free.',
    name: 'Jason D.',
    detail: 'Dad & Athlete',
    initials: 'JD',
  },
  {
    quote:
      'After years of back pain, I finally feel stronger and more mobile. Chiropractic care has truly improved my quality of life.',
    name: 'Susan R.',
    detail: 'Retired',
    initials: 'SR',
  },
]
</script>

<template>
  <main class="family-page">
    <section class="family-hero">
      <div class="family-hero__image">
        <img
          :src="heroImage"
          alt="Family speaking with a chiropractor in a warm clinic setting"
        />
      </div>

      <div class="family-hero__overlay"></div>

      <div class="container family-hero__inner">
        <div class="family-hero__content">
          <div class="breadcrumb breadcrumb--light">
            <a href="/services">Services</a>
            <span>/</span>
            <span>Family Chiropractic</span>
          </div>

          <p class="eyebrow">Family Chiropractic</p>

          <h1>
            Care for every<br />
            stage of life.
          </h1>

          <p>
            Gentle, personalized chiropractic care designed for children,
            parents, athletes, and older adults.
          </p>

          <div class="family-hero__actions">
            <a href="/booking" class="btn btn-primary">Book Appointment</a>
            <a href="/about" class="btn btn-secondary">Meet Our Team</a>
          </div>
        </div>
      </div>
    </section>

    <section class="family-trust">
      <div class="container family-trust__inner">
        <div
          v-for="item in trustItems"
          :key="item.title"
          class="family-trust__item"
        >
          <component
            :is="item.icon"
            :class="{ 'family-trust__icon--gold': item.gold }"
            class="family-trust__icon"
            :size="34"
            :stroke-width="1.7"
          />

          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section class="family-groups section">
      <div class="container">
        <div class="family-section-header family-section-header--center">
          <p class="eyebrow">Who we care for</p>
          <h2>Care that fits every stage.</h2>
          <span></span>
        </div>

        <div class="family-groups__grid">
          <div
            v-for="group in groups"
            :key="group.title"
            class="family-groups__card"
          >
            <div class="family-groups__icon">
              <component :is="group.icon" :size="30" :stroke-width="1.7" />
            </div>

            <h3>{{ group.title }}</h3>
            <p>{{ group.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="family-approach">
      <div class="family-approach__image">
        <img
          :src="familyImage"
          alt="Chiropractor explaining a spine model to a child"
        />
      </div>

      <div class="family-approach__content">
        <p class="eyebrow">Our approach</p>

        <h2>
          Gentle care focused on movement, posture, and long-term wellness.
        </h2>

        <p>
          We take the time to understand your family’s needs and create a care
          plan that supports your health, comfort, and everyday life.
        </p>

        <ul>
          <li>
            <CheckCircle :size="18" :stroke-width="1.8" />
            Thorough assessments
          </li>
          <li>
            <CheckCircle :size="18" :stroke-width="1.8" />
            Safe, effective adjustments
          </li>
          <li>
            <CheckCircle :size="18" :stroke-width="1.8" />
            Education and lifestyle guidance
          </li>
          <li>
            <CheckCircle :size="18" :stroke-width="1.8" />
            Family-centered care
          </li>
        </ul>

        <a href="/about" class="btn btn-primary">Learn More About Us</a>
      </div>
    </section>

    <section class="family-reasons section">
      <div class="container family-reasons__inner">
        <div class="family-reasons__heading">
          <p class="eyebrow">Common reasons families visit</p>

          <h2>
            We’re here for the everyday and the unexpected.
          </h2>

          <p>
            From small discomforts to big goals, we help families move, feel,
            and live better.
          </p>
        </div>

        <div class="family-reasons__list">
          <details
            v-for="(reason, index) in reasons"
            :key="reason.title"
            class="family-reasons__item"
            :open="index === 0"
          >
            <summary>
              <CheckCircle :size="22" :stroke-width="1.8" />
              <span>{{ reason.title }}</span>
              <ChevronDown :size="20" :stroke-width="1.8" />
            </summary>

            <p>{{ reason.text }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="family-process section">
      <div class="container">
        <div class="family-section-header family-section-header--center">
          <p class="eyebrow">What to expect</p>
          <h2>A simple, personalized process.</h2>
          <span></span>
        </div>

        <div class="family-process__steps">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="family-process__step"
          >
            <div class="family-process__icon">
              <component :is="step.icon" :size="30" :stroke-width="1.7" />
            </div>

            <h3>{{ index + 1 }}. {{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="family-testimonials section">
      <div class="container">
        <div class="family-section-header family-section-header--center">
          <p class="eyebrow">What families are saying</p>
          <h2>Trusted by families in our community.</h2>
        </div>

        <div class="family-testimonials__grid">
          <article
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="family-testimonials__card"
          >
            <div class="family-testimonials__quote">“</div>

            <p>
              {{ testimonial.quote }}
            </p>

            <div class="family-testimonials__person">
              <div>{{ testimonial.initials }}</div>

              <span>
                <strong>{{ testimonial.name }}</strong>
                {{ testimonial.detail }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="family-final-cta">
      <div class="container family-final-cta__inner">
        <h2>Ready to help your family move well and live well?</h2>
        <a href="/booking" class="btn btn-primary">
          Book Your Appointment Today
        </a>
      </div>
    </section>

    <Footer />
  </main>
</template>