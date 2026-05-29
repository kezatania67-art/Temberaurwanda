<script setup>
import Navbar from './components/navbar.vue'
import{RouterView} from 'vue-router'
import Footer from './components/footer.vue'

</script>
<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>
