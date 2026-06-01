<template>
  <div class="bg-gray-50">

    <!-- HERO -->
    <section
      class="hero"
      :style="{ backgroundImage: `url(${tembera1})` }"
    >
      <div class="hero-overlay">
        <h1 class="hero-title">
          {{ t('photosHeroTitle') }}
        </h1>

        <p class="hero-text">
          {{ t('photosHeroText') }}
        </p>

        <button class="hero-btn">
          {{ t('photosExploreNow') }}
        </button>
      </div>
    </section>

    <!-- FEATURED SECTION -->

    <section class="featured-section">

      <div class="featured-image">
        <img :src="tembera2" alt="">
      </div>

      <div class="featured-content">

        <h2>{{ t('landOfHills') }}</h2>

        <p>
          {{ t('rwandaOffers') }}
        </p>

        <button>
          {{ t('readMore') }}
        </button>

      </div>

    </section>

    <!-- GALLERY -->

    <section class="gallery-section">

      <div class="section-title">
        <h2>{{ t('photoGallery') }}</h2>
      </div>

      <div class="gallery-grid">

        <div class="gallery-card tall">
          <img :src="tembera1">
          <div class="overlay">
            <h3>{{ t('nature') }}</h3>
          </div>
        </div>

        <div class="gallery-card">
          <img :src="tembera3">
          <div class="overlay">
            <h3>{{ t('adventure') }}</h3>
          </div>
        </div>

        <div class="gallery-card">
          <img :src="tembera4">
          <div class="overlay">
            <h3>{{ t('culture') }}</h3>
          </div>
        </div>

        <div class="gallery-card wide">
          <img :src="tembera5">
          <div class="overlay">
            <h3>{{ t('tourism') }}</h3>
          </div>
        </div>

        <div class="gallery-card">
          <img :src="tembera6">
          <div class="overlay">
            <h3>{{ t('wildlife') }}</h3>
          </div>
        </div>

        <div class="gallery-card">
          <img :src="tembera2">
          <div class="overlay">
            <h3>{{ t('explore') }}</h3>
          </div>
        </div>

      </div>

    </section>

    <!-- STATS -->

    <section class="stats-section">

      <div class="stat-card">
        <h2>100+</h2>
        <p>{{ t('touristSites') }}</p>
      </div>

      <div class="stat-card">
        <h2>50K+</h2>
        <p>{{ t('visitors') }}</p>
      </div>

      <div class="stat-card">
        <h2>5</h2>
        <p>{{ t('provinces') }}</p>
      </div>

    </section>

  </div>
</template>

<script>
import { t } from '../i18n.js'
import tembera1 from '../assets/images/tembera1.png'
import tembera2 from '../assets/images/tembera2.png'
import tembera3 from '../assets/images/tembera3.png'
import tembera4 from '../assets/images/tembera4.png'
import tembera5 from '../assets/images/tembera5.png'
import tembera6 from '../assets/images/tembera6.png'

export default {
  name: 'Photos',

  data() {
    return {
      tembera1,
      tembera2,
      tembera3,
      tembera4,
      tembera5,
      tembera6
    }
  }
}
</script>

<style scoped>

/* HERO */

.hero{
  height:100vh;
  background-size:cover;
  background-position:center;
  animation:zoomHero 12s infinite alternate;
}

.hero-overlay{
  height:100%;
  background:rgba(0,0,0,.45);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:white;
}

.hero-title{
  font-size:5rem;
  font-weight:bold;
  animation:fadeUp 1s ease;
}

.hero-text{
  margin-top:15px;
  font-size:1.3rem;
  max-width:700px;
}

.hero-btn{
  margin-top:25px;
  background:#16a34a;
  color:white;
  padding:14px 35px;
  border:none;
  border-radius:40px;
  cursor:pointer;
  transition:.4s;
}

.hero-btn:hover{
  transform:scale(1.1);
}

/* FEATURED */

.featured-section{
  max-width:1300px;
  margin:auto;
  padding:100px 20px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  align-items:center;
}

.featured-image img{
  width:100%;
  border-radius:30px;
  box-shadow:0 15px 40px rgba(0,0,0,.15);
}

.featured-content h2{
  font-size:3rem;
  color:#166534;
}

.featured-content p{
  margin-top:20px;
  line-height:1.8;
}

.featured-content button{
  margin-top:20px;
  background:#16a34a;
  color:white;
  border:none;
  padding:12px 30px;
  border-radius:30px;
}

/* GALLERY */

.section-title{
  text-align:center;
  margin-bottom:50px;
}

.section-title h2{
  font-size:3rem;
  color:#166534;
}

.gallery-section{
  max-width:1400px;
  margin:auto;
  padding:50px 20px;
}

.gallery-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.gallery-card{
  position:relative;
  overflow:hidden;
  border-radius:25px;
  min-height:300px;
}

.gallery-card img{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:.7s;
}

.gallery-card:hover img{
  transform:scale(1.15);
}

.overlay{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.45);
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0;
  transition:.5s;
}

.gallery-card:hover .overlay{
  opacity:1;
}

.overlay h3{
  color:white;
  font-size:2rem;
}

.tall{
  grid-row:span 2;
}

.wide{
  grid-column:span 2;
}

/* STATS */

.stats-section{
  padding:100px 20px;
  display:flex;
  justify-content:center;
  gap:30px;
  flex-wrap:wrap;
}

.stat-card{
  width:250px;
  padding:40px;
  text-align:center;
  background:white;
  border-radius:25px;
  box-shadow:0 10px 30px rgba(0,0,0,.1);
  transition:.4s;
}

.stat-card:hover{
  transform:translateY(-12px);
}

.stat-card h2{
  font-size:3rem;
  color:#16a34a;
}

/* ANIMATIONS */

@keyframes fadeUp{
  from{
    opacity:0;
    transform:translateY(50px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

@keyframes zoomHero{
  from{
    background-size:100%;
  }
  to{
    background-size:110%;
  }
}

/* RESPONSIVE */

@media(max-width:900px){

  .featured-section{
    grid-template-columns:1fr;
  }

  .gallery-grid{
    grid-template-columns:1fr;
  }

  .tall,
  .wide{
    grid-column:auto;
    grid-row:auto;
  }

  .hero-title{
    font-size:3rem;
  }

}

</style>