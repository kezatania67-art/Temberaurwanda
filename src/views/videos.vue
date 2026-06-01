<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <section class="videos-page">

    <div class="hero">
      <h1>{{ t('videosPageTitle') }}</h1>
      <p>{{ t('videosPageSubtitle') }}</p>
    </div>

    <div class="video-grid">

      <div class="video-card">
        <iframe
          src="https://www.youtube.com/embed/2p9Qt60W91Q?autoplay=1&mute=1"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>

        <div class="caption">
          <h2>{{ t('videoTitle1') }}</h2>
          <p>{{ t('videoDesc1') }}</p>
        </div>
      </div>

      <div class="video-card">
        <iframe
          src="https://www.youtube.com/embed/Ov8JhHzPUKo?autoplay=1&mute=1"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>

        <div class="caption">
          <h2>{{ t('videoTitle2') }}</h2>
          <p>{{ t('videoDesc2') }}</p>
        </div>
      </div>

      <div class="video-card">
        <iframe
          src="https://www.youtube.com/embed/5FVO3IHwIzw?autoplay=1&mute=1"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>

        <div class="caption">
          <h2>{{ t('videoTitle3') }}</h2>
          <p>{{ t('videoDesc3') }}</p>
        </div>
      </div>

    </div>

  </section>
</template>

<style scoped>
.videos-page{
  min-height:100vh;
  padding:80px 5%;
  background:#0b3d2e;
}

.hero{
  text-align:center;
  color:white;
  margin-bottom:50px;
}

.hero h1{
  font-size:4rem;
}

.video-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(350px,1fr));
  gap:30px;
}

.video-card{
  background:white;
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 15px 35px rgba(0,0,0,.3);
}

.video-card iframe{
  width:100%;
  height:300px;
  border:none;
}

.caption{
  padding:20px;
}

.caption h2{
  color:#14532d;
}
</style>