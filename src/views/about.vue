<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-6">

    <!-- TITLE -->
    <div class="text-center mb-12 animate-fadeIn">
      <h1 class="text-5xl font-bold text-green-700 mb-4">
        About Rwanda
      </h1>

      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        Discover the beauty, culture, and story of the Land of a Thousand Hills.
      </p>
    </div>

    <!-- MAIN SECTION -->
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      <!-- IMAGE AREA -->
      <div class="relative group animate-slideLeft">

        <div class="absolute -inset-2 bg-green-200 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition"></div>

        <div class="relative bg-white p-4 rounded-3xl shadow-2xl">
          <img
            :src="aboutImage"
            alt="About Rwanda"
            class="rounded-2xl w-full h-[350px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

      </div>

      <!-- TEXT SECTION -->
      <div class="animate-slideRight">

        <h2 class="text-3xl font-bold text-green-700 mb-4">
          Why Rwanda?
        </h2>

        <p class="text-gray-700 leading-relaxed mb-6">
          Rwanda is one of Africa’s most beautiful and fast-growing tourism destinations.
          Known for its clean cities, rich wildlife, and friendly people, it offers unforgettable experiences
          for every traveler.
        </p>

        <div class="space-y-4">

          <div class="flex items-center gap-3 hover:translate-x-2 transition">
            <span class="text-green-600 text-xl">✔</span>
            <p>Safe and clean environment</p>
          </div>

          <div class="flex items-center gap-3 hover:translate-x-2 transition">
            <span class="text-green-600 text-xl">✔</span>
            <p>Mountain gorilla trekking</p>
          </div>

          <div class="flex items-center gap-3 hover:translate-x-2 transition">
            <span class="text-green-600 text-xl">✔</span>
            <p>Beautiful landscapes & lakes</p>
          </div>

          <div class="flex items-center gap-3 hover:translate-x-2 transition">
            <span class="text-green-600 text-xl">✔</span>
            <p>Rich culture and heritage</p>
          </div>

        </div>

        <button class="mt-8 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-900 hover:scale-105 transition">
          Explore More
        </button>

      </div>

    </div>

  </div>
</template>

<script>
import aboutImage from '../assets/images/tembera2.png'

export default {
  name: "About",
  data() {
    return {
      aboutImage
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideLeft {
  from { opacity: 0; transform: translateX(-60px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideRight {
  from { opacity: 0; transform: translateX(60px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}

.animate-slideLeft {
  animation: slideLeft 1s ease-out;
}

.animate-slideRight {
  animation: slideRight 1s ease-out;
}
</style>