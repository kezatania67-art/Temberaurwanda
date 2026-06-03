<template>
  <nav class="bg-green-700 text-white shadow-xl sticky top-0 z-50">
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

      <ul class="flex items-center gap-8 text-lg font-semibold">

        <li>
          <router-link
            to="/"
            class="hover:text-yellow-300 transition"
            active-class="text-yellow-300 border-b-4 border-yellow-300 pb-1"
          >
            {{ t('home') }}
          </router-link>
        </li>

        <li>
          <router-link
            to="/about"
            class="hover:text-yellow-300 transition"
            active-class="text-yellow-300 border-b-4 border-yellow-300 pb-1"
          >
            {{ t('about') }}
          </router-link>
        </li>

        <li>
          <router-link
            to="/services"
            class="hover:text-yellow-300 transition"
            active-class="text-yellow-300 border-b-4 border-yellow-300 pb-1"
          >
            {{ t('services') }}
          </router-link>
        </li>

        <li class="relative">
          <button
            @click="toggleGallery"
            class="hover:text-yellow-300 transition"
          >
            {{ t('gallery') }} ▼
          </button>

          <div
            v-if="showGallery"
            class="absolute top-10 left-0 bg-white text-black rounded-xl shadow-xl w-56 overflow-hidden"
          >
            <router-link
              to="/photos"
              @click="closeMenus"
              class="block px-4 py-3 hover:bg-yellow-300"
            >
              {{ t('photos') }}
            </router-link>

            <router-link
              to="/videos"
              @click="closeMenus"
              class="block px-4 py-3 hover:bg-yellow-300"
            >
              {{ t('videos') }}
            </router-link>
          </div>
        </li>

        <li class="relative">
          <button
            @click="toggleDestination"
            class="hover:text-yellow-300 transition"
          >
            {{ t('destination') }} ▼
          </button>

          <div
            v-if="showDestination"
            class="absolute top-10 left-0 bg-white text-black rounded-xl shadow-xl w-64 overflow-hidden"
          >
            <router-link
              to="/kigali"
              @click="closeMenus"
              class="block px-4 py-3 hover:bg-yellow-300"
            >
              {{ t('kigali') }}
            </router-link>

            <router-link
              to="/northern"
              @click="closeMenus"
              class="block px-4 py-3 hover:bg-yellow-300"
            >
              {{ t('northern') }}
            </router-link>

            <router-link
              to="/southern"
              @click="closeMenus"
              class="block px-4 py-3 hover:bg-yellow-300"
            >
              {{ t('southern') }}
            </router-link>

            <router-link
              to="/eastern"
              @click="closeMenus"
              class="block px-4 py-3 hover:bg-yellow-300"
            >
              {{ t('eastern') }}
            </router-link>

            <router-link
              to="/western"
              @click="closeMenus"
              class="block px-4 py-3 hover:bg-yellow-300"
            >
              {{ t('western') }}
            </router-link>
          </div>
        </li>

        <li>
          <router-link
            to="/contact"
            class="hover:text-yellow-300 transition"
            active-class="text-yellow-300 border-b-4 border-yellow-300 pb-1"
          >
            {{ t('contact') }}
          </router-link>
        </li>

        <li>
          <router-link
            to="/dashboard"
            class="hover:text-yellow-300 transition"
            active-class="text-yellow-300 border-b-4 border-yellow-300 pb-1"
          >
            Dashboard
          </router-link>
        </li>

        <li>
          <router-link
            to="/login"
            class="bg-white text-green-700 px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 hover:text-black transition"
          >
            Login
          </router-link>
        </li>

        <li>
          <select
            v-model="language"
            class="bg-green-800 border border-white rounded-lg px-3 py-2 text-white"
          >
            <option value="en">English</option>
            <option value="rw">Kinyarwanda</option>
            <option value="fr">Français</option>
          </select>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
import { state, t, setLocale } from '../i18n.js'

export default {
  name: 'Navbar',

  data() {
    return {
      showGallery: false,
      showDestination: false
    }
  },

  computed: {
    language: {
      get() {
        return state.locale
      },
      set(value) {
        setLocale(value)
      }
    }
  },

  methods: {
    toggleGallery() {
      this.showGallery = !this.showGallery
      this.showDestination = false
    },

    toggleDestination() {
      this.showDestination = !this.showDestination
      this.showGallery = false
    },

    closeMenus() {
      this.showGallery = false
      this.showDestination = false
    },

    t
  }
}
</script>

<style scoped>
.router-link-active {
  color: #fde047;
}
</style>