<template>
  <div class="min-h-screen bg-gray-100 p-10">

    <h1 class="text-5xl font-bold text-center text-green-700 mb-12">
      Our Services
    </h1>

    <div class="grid md:grid-cols-3 gap-8">

      <!-- CARD 1 -->
      <div class="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition">

        <h2 class="text-2xl font-bold text-green-700 mb-4">
          Tour Guidance
        </h2>

        <p class="text-gray-700 leading-7">
          We provide professional tour guides to help visitors explore
          the beauty of Rwanda safely and comfortably.
        </p>

      </div>

      <!-- CARD 2 -->
      <div class="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition">

        <h2 class="text-2xl font-bold text-green-700 mb-4">
          Hotel Booking
        </h2>

        <p class="text-gray-700 leading-7">
          Book affordable and luxury hotels across Rwanda with ease
          through our trusted travel services.
        </p>

      </div>

      <!-- CARD 3 -->
      <div class="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition">

        <h2 class="text-2xl font-bold text-green-700 mb-4">
          Transportation
        </h2>

        <p class="text-gray-700 leading-7">
          We offer safe transportation services for tourists traveling
          to different provinces and tourist destinations.
        </p>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Services",
}
</script>