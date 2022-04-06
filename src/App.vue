<template>
  <blog-navbar />
  <router-view/>
</template>

<script>
import BlogNavbar from './components/BlogNavbar.vue'
import './assets/tailwind.css'

export default {
  components: { BlogNavbar }
}
</script>

<style>

</style>
