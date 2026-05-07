import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home/Home.vue";
import About from "@/pages/About/About.vue";
import Services from "@/pages/Services/Services.vue";
import SpinalDecompression from "@/pages/Services/SpinalDecompression/SpinalDecompression.vue";
import ChiropracticAdjustments from '@/pages/Services/ChiropracticAdjustments/ChiropracticAdjustments.vue';
import CustomOrthotics from '@/pages/Services/CustomOrthotics/CustomOrthotics.vue';
import Therapies from '@/pages/Services/Therapies/Therapies.vue';
import FamilyChiropractic from '@/pages/Services/FamilyChiropractic/FamilyChiropractic.vue';
import CorrectiveCare from '@/pages/Services/CorrectiveCare/CorrectiveCare.vue';
import Contact from '@/pages/Contact/Contact.vue';
import Booking from '@/pages/Booking/Booking.vue';
import PrivacyPolicy from '@/pages/PrivacyPolicy/PrivacyPolicy.vue';
import Accessibility from '@/pages/Accessibility/Accessibility.vue';
import TermsOfService from '@/pages/TermsOfService/TermsOfService.vue';
import HipaaPolicy from '@/pages/HipaaPolicy/HipaaPolicy.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  {
    path: "/services/spinal-decompression",
    component: SpinalDecompression,
  },
  {
    path: '/services/chiropractic-adjustments',
    component: ChiropracticAdjustments,
  },
  {
    path: '/services/therapies',
    component: Therapies,
  },
  {
    path: '/services/orthotics',
    component: CustomOrthotics,
  },
  {
    path: '/services/family',
    component: FamilyChiropractic,
  },
  {
    path: '/services/corrective',
    component: CorrectiveCare,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/booking',
    component: Booking,
  },
  {
    path: '/privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: '/accessibility',
    component: Accessibility,
  },
  {
    path: '/terms-of-service',
    component: TermsOfService,
  },
  {
    path: '/hipaa-policy',
    component: HipaaPolicy,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: 'smooth',
    }
  }
});

export default router;
