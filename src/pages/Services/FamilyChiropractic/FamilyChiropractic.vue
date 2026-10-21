<script setup>
import "./FamilyChiropractic.scss";
import Footer from "@/components/Footer/Footer.vue";
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
} from "lucide-vue-next";

import heroImage from "@/assets/images/family-hero.png";
import familyImage from "@/assets/images/family-page.png";

const trustItems = [
  { icon: Heart, title: "For the Whole Family", text: "Care for kids, teens, adults, and seniors."},
  { icon: HeartHandshake, title: "Gentle & Personalized", text: "Treatment plans built around your unique needs." },
  { icon: Activity, title: "Long-Term Wellness", text: "Supporting healthy movement for today and tomorrow." },
  { icon: ShieldCheck, title: "Trusted Care", text: "A supportive environment focused on your needs." },
];

const groups = [
  { icon: Baby, title: "Kids & Teens", text: "Age-appropriate care for posture, musculoskeletal discomfort, mobility, and active lifestyles." },
  { icon: UserRound, title: "Parents", text: "Helping busy parents feel their best through every season." },
  { icon: Activity, title: "Athletes", text: "Supporting movement, recovery, and active lifestyles." },
  { icon: HeartHandshake, title: "Seniors", text: "Maintaining mobility, comfort, and quality of life." },
  { icon: Heart, title: "Everyday Wellness", text: "Supporting posture, movement, and long-term wellbeing." },
];

const kidsBenefits = [
  {
    number: "01",
    title: "Posture & Everyday Habits",
    text: "Backpacks, desk time, and screen habits can contribute to tension and discomfort. We assess movement concerns and offer practical guidance for everyday activities.",
  },
  {
    number: "02",
    title: "Sports & Active Lifestyles",
    text: "Sports can bring soreness and overuse-related discomfort. Individualized evaluations help identify movement limitations and guide appropriate care.",
  },
  {
    number: "03",
    title: "Growing Bodies & Mobility",
    text: "As children grow, movement needs change. We evaluate stiffness, discomfort, and mobility concerns to help families understand their options.",
  },
  {
    number: "04",
    title: "Gentle, Age-Appropriate Care",
    text: "Care is adapted to each child's age, comfort, and clinical findings. We explain recommendations and involve families in every decision.",
  },
];

const reasons = [
  {
    title: "Headaches & poor posture",
    text: "Family chiropractic care may help address posture-related stress, neck tension, and movement restrictions associated with certain headaches or stiffness.",
  },
  {
    title: "Posture and movement concerns in children",
    text: "Growing children may experience discomfort related to school activities, sports, and changing movement demands. An individualized evaluation can help identify musculoskeletal concerns and determine whether chiropractic care is appropriate.",
  },
  {
    title: "Pregnancy discomfort",
    text: "Care may help support comfort through pregnancy by addressing low back, hip, and pelvic tension with gentle techniques when appropriate.",
  },
  {
    title: "Sports injuries",
    text: "For active kids, teens, and adults, individualized care can support recovery and mobility following appropriate evaluation.",
  },
  {
    title: "Everyday back & neck pain",
    text: "Whether related to work, school, parenting, or daily activity, care may help reduce stiffness and improve movement.",
  },
  {
    title: "Mobility & aging gracefully",
    text: "Chiropractic care may help older adults address joint stiffness and maintain comfortable everyday movement.",
  },
];

const steps = [
  { icon: ClipboardList, title: "Consultation", text: "We listen, learn about your goals, and understand your health history." },
  { icon: Stethoscope, title: "Assessment", text: "We perform an individualized examination to understand your concerns." },
  { icon: CalendarCheck, title: "Personalized Plan", text: "We discuss care options appropriate for your needs and lifestyle." },
  { icon: HeartHandshake, title: "Ongoing Care", text: "We review your progress and provide guidance as your needs change." },
];
</script>

