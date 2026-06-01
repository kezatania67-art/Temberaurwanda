<template>
  <div class="contact-page">

    <!-- HERO -->
    <section class="hero">
      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
      <div class="blob blob3"></div>

      <div class="hero-content">
        <h1>{{ t('letsExplore') }}</h1>
        <p>
          {{ t('contactIntro') }}
        </p>

        <a href="#contact-section" class="hero-btn">
          {{ t('getStarted') }}
        </a>
      </div>
    </section>

    <!-- CONTACT CARDS -->
    <section class="contact-cards">
      <div class="card">
        <div class="icon">📞</div>
        <h3>{{ t('callUs') }}</h3>
        <p>{{ t('number') }}</p>
      </div>

      <div class="card">
        <div class="icon">📧</div>
        <h3>{{ t('emailUs') }}</h3>
        <p>{{ t('email') }}</p>
      </div>

      <div class="card">
        <div class="icon">📍</div>
        <h3>{{ t('location') }}</h3>
        <p>{{ t('address') }}</p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact-section" class="contact-section">

      <div class="form-container">

        <div class="form-side">
          <h2>{{ t('sendMessageTitle') }}</h2>

          <form @submit.prevent="submitForm">
            <input
              type="text"
              :placeholder="t('fullName')"
              v-model="form.name"
              required
            />

            <input
              type="email"
              :placeholder="t('emailAddress')"
              v-model="form.email"
              required
            />

            <input
              type="text"
              :placeholder="t('subject')"
              v-model="form.subject"
              required
            />

            <textarea
              rows="6"
              :placeholder="t('yourMessage')"
              v-model="form.message"
              required
            ></textarea>

            <button type="submit">
              {{ t('sendMessage') }}
            </button>
          </form>

          <div v-if="success" class="success">
            {{ t('messageSent') }}
          </div>
        </div>

        <div class="info-side">
          <h2>{{ t('whyContactUs') }}</h2>

          <ul>
            <li>✓ {{ t('fastResponse') }}</li>
            <li>✓ {{ t('customPackages') }}</li>
            <li>✓ {{ t('localExperts') }}</li>
            <li>✓ {{ t('affordablePrices') }}</li>
            <li>✓ {{ t('support247') }}</li>
          </ul>

          <div class="quote">
            "{{ t('contactIntro') }}"
          </div>
        </div>

      </div>
    </section>

    <!-- STATS -->
    <section class="stats">

      <div class="stat-box">
        <h2>500+</h2>
        <p>{{ t('happyTravelers') }}</p>
      </div>

      <div class="stat-box">
        <h2>50+</h2>
        <p>{{ t('tourDestinations') }}</p>
      </div>

      <div class="stat-box">
        <h2>10+</h2>
        <p>{{ t('yearsExperience') }}</p>
      </div>

      <div class="stat-box">
        <h2>24/7</h2>
        <p>{{ t('support') }}</p>
      </div>

    </section>

    <!-- MAP -->
    <section class="map-section">
      <h2>{{ t('discoverUs') }}</h2>

      <iframe
        src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { t } from '../i18n.js'

const success = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  success.value = true

  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  setTimeout(() => {
    success.value = false
  }, 4000)
}
</script>

<style scoped>

/* PAGE */

.contact-page {
  background: #f8fafc;
  overflow-x: hidden;
}

/* HERO */

.hero {
  height: 100vh;
  position: relative;
  background: linear-gradient(
    135deg,
    #0f172a,
    #14532d
  );
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 2;
  max-width: 800px;
  padding: 20px;
}

.hero-content h1 {
  font-size: 5rem;
  margin-bottom: 20px;
  animation: fadeUp 1s ease;
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 30px;
  animation: fadeUp 1.4s ease;
}

.hero-btn {
  display: inline-block;
  padding: 16px 35px;
  background: white;
  color: #14532d;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: .4s;
}

.hero-btn:hover {
  transform: translateY(-5px);
}

/* FLOATING BLOBS */

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: float 8s ease-in-out infinite;
}

.blob1 {
  width: 300px;
  height: 300px;
  background: rgba(34,197,94,.4);
  top: 10%;
  left: 10%;
}

.blob2 {
  width: 350px;
  height: 350px;
  background: rgba(59,130,246,.3);
  right: 10%;
  top: 20%;
}

.blob3 {
  width: 250px;
  height: 250px;
  background: rgba(249,115,22,.3);
  bottom: 10%;
  left: 50%;
}

/* CONTACT CARDS */

.contact-cards {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 25px;
  max-width: 1200px;
  margin: -80px auto 80px;
  padding: 0 20px;
  position: relative;
  z-index: 10;
}

.card {
  background: rgba(255,255,255,.8);
  backdrop-filter: blur(15px);
  padding: 35px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0,0,0,.08);
  transition: .4s;
}

.card:hover {
  transform: translateY(-12px) scale(1.03);
}

.icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

/* CONTACT SECTION */

.contact-section {
  padding: 50px 20px;
}

.form-container {
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
}

.form-side,
.info-side {
  background: white;
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0 15px 35px rgba(0,0,0,.08);
}

.form-side h2,
.info-side h2 {
  margin-bottom: 25px;
}

input,
textarea {
  width: 100%;
  padding: 16px;
  margin-bottom: 18px;
  border: none;
  border-radius: 15px;
  background: #f1f5f9;
  transition: .3s;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 15px rgba(34,197,94,.4);
}

button {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 15px;
  background: #16a34a;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: .3s;
}

button:hover {
  transform: translateY(-3px);
}

.success {
  margin-top: 15px;
  background: #dcfce7;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
}

.info-side ul {
  list-style: none;
  padding: 0;
}

.info-side li {
  margin-bottom: 18px;
  font-size: 1.1rem;
}

.quote {
  margin-top: 30px;
  padding: 25px;
  background: #f8fafc;
  border-left: 5px solid #16a34a;
  border-radius: 15px;
}

/* STATS */

.stats {
  padding: 80px 20px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 25px;
  max-width: 1200px;
  margin: auto;
}

.stat-box {
  background: white;
  padding: 35px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,.08);
  transition: .3s;
}

.stat-box:hover {
  transform: translateY(-10px);
}

.stat-box h2 {
  color: #16a34a;
  font-size: 3rem;
}

/* MAP */

.map-section {
  padding: 80px 20px;
}

.map-section h2 {
  text-align: center;
  margin-bottom: 30px;
}

.map-section iframe {
  width: 100%;
  max-width: 1300px;
  height: 500px;
  border: none;
  border-radius: 25px;
  display: block;
  margin: auto;
}

/* ANIMATIONS */

@keyframes float {
  50% {
    transform: translateY(-40px);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESPONSIVE */

@media (max-width: 992px) {

  .contact-cards,
  .form-container,
  .stats {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 3rem;
  }
}

</style>