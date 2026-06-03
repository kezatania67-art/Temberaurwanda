<script setup>
import Navbar from './components/navbar.vue'
import{RouterView, useRoute} from 'vue-router'
import Footer from './components/footer.vue'
import {computed} from 'vue';



const route=useRoute()
const hideLayout=computed(()=>['Dashboard'].includes(route.name))

</script>
<template>
  <Navbar v-if="!hidelayout"/>
  <RouterView/>
  <Footer v-if="!hideLayout"/>
</template>
