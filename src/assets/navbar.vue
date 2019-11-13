<template>
  <div class="navbar">
    <p @click="backToMain()" class="firstName">
      Josefine
      <span class="lastName">Magnussen</span>
    </p>

      <a class="menu" @click="showNavbar = !showNavbar" >Menu</a>

    <div v-if="showNavbar" id="myNav" class="overlay">
      <a class="menuOpen" @click="showNavbar = false"> Close </a>
      <div class="overlay-content">
        <br />
        <router-link class="link" to="/">
          <span @click="showNavbar = false">Home</span>
        </router-link>
        <router-link class="link" to="/About">
          <span @click="showNavbar = false">About</span>
        </router-link>

        <router-link class="link" to="/Projects">
          <span @click="showNavbar = false">Projects</span>
        </router-link>
      <a class="link" href="mailto:josefine.magnussen@hotmail.com" target="_top">Send mail</a>
        <!-- <router-link class="link" to="/Contact">
          <span @click="showNavbar = false">Contact</span>
        </router-link> -->
      </div>
    </div>
    
    <!-- <p @click="backToMain()" class="name">
      Josefine
      <span class="nameLast">Magnussen</span>
    </p> -->
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      showNavbar: false
    };
  },

  methods: {

    backToMain() {
      this.$router.push("/");
    }
  }
};
</script>
<style>
@import './Style/navbar.css';
</style>

