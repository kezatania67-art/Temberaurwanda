<script setup>
import { t } from '../i18n.js'
import northImage from '../assets/images/tembera2.png'
</script>

<template>
  <div class="page">

    <section class="hero" :style="{ backgroundImage: `url(${northImage})` }">
      <div class="overlay">
        <div class="hero-content">
          <h1 class="title">{{ t('pageTitleNorthern') }}</h1>
          <p class="subtitle">{{ t('pageSubtitleNorthern') }}</p>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="glass-card animate">

        <h2>{{ t('exploreNorthern') }}</h2>

        <p>
          {{ t('northernSummary') }}
        </p>

        <div class="stats">
          <div class="stat">
            <h3>{{ t('northernStat1Title') }}</h3>
            <p>{{ t('northernStat1Desc') }}</p>
          </div>

          <div class="stat">
            <h3>{{ t('northernStat2Title') }}</h3>
            <p>{{ t('northernStat2Desc') }}</p>
          </div>

          <div class="stat">
            <h3>{{ t('northernStat3Title') }}</h3>
            <p>{{ t('northernStat3Desc') }}</p>
          </div>
        </div>

        <button class="btn">{{ t('discoverMore') }}</button>

      </div>
    </section>

  </div>
</template>

<script>
import northImage from '../assets/images/tembera2.png'

export default {
  name: "Northern",
  data() {
    return { northImage }
  }
}
</script>

<style scoped>
.page { font-family: Arial; background: #f4f7f5; }

.hero {
  height: 70vh;
  background-size: cover;
  background-position: center;
  animation: zoom 12s infinite alternate;
}

.overlay {
  background: rgba(0,0,0,0.5);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content { color: white; text-align: center; }

.title { font-size: 4rem; animation: fadeUp 1s ease; }
.subtitle { font-size: 1.5rem; opacity: 0.9; }

.container {
  display: flex;
  justify-content: center;
  margin-top: -80px;
}

.glass-card {
  width: 90%;
  max-width: 900px;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
}

.stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
}

.stat {
  background: white;
  padding: 15px;
  border-radius: 15px;
  width: 150px;
  margin: 10px;
  transition: 0.3s;
}

.stat:hover { transform: translateY(-10px); }

.btn {
  margin-top: 25px;
  padding: 12px 30px;
  background: #16a34a;
  color: white;
  border-radius: 30px;
  border: none;
  cursor: pointer;
}

.btn:hover { transform: scale(1.1); }

@keyframes zoom {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate { animation: fadeUp 1.2s ease; }
</style>