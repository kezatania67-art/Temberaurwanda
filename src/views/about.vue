<!-- About.vue -->
<template>
  <div class="min-h-screen bg-gray-100">

    <!-- HEADER -->
    <section class="bg-green-800 text-white py-20 text-center">
      <h1 class="text-5xl font-bold mb-4">About Tembera u Rwanda</h1>

      <p class="text-xl max-w-3xl mx-auto">
        Tembera u Rwanda is a tourism platform created to showcase the beauty,
        culture, wildlife, and amazing destinations of Rwanda.
      </p>
    </section>

    <!-- ABOUT CONTENT -->
    <section class="py-16 px-8">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <!-- IMAGE -->
        <img
          src="/src/assets/images/tembera3.png"
          alt="Rwanda"
          class="rounded-3xl shadow-2xl"
        />

        <!-- TEXT -->
        <div>
          <h2 class="text-4xl font-bold text-green-800 mb-6">
            Discover Rwanda
          </h2>

          <p class="text-gray-700 text-lg mb-4">
            Rwanda is known as the Land of a Thousand Hills because of its
            beautiful landscapes and natural beauty.
          </p>

          <p class="text-gray-700 text-lg mb-4">
            Visitors enjoy gorilla trekking, national parks, lakes, cultural
            heritage, and Kigali city tours.
          </p>

          <p class="text-gray-700 text-lg">
            Our mission is to help tourists explore Rwanda easily and discover
            the country’s amazing experiences.
          </p>
        </div>

      </div>
    </section>

    <!-- WHY VISIT -->
    <section class="bg-white py-16 px-8">
      <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
        Why Visit Rwanda?
      </h2>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div class="bg-green-100 p-8 rounded-2xl shadow">
          <h3 class="text-2xl font-bold mb-4 text-green-700">
            Beautiful Nature
          </h3>

          <p class="text-gray-700">
            Enjoy mountains, lakes, forests, and wildlife across the country.
          </p>
        </div>

        <div class="bg-yellow-100 p-8 rounded-2xl shadow">
          <h3 class="text-2xl font-bold mb-4 text-yellow-700">
            Rich Culture
          </h3>

          <p class="text-gray-700">
            Experience traditional dance, art, food, and Rwandan hospitality.
          </p>
        </div>

        <div class="bg-blue-100 p-8 rounded-2xl shadow">
          <h3 class="text-2xl font-bold mb-4 text-blue-700">
            Safe & Clean
          </h3>

          <p class="text-gray-700">
            Rwanda is one of Africa’s cleanest and safest travel destinations.
          </p>
        </div>

      </div>
    </section>

  </div>
</template>