<script setup>
import { t } from '../i18n.js'
import kigaliImage from '../assets/images/tembera4.png'
</script>

<template>
  <div class="page">

    <!-- HERO -->
    <section class="hero" :style="{ backgroundImage: `url(${kigaliImage})` }">
      <div class="overlay">
        <div class="hero-content">
          <h1 class="title">{{ t('pageTitleKigali') }}</h1>
          <p class="subtitle">{{ t('pageSubtitleKigali') }}</p>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="container">

      <div class="glass-card animate">
        <h2>{{ t('exploreKigali') }}</h2>
        <p>
          {{ t('kigaliSummary') }}
        </p>

        <div class="stats">
          <div class="stat">
            <h3>🌿 {{ t('clean') }}</h3>
            <p>{{ t('cleanDesc') }}</p>
          </div>

          <div class="stat">
            <h3>🏙️ {{ t('modern') }}</h3>
            <p>{{ t('modernDesc') }}</p>
          </div>

          <div class="stat">
            <h3>🛡️ {{ t('safe') }}</h3>
            <p>{{ t('safeDesc') }}</p>
          </div>
        </div>

        <button class="btn">{{ t('discoverMore') }}</button>
      </div>

    </section>

  </div>
</template>

<script>
// 👇 IMAGE IMPORT PLACE
import kigaliImage from '../assets/images/tembera4.png'

export default {
  name: "Kigali",
  data() {
    return {
      kigaliImage
    }
  }
}
</script>

<style scoped>

/* PAGE */
.page {
  font-family: Arial, sans-serif;
  background: #f4f7f5;
}

/* HERO */
.hero {
  height: 70vh;
  background-size: cover;
  background-position: center;
  position: relative;
  animation: zoom 12s infinite alternate;
}

.overlay {
  background: rgba(0,0,0,0.5);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  animation: fadeUp 1s ease;
}

.subtitle {
  font-size: 1.5rem;
  margin-top: 10px;
  opacity: 0.9;
  animation: fadeUp 1.5s ease;
}

/* CONTAINER */
.container {
  display: flex;
  justify-content: center;
  margin-top: -80px;
  padding: 20px;
}

/* GLASS CARD (MODERN LOOK) */
.glass-card {
  width: 90%;
  max-width: 900px;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
  text-align: center;
}

/* STATS */
.stats {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  flex-wrap: wrap;
}

.stat {
  background: white;
  padding: 15px;
  border-radius: 15px;
  width: 150px;
  margin: 10px;
  transition: 0.3s;
}

.stat:hover {
  transform: translateY(-10px);
}

/* BUTTON */
.btn {
  margin-top: 30px;
  padding: 12px 30px;
  border: none;
  background: #16a34a;
  color: white;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  transform: scale(1.1);
  background: #0f7a34;
}

/* ANIMATIONS */
@keyframes zoom {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate {
  animation: fadeUp 1.2s ease;
}

</style>