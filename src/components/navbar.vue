<template>
  <nav class="bg-green-700 text-white shadow-xl">

    <div class="container mx-auto flex justify-between items-center px-8 py-4">

      <div class="flex items-center gap-3">
        <img
          src="@/assets/logo.jpg"
          alt="logo"
          class="h-12 w-12 rounded-full border-2 border-white"
        />

        <h1 class="text-2xl font-bold">
          Tembera U Rwanda
        </h1>
      </div>

      <ul class="flex items-center gap-8 text-lg font-semibold ml-auto">

        <li>
          <router-link
            to="/"
            class="hover:text-yellow-300"
            active-class="text-yellow-300 border-b-4 border-yellow-300 pb-1"
          >
            Home
          </router-link>
        </li>

        <li>
          <router-link
            to="/about"
            class="hover:text-yellow-300"
            active-class="text-yellow-300 border-b-4 border-yellow-300 pb-1"
          >
            About
          </router-link>
        </li>

        <li>
          <router-link
            to="/services"
            class="hover:text-yellow-300"
            active-class="text-yellow-300 border-b-4 border-yellow-300 pb-1"
          >
            Services
          </router-link>
        </li>

        <!-- GALLERY -->
        <li class="relative">

          <button
            @click="showGallery = !showGallery"
            class="hover:text-yellow-300"
          >
            Gallery ▼
          </button>

          <div
            v-if="showGallery"
            class="absolute top-10 left-0 bg-white text-black rounded-xl shadow-xl w-56 overflow-hidden"
          >

            <router-link
              to="/photos"
              @click="selectedGallery = 'photos'"
              class="block px-4 py-3 hover:bg-yellow-300"
              :class="selectedGallery === 'photos' ? 'bg-yellow-300' : ''"
            >
              Photos
            </router-link>

            <router-link
              to="/videos"
              @click="selectedGallery = 'videos'"
              class="block px-4 py-3 hover:bg-yellow-300"
              :class="selectedGallery === 'videos' ? 'bg-yellow-300' : ''"
            >
              Videos
            </router-link>

          </div>

        </li>

        <!-- DESTINATION -->
        <li class="relative">

          <button
            @click="showDestination = !showDestination"
            class="hover:text-yellow-300"
          >
            Destination ▼
          </button>

          <div
            v-if="showDestination"
            class="absolute top-10 left-0 bg-white text-black rounded-xl shadow-xl w-64 overflow-hidden"
          >

            <router-link
              to="/kigali"
              @click="selectedProvince = 'Kigali City'"
              class="block px-4 py-3 hover:bg-yellow-300"
              :class="selectedProvince === 'Kigali City' ? 'bg-yellow-300' : ''"
            >
              Kigali City
            </router-link>

            <router-link
              to="/northern"
              @click="selectedProvince = 'Northern Province'"
              class="block px-4 py-3 hover:bg-yellow-300"
              :class="selectedProvince === 'Northern Province' ? 'bg-yellow-300' : ''"
            >
              Northern Province
            </router-link>

            <router-link
              to="/southern"
              @click="selectedProvince = 'Southern Province'"
              class="block px-4 py-3 hover:bg-yellow-300"
              :class="selectedProvince === 'Southern Province' ? 'bg-yellow-300' : ''"
            >
              Southern Province
            </router-link>

            <router-link
              to="/eastern"
              @click="selectedProvince = 'Eastern Province'"
              class="block px-4 py-3 hover:bg-yellow-300"
              :class="selectedProvince === 'Eastern Province' ? 'bg-yellow-300' : ''"
            >
              Eastern Province
            </router-link>

            <router-link
              to="/western"
              @click="selectedProvince = 'Western Province'"
              class="block px-4 py-3 hover:bg-yellow-300"
              :class="selectedProvince === 'Western Province' ? 'bg-yellow-300' : ''"
            >
              Western Province
            </router-link>

          </div>

        </li>

        <li>
          <router-link
            to="/contact"
            class="hover:text-yellow-300"
            active-class="text-yellow-300 border-b-4 border-yellow-300 pb-1"
          >
            Contact
          </router-link>
        </li>

      </ul>

    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      showGallery: false,
      showDestination: false,

      selectedGallery: "",
      selectedProvince: "",
    }
  },
}
</script>