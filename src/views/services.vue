<template>
  <div class="page">

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="overlay">
        <h1 class="hero-title">Our Services</h1>
        <p class="hero-subtitle">
          Making your journey through Rwanda unforgettable
        </p>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="services">

      <div class="service-card">
        <span class="icon">🧭</span>
        <h2>Tour Guides</h2>
        <p>Professional local guides for every destination.</p>
      </div>

      <div class="service-card">
        <span class="icon">🚐</span>
        <h2>Transport</h2>
        <p>Comfortable and secure travel across Rwanda.</p>
      </div>

      <div class="service-card">
        <span class="icon">🏨</span>
        <h2>Hotel Booking</h2>
        <p>Find the best accommodation for your stay.</p>
      </div>

      <div class="service-card">
        <span class="icon">📸</span>
        <h2>Photography Tours</h2>
        <p>Capture Rwanda's beauty with expert guidance.</p>
      </div>

      <div class="service-card">
        <span class="icon">🦍</span>
        <h2>Gorilla Trekking</h2>
        <p>Experience Rwanda’s world-famous mountain gorillas.</p>
      </div>

      <div class="service-card">
        <span class="icon">🌋</span>
        <h2>Adventure Tours</h2>
        <p>Explore volcanoes, lakes, and breathtaking landscapes.</p>
      </div>

    </section>

    <!-- IMAGE SHOWCASE -->
    <section class="gallery-section">
      <h2>Travel Experiences</h2>

      <div class="gallery">

        <div class="image-box">
          <img :src="serviceImage1" alt="Travel Experience">
        </div>

        <div class="image-box">
          <img :src="serviceImage2" alt="Tourism">
        </div>

      </div>
    </section>

    <!-- IMAGE UPLOAD -->
    <section class="upload-section">

      <h2>Upload Your Rwanda Experience</h2>

      <p>
        Share your favorite travel moments from around Rwanda.
      </p>

      <input
        type="file"
        accept="image/*"
        @change="handleImageUpload"
      >

      <div
        v-if="uploadedImage"
        class="preview-box"
      >
        <img
          :src="uploadedImage"
          alt="Uploaded Image"
        >
      </div>

    </section>

    <!-- CTA -->
    <section class="cta">
      <h2>Ready To Explore Rwanda?</h2>
      <button>Book Your Journey</button>
    </section>

  </div>
</template>

<script>
import serviceImage1 from '../assets/images/tembera2.png'
import serviceImage2 from '../assets/images/tembera3.png'

export default {
  name: 'Service',

  data() {
    return {
      serviceImage1,
      serviceImage2,
      uploadedImage: null
    }
  },

  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0]

      if (file) {
        this.uploadedImage = URL.createObjectURL(file)
      }
    }
  }
}
</script>

<style scoped>

.page{
  background:#f5f7f6;
  overflow:hidden;
}

/* HERO */

.hero{
  height:70vh;
  background:linear-gradient(
    rgba(0,0,0,.5),
    rgba(0,0,0,.5)
  ),
  url('../assets/images/tembera1.png');

  background-size:cover;
  background-position:center;
  display:flex;
  justify-content:center;
  align-items:center;
}

.overlay{
  text-align:center;
  color:white;
}

.hero-title{
  font-size:4rem;
  font-weight:bold;
}

.hero-subtitle{
  font-size:1.3rem;
  margin-top:15px;
}

/* SERVICES */

.services{
  max-width:1200px;
  margin:auto;
  padding:80px 20px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:30px;
}

.service-card{
  background:white;
  padding:30px;
  border-radius:25px;
  text-align:center;
  box-shadow:0 10px 30px rgba(0,0,0,.1);
  transition:.4s;
}

.service-card:hover{
  transform:translateY(-15px);
}

.icon{
  font-size:3rem;
}

/* GALLERY */

.gallery-section{
  padding:60px 20px;
  text-align:center;
}

.gallery-section h2{
  color:#166534;
  margin-bottom:40px;
}

.gallery{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(350px,1fr));
  gap:30px;
}

.image-box{
  overflow:hidden;
  border-radius:25px;
  box-shadow:0 10px 30px rgba(0,0,0,.15);
}

.image-box img{
  width:100%;
  height:350px;
  object-fit:cover;
  transition:.5s;
}

.image-box:hover img{
  transform:scale(1.08);
}

/* UPLOAD SECTION */

.upload-section{
  padding:80px 20px;
  text-align:center;
  background:white;
}

.upload-section h2{
  color:#166534;
  margin-bottom:10px;
}

.upload-section p{
  color:#666;
  margin-bottom:25px;
}

.upload-section input{
  padding:12px;
  border:2px dashed #16a34a;
  border-radius:15px;
  cursor:pointer;
}

.preview-box{
  margin-top:30px;
}

.preview-box img{
  width:100%;
  max-width:700px;
  border-radius:25px;
  box-shadow:0 15px 35px rgba(0,0,0,.2);
}

/* CTA */

.cta{
  text-align:center;
  padding:80px 20px;
}

.cta h2{
  color:#166534;
  margin-bottom:20px;
}

.cta button{
  background:#16a34a;
  color:white;
  border:none;
  padding:15px 35px;
  border-radius:30px;
  cursor:pointer;
  transition:.3s;
}

.cta button:hover{
  transform:scale(1.08);
}

</style>