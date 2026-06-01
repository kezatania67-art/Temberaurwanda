<script setup>
import { ref, onMounted } from 'vue'

import hero1 from '../assets/images/tembera1.png'
import hero2 from '../assets/images/tembera4.png'
import hero3 from '../assets/images/tembera3.png'

const images = [hero1, hero2, hero3]
const currentImage = ref(0)

onMounted(() => {
  setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.length
  }, 5000)
})

const destinations = [
  {
    title: 'Kigali City',
    image: hero2,
    description: 'Modern city life, culture and nightlife.'
  },
  {
    title: 'Volcanoes National Park',
    image: hero1,
    description: 'Home of the mountain gorillas.'
  },
  {
    title: 'Lake Kivu',
    image: hero3,
    description: 'Relax and enjoy beautiful lakeside views.'
  }
]
</script>

<template>
  <div class="bg-black text-white overflow-hidden">

    <!-- HERO SECTION -->
    <section
      class="relative h-screen flex items-center justify-center text-center"
    >
      <transition name="fade" mode="out-in">
        <img
          :key="currentImage"
          :src="images[currentImage]"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </transition>

      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 px-6 max-w-5xl">
        <h1
          class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-pulse"
        >
          Discover The Beauty Of Rwanda
        </h1>

        <p
          class="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
        >
          Explore breathtaking landscapes, wildlife adventures,
          cultural experiences and unforgettable destinations.
        </p>

        <div class="flex justify-center gap-4 flex-wrap">
          <button
            class="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold transition duration-300 hover:scale-110"
          >
            Explore Now
          </button>

          <button
            class="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Watch Video
          </button>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="py-20 bg-zinc-900">
      <div
        class="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6 text-center"
      >
        <div>
          <h2 class="text-5xl font-bold text-yellow-500">30+</h2>
          <p class="text-gray-400 mt-2">Destinations</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold text-yellow-500">100K+</h2>
          <p class="text-gray-400 mt-2">Visitors</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold text-yellow-500">12</h2>
          <p class="text-gray-400 mt-2">Provinces & Districts</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold text-yellow-500">24/7</h2>
          <p class="text-gray-400 mt-2">Travel Support</p>
        </div>
      </div>
    </section>

    <!-- DESTINATIONS -->
    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto">

        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Popular Destinations
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="destination in destinations"
            :key="destination.title"
            class="group rounded-3xl overflow-hidden bg-zinc-900 hover:scale-105 transition duration-500"
          >
            <div class="overflow-hidden">
              <img
                :src="destination.image"
                class="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">
                {{ destination.title }}
              </h3>

              <p class="text-gray-400">
                {{ destination.description }}
              </p>

              <button
                class="mt-5 bg-yellow-500 text-black px-5 py-3 rounded-full hover:bg-yellow-400 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE SECTION -->
    <section class="py-24 bg-zinc-950">
      <div
        class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6"
      >
        <div>
          <h2 class="text-5xl font-bold mb-6">
            Experience Rwanda Like Never Before
          </h2>

          <p class="text-gray-400 text-lg leading-relaxed">
            Discover wildlife safaris, luxury stays, cultural
            experiences, beautiful lakes, and vibrant city life.
            Every journey tells a unique story.
          </p>

          <button
            class="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Start Your Adventure
          </button>
        </div>

        <div
          class="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl"
        >
          <h3 class="text-3xl font-bold mb-4">
            Why Choose Rwanda?
          </h3>

          <ul class="space-y-4 text-gray-300">
            <li>✓ Clean and safe cities</li>
            <li>✓ Mountain gorilla trekking</li>
            <li>✓ Beautiful national parks</li>
            <li>✓ Modern tourism experiences</li>
            <li>✓ Rich culture and hospitality</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 text-center px-6">
      <h2 class="text-5xl font-bold mb-6">
        Ready To Explore Rwanda?
      </h2>

      <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
        Plan your next adventure and discover the Land of a Thousand Hills.
      </p>

      <button
        class="bg-yellow-500 text-black px-10 py-5 rounded-full text-lg font-bold hover:scale-110 transition"
      >
        Book Your Journey
      </button>
    </section>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>