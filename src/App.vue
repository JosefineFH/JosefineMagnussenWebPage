<template>
  <div id="app">
    <NavBar></NavBar>

    <router-view/>
  </div>
</template>

<script>
import NavBar from "./assets/navbar.vue";

export default {
  components: {
    NavBar: NavBar,
  }
}
</script>
<style>
@import './assets/Style/main.css';

</style>
