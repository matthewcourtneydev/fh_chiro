<script setup>
import "./Contact.scss";
import Footer from "@/components/Footer/Footer.vue";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-vue-next";
</script>

<template>
  <main class="contact-page">
    <section class="contact-hero">
      <div class="container contact-hero__inner">
        <h1>Contact</h1>
        <div class="contact-hero__rule"></div>
        <p>We’re here to help you move better and feel better.</p>
      </div>
    </section>

    <section class="contact-main section">
      <div class="container contact-main__inner">
        <aside class="contact-info">
          <p class="eyebrow">Get in Touch</p>

          <div class="contact-info__item">
            <div class="contact-info__icon">
              <Phone :size="24" :stroke-width="1.8" />
            </div>

            <div>
              <h2>(412) 646-4344</h2>
              <a href="tel:+14126464344">Call us</a>
            </div>
          </div>

          <div class="contact-info__item">
            <div class="contact-info__icon">
              <MapPin :size="24" :stroke-width="1.8" />
            </div>

            <div>
              <h2>Forest Hills Shopping Center</h2>
              <p>
                1901 Ardmore Blvd, Ste 123<br />
                Pittsburgh, PA 15221
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div class="contact-info__item">
            <div class="contact-info__icon">
              <Clock :size="24" :stroke-width="1.8" />
            </div>

            <div>
              <h2>Office Hours</h2>

              <div class="contact-info__hours">
                <span>Mon - Thu</span>
                <span>
                  9:00am - 12:00pm<br />
                  3:30pm - 6:00pm
                </span>

                <span>Fri</span>
                <span>Closed</span>

                <span>Sat - Sun</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </aside>

        <section class="contact-form">
          <p class="eyebrow">Send us a Message</p>

          <form>
            <div class="contact-form__row">
              <label>
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Full Name" />
              </label>

              <label>
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="Phone Number" />
              </label>
            </div>

            <label>
              <span>Email Address</span>
              <input type="email" name="email" placeholder="Email Address" />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                placeholder="How can we help?"
              ></textarea>
            </label>

            <button class="btn btn-dark" type="submit">Send Message</button>
          </form>
        </section>

        <div class="contact-map">
          <div class="contact-map">
            <iframe
              title="Forest Hills Chiropractic map"
              src="https://www.google.com/maps?q=21%20Yost%20Blvd%20%23150%20Forest%20Hills%2C%20PA%2015221&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-callout">
      <div class="container contact-callout__inner">
        <div class="contact-callout__icon">
          <MessageCircle :size="28" :stroke-width="1.8" />
        </div>

        <div>
          <h2>Prefer to talk?</h2>
          <p>
            Give us a call. We’re happy to answer your questions and help you
            schedule.
          </p>
        </div>

        <a href="tel:+14126464344" class="btn btn-outline">Call Now</a>
      </div>
    </section>

    <Footer :show-top-cta="false" />
  </main>
</template>