<template>
  <main class="family-page">
    <section class="family-hero">
      <div class="family-hero__image">
        <img :src="heroImage" alt="Family speaking with a chiropractor in a warm clinic setting" fetchpriority="high" />
      </div>
      <div class="family-hero__overlay" aria-hidden="true"></div>
      <div class="container family-hero__inner">
        <div class="family-hero__content">
          <div class="breadcrumb breadcrumb--light">
            <a href="/services">Services</a><span>/</span><span>Family Chiropractic</span>
          </div>
          <p class="eyebrow">Family Chiropractic</p>
          <h1>Care for every<br />stage of life.</h1>
          <p>Gentle, personalized family chiropractic care in Pittsburgh, PA for children, parents, athletes, and older adults.</p>
          <div class="family-hero__actions">
            <a href="/booking" class="btn btn-primary">Book Appointment</a>
            <a href="/about" class="btn btn-secondary">Meet Our Team</a>
          </div>
        </div>
      </div>
    </section>

    <section class="family-trust">
      <div class="container family-trust__inner">
        <div v-for="item in trustItems" :key="item.title" class="family-trust__item">
          <component :is="item.icon" :class="{ 'family-trust__icon--gold': item.gold }" class="family-trust__icon" :size="34" :stroke-width="1.7" aria-hidden="true" />
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
          <span aria-hidden="true"></span>
        </div>
        <div class="family-groups__grid">
          <div v-for="group in groups" :key="group.title" class="family-groups__card">
            <div class="family-groups__icon">
              <component :is="group.icon" :size="30" :stroke-width="1.7" aria-hidden="true" />
            </div>
            <h3>{{ group.title }}</h3>
            <p>{{ group.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="family-kids section" aria-labelledby="family-kids-heading">
      <div class="container">
        <div class="family-kids__inner">
          <div class="family-kids__heading">
            <p class="eyebrow">Chiropractic Care for Kids &amp; Teens</p>
            <h2 id="family-kids-heading">
              Support for growing bodies.<span>Care for active lives.</span>
            </h2>
            <p>
              From backpacks and classroom posture to sports and changing movement
              needs, kids and teens experience their own musculoskeletal challenges.
            </p>
            <p>
              At Forest Hills Chiropractic, we evaluate discomfort, stiffness,
              and mobility concerns in young patients and discuss age-appropriate
              care options with their families.
            </p>
          </div>

          <div class="family-kids__grid">
            <article
              v-for="benefit in kidsBenefits"
              :key="benefit.number"
              class="family-kids__card"
            >
              <span class="family-kids__number" aria-hidden="true">{{ benefit.number }}</span>
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.text }}</p>
            </article>
          </div>
        </div>

        <div class="family-kids__footer">
          <p>
            Every child is different. An individual evaluation helps us determine
            whether chiropractic care is appropriate or if another type of care
            or referral would be a better fit.
          </p>
          <a href="/booking" class="btn btn-primary">Request an Appointment</a>
        </div>
      </div>
    </section>

    <section class="family-approach">
      <div class="family-approach__image">
        <img :src="familyImage" alt="Chiropractor explaining a spine model to a child" loading="lazy" />
      </div>
      <div class="family-approach__content">
        <p class="eyebrow">Our approach</p>
        <h2>Gentle care focused on movement, posture, and long-term wellness.</h2>
        <p>We take the time to understand your family’s needs and create a care plan that supports your health, comfort, and everyday life.</p>
        <ul>
          <li><CheckCircle :size="18" :stroke-width="1.8" aria-hidden="true" />Thorough assessments</li>
          <li><CheckCircle :size="18" :stroke-width="1.8" aria-hidden="true" />Age-appropriate techniques when indicated</li>
          <li><CheckCircle :size="18" :stroke-width="1.8" aria-hidden="true" />Education and lifestyle guidance</li>
          <li><CheckCircle :size="18" :stroke-width="1.8" aria-hidden="true" />Family-centered care</li>
        </ul>
        <a href="/about" class="btn btn-primary">Learn More About Us</a>
      </div>
    </section>

    <section class="family-reasons section">
      <div class="container family-reasons__inner">
        <div class="family-reasons__heading">
          <p class="eyebrow">Common reasons families visit</p>
          <h2>We’re here for the everyday and the unexpected.</h2>
          <p>From everyday discomfort to movement goals, we help families understand their care options and work toward better function.</p>
        </div>
        <div class="family-reasons__list">
          <details v-for="(reason, index) in reasons" :key="reason.title" class="family-reasons__item" :open="index === 0">
            <summary>
              <CheckCircle :size="22" :stroke-width="1.8" aria-hidden="true" />
              <span>{{ reason.title }}</span>
              <ChevronDown :size="20" :stroke-width="1.8" aria-hidden="true" />
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
          <span aria-hidden="true"></span>
        </div>
        <div class="family-process__steps">
          <div v-for="(step, index) in steps" :key="step.title" class="family-process__step">
            <div class="family-process__icon">
              <component :is="step.icon" :size="30" :stroke-width="1.7" aria-hidden="true" />
            </div>
            <h3>{{ index + 1 }}. {{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="family-final-cta">
      <div class="container family-final-cta__inner">
        <h2>Ready to help your family move well and live well?</h2>
        <a href="/booking" class="btn btn-primary">Book Your Appointment Today</a>
      </div>
    </section>

    <Footer />
  </main>
</template>
