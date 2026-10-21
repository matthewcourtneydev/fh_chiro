<script setup>
import './LocationMap.scss'

const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=21%20Yost%20Blvd%20Ste%20148%2F150%20Pittsburgh%20PA%2015221'

const hours = [
  { day: 'Monday', morning: '7:00 AM – 11:15 AM', afternoon: '2:30 PM – 6:00 PM' },
  { day: 'Tuesday', morning: '7:00 AM – 11:15 AM', afternoon: '2:30 PM – 6:00 PM' },
  { day: 'Wednesday', morning: '7:00 AM – 11:15 AM', afternoon: null },
  { day: 'Thursday', morning: '7:00 AM – 11:15 AM', afternoon: '2:30 PM – 6:00 PM' },
  { day: 'Friday', morning: null, afternoon: null },
  { day: 'Saturday', morning: null, afternoon: null },
  { day: 'Sunday', morning: null, afternoon: null },
]
</script>

<template>
  <section class="location-map section" aria-labelledby="location-map-heading">
    <div class="container">
      <div class="location-map__header">
        <div>
          <p class="eyebrow">Visit Our Office</p>
          <h2 id="location-map-heading">We’re Here to Help.</h2>
        </div>

        <a
          class="btn btn-primary"
          :href="directionsUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </a>
      </div>

      <div class="location-map__layout">
        <div class="location-map__info">
          <div class="location-map__card">
            <h3>Forest Hills Chiropractic</h3>

            <a
              class="location-map__address"
              :href="directionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Forest Hills Chiropractic at 21 Yost Boulevard, Suite 148/150, Pittsburgh, PA 15221 (opens in a new tab)"
            >
              21 Yost Blvd, Suite 148/150<br />
              Pittsburgh, PA 15221
            </a>

            <a href="tel:+14126464344" class="location-map__phone">
              P: (412) 646-4344
            </a>

            <p class="location-map__fax">F: (412) 646-4316</p>
          </div>

          <div class="location-map__card">
            <h3>Office Hours</h3>

            <ul class="location-map__hours">
              <li v-for="entry in hours" :key="entry.day">
                <strong>{{ entry.day }}</strong>
                <span class="location-map__hours-time">
                  <template v-if="entry.morning">
                    <span>{{ entry.morning }}</span>
                    <span v-if="entry.afternoon" class="location-map__hours-afternoon">
                      {{ entry.afternoon }}
                    </span>
                  </template>
                  <span v-else>Closed</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="location-map__map">
          <iframe
            title="Map showing Forest Hills Chiropractic at 21 Yost Boulevard in Pittsburgh, Pennsylvania"
            src="https://www.google.com/maps?q=21%20Yost%20Blvd%20Ste%20148%2F150%20Pittsburgh%20PA%2015221&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
