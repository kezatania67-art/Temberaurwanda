
<template>
  <div class="min-h-screen bg-green-100 flex items-center justify-center py-10 px-4">
    <div class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

      <h2 class="text-3xl font-bold text-center text-green-800 mb-8">
        Create Account
      </h2>

      <form @submit.prevent="register" class="space-y-4">

        <!-- Full Name -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            Full Name
          </label>
          <input
            v-model="fullName"
            type="text"
            placeholder="Enter your full name"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <!-- Age -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            Age
          </label>
          <input
            v-model="age"
            type="number"
            placeholder="Enter your age"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <!-- Gender -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            Gender
          </label>
          <select
            v-model="gender"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          >
            <option value="">Select Gender</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>

        <!-- Address -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            Address
          </label>
          <textarea
            v-model="address"
            rows="3"
            placeholder="Enter your address"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          ></textarea>
        </div>

        <!-- Phone Number -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            Phone Number
          </label>
          <input
            v-model="phone"
            type="tel"
            placeholder="Enter your phone number"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-green-700 text-white py-3 rounded-lg font-bold hover:bg-green-800 transition"
        >
          Register
        </button>

      </form>

      <p class="text-center mt-6 text-gray-600">
        Already have an account?
        <RouterLink
          to="/login"
          class="text-green-700 font-semibold hover:underline"
        >
          Login
        </RouterLink>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const password = ref('')
const age = ref('')
const gender = ref('')
const address = ref('')
const phone = ref('')

const register = () => {
  console.log({
    fullName: fullName.value,
    email: email.value,
    password: password.value,
    age: age.value,
    gender: gender.value,
    address: address.value,
    phone: phone.value
  })

  alert('Registration Successful!')
}
</script>
