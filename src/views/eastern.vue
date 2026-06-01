<template>
  <div class="page">

    <section class="hero" :style="{ backgroundImage: `url(${eastImage})` }">
      <div class="overlay">
        <div class="hero-content">
          <h1 class="title">Eastern Province</h1>
          <p class="subtitle">Wildlife • Safari • Adventure 🐘</p>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="glass-card">

        <h2>Explore Eastern Rwanda</h2>

        <p>
          Eastern Province is home to Akagera National Park,
          where visitors enjoy wildlife safaris, lakes, and
          unforgettable outdoor adventures.
        </p>

        <div class="stats">

          <div class="stat">
            <h3>🦁 Safari</h3>
            <p>Wildlife experiences</p>
          </div>

          <div class="stat">
            <h3>🚤 Lakes</h3>
            <p>Beautiful water views</p>
          </div>

          <div class="stat">
            <h3>🌄 Adventure</h3>
            <p>Outdoor activities</p>
          </div>

        </div>

        <button class="btn">
          Explore Eastern Province
        </button>

      </div>
    </section>

  </div>
</template>

<script>
import eastImage from '../assets/images/tembera1.png'

export default {
  name: 'Eastern',
  data() {
    return {
      eastImage
    }
  }
}
</script>

<style scoped>
.page{background:#f5f7f6;min-height:100vh;font-family:Arial,sans-serif}
.hero{height:70vh;background-size:cover;background-position:center;animation:zoom 10s infinite alternate}
.overlay{height:100%;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center}
.hero-content{text-align:center;color:white}
.title{font-size:4rem;font-weight:bold}
.subtitle{font-size:1.4rem}
.container{display:flex;justify-content:center;margin-top:-80px;padding:20px}
.glass-card{width:90%;max-width:900px;background:rgba(255,255,255,.85);backdrop-filter:blur(10px);padding:40px;border-radius:25px;box-shadow:0 20px 50px rgba(0,0,0,.15);text-align:center}
.stats{display:flex;justify-content:center;gap:20px;flex-wrap:wrap;margin-top:30px}
.stat{background:white;padding:20px;border-radius:15px;width:180px;transition:.3s}
.stat:hover{transform:translateY(-10px)}
.btn{margin-top:30px;padding:12px 28px;background:#16a34a;color:white;border:none;border-radius:30px;cursor:pointer}
.btn:hover{transform:scale(1.05)}
@keyframes zoom{from{transform:scale(1)}to{transform:scale(1.1)}}
</style>