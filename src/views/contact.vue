<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-10">

    <div class="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl">

      <h1 class="text-5xl font-bold text-center text-green-700 mb-10">
        Contact Us
      </h1>

      <form class="space-y-6">

        <!-- NAME -->
        <div>
          <label class="block text-lg font-semibold mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            class="w-full border-2 border-gray-300 rounded-xl p-4 focus:outline-none focus:border-green-600"
          />
        </div>

        <!-- EMAIL -->
        <div>
          <label class="block text-lg font-semibold mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            class="w-full border-2 border-gray-300 rounded-xl p-4 focus:outline-none focus:border-green-600"
          />
        </div>

        <!-- MESSAGE -->
        <div>
          <label class="block text-lg font-semibold mb-2">
            Message
          </label>

          <textarea
            rows="6"
            placeholder="Write your message..."
            class="w-full border-2 border-gray-300 rounded-xl p-4 focus:outline-none focus:border-green-600"
          ></textarea>
        </div>

        <!-- BUTTON -->
        <button
          class="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition w-full"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>
</template>

<script>
export default {
  name: "Contact",
}
</script>