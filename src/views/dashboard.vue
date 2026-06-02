<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="w-68 bg-green-800 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold border-b border-green-700"></div>

      <nav class="flex-1 p-4">
        <button
          @click="activeMenu = 'overview'"
          :class="activeMenu === 'overview' ? 'bg-green-700' : ''"
          class="w-full text-left px-4 py-3 rounded mb-2"
        >
          Overview
        </button>
      </nav>
      <!--button for logout-->
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
        <h1 class="text-3xl font-bold text-green-800 mb-4">Dashboard</h1>
        <p class="text-gray-600">Welcome to your dashboard. Select menu items to continue.</p>
      </div>
    </main>
  </div>
</template>