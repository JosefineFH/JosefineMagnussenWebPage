  
<template>
  <div id="app">
    <NavBar/>
    <main>
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './assets/navbar.vue'
import Footer from './assets/footer.vue'
export default {
  components: {
    NavBar: NavBar,
    Footer: Footer
  }
}
</script>
<style>
@import "./assets/Style/main.css";
</style>
