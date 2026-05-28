<script setup>
import Navbar from './Components/Navbar.vue'
import{RouterView} from 'vue-router'
import Footer from './Components/Footer.vue'

</script>
<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>
