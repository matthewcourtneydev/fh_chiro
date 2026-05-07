<script setup>
import './LocationMap.scss'

const hours = [
  ['Monday', '9:00am - 12:00pm | 3:30pm - 6:00pm'],
  ['Tuesday', '9:00am - 12:00pm | 3:30pm - 6:00pm'],
  ['Wednesday', '9:00am - 12:00pm | 3:30pm - 6:00pm'],
  ['Thursday', '9:00am - 12:00pm | 3:30pm - 6:00pm'],
  ['Friday', 'Closed'],
  ['Saturday', 'Closed'],
  ['Sunday', 'Closed'],
]
</script>

<template>
  <section class="location-map section">
    <div class="container">
      <div class="location-map__header">
        <div>
          <p class="eyebrow">Visit our office</p>
          <h2>We’re here to help.</h2>
        </div>

        <a
          class="btn btn-primary"
          href="https://www.google.com/maps/search/?api=1&query=21+Yost+Blvd+%23150+Forest+Hills+PA+15221"
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

            <p>
              21 Yost Blvd #150<br />
              Forest Hills, PA 15221
            </p>

            <a href="tel:+14126464344" class="location-map__phone">
              P: (412) 646-4344
            </a>

            <p>F: (412) 646-4316</p>
          </div>

          <div class="location-map__card">
            <h3>Office Hours</h3>

            <ul>
              <li v-for="[day, time] in hours" :key="day">
                <strong>{{ day }}</strong>
                <span>{{ time }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="location-map__map">
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
</template>