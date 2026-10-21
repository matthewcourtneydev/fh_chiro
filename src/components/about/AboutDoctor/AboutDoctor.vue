<script setup>
import { ref } from 'vue'
import './AboutDoctor.scss'
import doctorHeadshot from '@/assets/images/doctor-headshot.jpg'

const isExpanded = ref(false)

function toggleExpanded() {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <section class="about-doctor section" aria-labelledby="about-doctor-heading">
    <div class="container about-doctor__inner">
      <div class="about-doctor__visual">
        <div class="about-doctor__portrait-frame">
          <div class="about-doctor__media">
            <img
              :src="doctorHeadshot"
              alt="Dr. Michael Testen of Forest Hills Chiropractic"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div class="about-doctor__content">
        <p class="eyebrow">Meet the Doctor</p>
        <h2 id="about-doctor-heading">Michael Testen, D.C.</h2>
        <p class="about-doctor__label">Chiropractor</p>
        <div class="about-doctor__title-rule" aria-hidden="true"></div>

        <p>
          Originally from a small town in northern Pennsylvania,
          Dr. Michael Testen's journey eventually brought him to
          Pittsburgh. After practicing chiropractic care in Chicago
          for three years, he returned to his home state to build
          a life and career closer to family.
        </p>

        <p>
          His wife grew up in the Forest Hills area, attended a
          local high school, and has deep roots in the community.
          Together, they chose to settle down and raise their
          children in the neighborhood she has always called home.
          Today, Dr. Testen is proud to care for the same community
          his family is part of.
        </p>

        <button
          class="about-doctor__toggle"
          type="button"
          :aria-expanded="isExpanded"
          aria-controls="about-doctor-biography"
          @click="toggleExpanded"
        >
          <span>{{ isExpanded ? 'Read Less' : 'Read More' }}</span>
          <span class="about-doctor__toggle-icon" aria-hidden="true">
            {{ isExpanded ? '−' : '+' }}
          </span>
        </button>
      </div>
    </div>

    <div
      v-if="isExpanded"
      id="about-doctor-biography"
      class="container about-doctor__expanded"
    >
      <div class="about-doctor__story">
        <div class="about-doctor__story-heading">
          <span class="about-doctor__story-index" aria-hidden="true">01</span>
          <h3>The Journey Behind the Practice</h3>
        </div>
        <div class="about-doctor__story-copy">
          <p>
            Dr. Testen's passion for chiropractic care began at just
            13 years old, following a wrestling injury that left him
            struggling to walk and barely able to bend his knee.
            After visiting a chiropractor and experiencing remarkable
            relief following an adjustment, he discovered firsthand
            the difference chiropractic care could make.
          </p>

          <p>
            That experience helped shape his path toward a career in
            chiropractic. He completed his undergraduate education at
            Bloomsburg University of Pennsylvania, where he also
            competed as a collegiate wrestler. He later attended
            Life University College of Chiropractic in Marietta,
            Georgia, earning his Doctor of Chiropractic degree.
          </p>

          <p>
            His background in athletics, combined with his education
            and clinical experience, continues to influence the way
            he approaches patient care today. He understands the
            importance of movement, recovery, and maintaining the
            ability to do the things you love.
          </p>

          <blockquote class="about-doctor__quote">
            <p>“Giving, loving, serving with no attachment to the results.”</p>
          </blockquote>
        </div>
      </div>

      <div class="about-doctor__story">

        <div class="about-doctor__story-heading">
          <span class="about-doctor__story-index" aria-hidden="true">02</span>
          <h3>A Philosophy of Care</h3>
        </div>
        <div class="about-doctor__story-copy">
          <p>
            At Forest Hills Chiropractic, Dr. Testen provides
            individualized care for patients of all ages. His
            treatments include chiropractic adjustments, corrective
            care, spinal decompression, therapeutic treatments,
            and custom orthotics. Whether helping someone address
            everyday discomfort, recover from an injury, or maintain
            an active lifestyle, his goal is to help patients
            move better and feel their best.
          </p>

          <p>
            As the practice's chiropractor, Dr. Testen takes a
            hands-on, personal approach to care. He believes in
            listening closely, identifying the underlying causes
            of discomfort, and developing treatment plans tailored
            to each patient's individual needs and goals.
          </p>

          <p>
            Above all, his mission is simple: to serve his community,
            build lasting relationships with his patients, and help
            individuals and families enjoy healthier, more active lives.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
