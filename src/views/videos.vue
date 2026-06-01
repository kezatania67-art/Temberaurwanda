<template>
  <section class="videos-page">

    <div class="hero">
      <h1>Tembera u Rwanda</h1>
      <p>Experience Rwanda's Culture, Infrastructure & Tourism</p>
    </div>

    <div class="video-grid">

      <div class="video-card">
        <iframe
          src="https://youtu.be/2p9Qt60W91Q?si=99hNIiFvN30sEFda"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>

        <div class="caption">
          <h2>Rwandan Culture</h2>
          <p>Traditional dances, drumming and heritage.</p>
        </div>
      </div>

      <div class="video-card">
        <iframe
          src="https://youtu.be/Ov8JhHzPUKo?si=gLHZ9H6NIyHojHaz"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>

        <div class="caption">
          <h2>Modern Kigali</h2>
          <p>Infrastructure, innovation and city life.</p>
        </div>
      </div>

      <div class="video-card">
        <iframe
          src="https://youtu.be/5FVO3IHwIzw?si=KkXlvaikEmFmGfrZ"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>

        <div class="caption">
          <h2>Visit Rwanda</h2>
          <p>Wildlife, mountains and tourism destinations.</p>
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