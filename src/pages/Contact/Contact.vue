<script setup>
import "./Contact.scss";
import Footer from "@/components/Footer/Footer.vue";

import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-vue-next";

const phoneNumber = "(412) 646-4344";
const phoneHref = "tel:+14126464344";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=21%20Yost%20Blvd%20Ste%20148%2F150%20Pittsburgh%20PA%2015221";
</script>

<template>
  <main class="contact-page">
    <!-- Hero -->
    <section class="contact-hero">
      <div class="container contact-hero__inner">
        <p class="eyebrow">We're Here to Help</p>

        <h1>Contact Us.</h1>

        <div class="contact-hero__rule" aria-hidden="true"></div>

        <p class="contact-hero__description">
          Have a question about our services or ready to schedule your visit?
          Our team at Forest Hills Chiropractic is happy to help you get
          started.
        </p>
      </div>
    </section>

    <!-- Contact Details & Map -->
    <section class="contact-main section">
      <div class="container">
        <div class="contact-main__header">
          <div>
            <p class="eyebrow">Visit or Call Us</p>

            <h2>Let's Get You Moving.</h2>
          </div>

          <p class="contact-main__intro">
            Find our office in Pittsburgh, explore our hours, or get
            directions to your next appointment.
          </p>
        </div>

        <div class="contact-main__inner">
          <!-- Contact Information -->
          <div class="contact-info">
            <div class="contact-info__item">
              <div class="contact-info__icon" aria-hidden="true">
                <Phone :size="23" :stroke-width="1.8" />
              </div>

              <div class="contact-info__content">
                <h3>Call Our Office</h3>

                <a
                  :href="phoneHref"
                  class="contact-info__primary-link"
                >
                  {{ phoneNumber }}
                </a>

                <p>
                  Speak with our team about appointments, services,
                  or general questions.
                </p>
              </div>
            </div>

            <div class="contact-info__item">
              <div class="contact-info__icon" aria-hidden="true">
                <MapPin :size="23" :stroke-width="1.8" />
              </div>

              <div class="contact-info__content">
                <h3>Visit Our Office</h3>

                <strong>Forest Hills Shopping Center</strong>

                <address>
                  21 Yost Blvd, Ste 148/150<br />
                  Pittsburgh, PA 15221
                </address>

                <a
                  :href="directionsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-info__directions"
                >
                  Get Directions
                  <ExternalLink :size="15" :stroke-width="1.8" />
                </a>
              </div>
            </div>

            <div class="contact-info__item">
              <div class="contact-info__icon" aria-hidden="true">
                <Clock :size="23" :stroke-width="1.8" />
              </div>

              <div class="contact-info__content">
                <h3>Office Hours</h3>

                <div class="contact-info__hours">
                  <span>Monday – Thursday</span>
                  <span>
                    9:00am – 12:00pm<br />
                    3:30pm – 6:00pm
                  </span>

                  <span>Friday</span>
                  <span>Closed</span>

                  <span>Saturday – Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Google Maps -->
          <div class="contact-map">
            <iframe
              title="Map showing Forest Hills Chiropractic at 21 Yost Blvd in Pittsburgh, Pennsylvania"
              src="https://www.google.com/maps?q=21%20Yost%20Blvd%20Ste%20148%2F150%20Pittsburgh%20PA%2015221&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Callout -->
    <section class="contact-callout">
      <div class="container contact-callout__inner">
        <div class="contact-callout__icon" aria-hidden="true">
          <MessageCircle :size="27" :stroke-width="1.8" />
        </div>

        <div class="contact-callout__content">
          <h2>Ready to Get Started?</h2>

          <p>
            Have questions or need help scheduling? Our team is just
            a phone call away.
          </p>
        </div>

        <a :href="phoneHref" class="btn btn-outline">
          Call Our Office
          <ArrowRight :size="17" :stroke-width="1.8" />
        </a>
      </div>
    </section>

    <Footer :show-top-cta="false" />
  </main>
</template>