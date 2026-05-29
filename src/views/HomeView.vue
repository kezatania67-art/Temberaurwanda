<!-- Home.vue -->
<template>
  <div>

    <!-- HERO SECTION -->
    <section
      class="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style="background-image: url('/src/assets/images/tembera2.png');"
    >
      <div class="bg-black/60 p-10 rounded-2xl text-center">
        <h1 class="text-5xl font-bold mb-4">Tembera u Rwanda</h1>
        <p class="text-xl mb-6">
          Discover the beauty of Rwanda — Land of a Thousand Hills
        </p>

        <button
          class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl transition"
        >
          Explore Now
        </button>
      </div>
    </section>

    <!-- DESTINATIONS -->
    <section class="py-16 px-8 bg-gray-100">
      <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
        Popular Destinations
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <!-- CARD 1 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="/src/assets/images/tembera4.png"
            alt="Kigali"
            class="h-56 w-full object-cover"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700 mb-3">Kigali City</h3>

            <p class="text-gray-600">
              Explore Rwanda’s clean and modern capital city with amazing culture,
              restaurants, and views.
            </p>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="/src/assets/images/tembera5.png"
            alt="Gorilla"
            class="h-56 w-full object-cover"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700 mb-3">
              Volcanoes National Park
            </h3>

            <p class="text-gray-600">
              Meet the famous mountain gorillas and enjoy unforgettable adventures.
            </p>
          </div>
        </div>

        <!-- CARD 3 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="/src/assets/images/tembera6.png"
            alt="Lake Kivu"
            class="h-56 w-full object-cover"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700 mb-3">Lake Kivu</h3>

            <p class="text-gray-600">
              Relax at one of Africa’s most beautiful lakes with beaches and sunsets.
            </p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>