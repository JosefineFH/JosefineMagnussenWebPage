<template>
  <div id="app">
    <NavBar/>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './assets/navbar.vue'

export default {
  components: {
    NavBar: NavBar
  }
}
</script>
<style>
@import "./assets/Style/main.css";
</style>
