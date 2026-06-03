<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeMenu = ref('overview')

function logout() {
  router.push('/login')
}
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="w-64 bg-green-800 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold border-b border-green-700">
        Dashboard
      </div>

      <nav class="flex-1 p-4">
        <button
          @click="activeMenu = 'overview'"
          :class="[
            'w-full text-left px-4 py-3 rounded mb-2 transition',
            activeMenu === 'overview'
              ? 'bg-green-700'
              : 'hover:bg-green-700'
          ]"
        >
          Overview
        </button>

        <button
          @click="activeMenu = 'users'"
          :class="[
            'w-full text-left px-4 py-3 rounded mb-2 transition',
            activeMenu === 'users'
              ? 'bg-green-700'
              : 'hover:bg-green-700'
          ]"
        >
          Users
        </button>

        <button
          @click="activeMenu = 'gallery'"
          :class="[
            'w-full text-left px-4 py-3 rounded mb-2 transition',
            activeMenu === 'gallery'
              ? 'bg-green-700'
              : 'hover:bg-green-700'
          ]"
        >
        Bookings
        </button>

        <button
          @click="activeMenu = 'settings'"
          :class="[
            'w-full text-left px-4 py-3 rounded mb-2 transition',
            activeMenu === 'settings'
              ? 'bg-green-700'
              : 'hover:bg-green-700'
          ]"
        >
          Settings
        </button>
      </nav>

      <div class="p-4 border-t border-green-700">
        <button
          @click="logout"
          class="w-full bg-red-600 hover:bg-red-800 text-white py-2 rounded transition"
        >
          Logout
        </button>
      </div>
    </aside>

    <main class="flex-1 overflow-y-auto p-8">
      <div class="bg-white rounded-2xl shadow p-6">
        <h1 class="text-3xl font-bold text-green-800 mb-4">
          Dashboard
        </h1>

        <div v-if="activeMenu === 'overview'">
          <p class="text-gray-600">
            Welcome to your dashboard. Select menu items to continue.
          </p>
        </div>

        <div v-else-if="activeMenu === 'users'">
          <p class="text-gray-600">
            Manage registered users here.
          </p>
        </div>

        <div v-else-if="activeMenu === 'gallery'">
          <p class="text-gray-600">
            Manage bookings here.
          </p>
        </div>

        <div v-else-if="activeMenu === 'settings'">
          <p class="text-gray-600">
            Manage dashboard settings here.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>