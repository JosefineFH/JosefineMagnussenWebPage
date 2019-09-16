<template>
  <div class="navbar">
    <button class="button" @click="showNavbar = !showNavbar">
      <span>Menu</span>
    </button>
    <menu v-if="showNavbar" id="myNav" class="overlay">
      <button class="button" @click="showNavbar = false">Close</button>
      <div class="overlay-content">
        <br>
        <router-link to="/">
          <span @click="showNavbar = false">Home</span>
        </router-link>
        <router-link to="/About">
          <span @click="showNavbar = false">About</span>
        </router-link>

        <router-link to="/Projects">
          <span @click="showNavbar = false">Projects</span>
        </router-link>

        <router-link to="/Contact">
          <span @click="showNavbar = false">Contact</span>
        </router-link>
      </div>
    </menu>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      showNavbar: false
    };
  }
};
</script>
<style scoped>
.navbar {
  width: 100%;
  padding: 20px;
}
.button {
  
  float: right;
  margin-right: 18%;
  font-size: 20px;
  width: 150px;
  padding: 10px;
  background: #402131;
  border: none;
  color: white;
  border: solid #402131 2px;
}

.button:hover {
  background-color: white;
  border: solid #402131 2px;
  color: #402131;
  transition: all 1s, border 0.5s;
  /* background-color: #3e8e41 */
}

.overlay {
  padding: 20px;
  margin: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(64, 33, 49); /* Black fallback color */
  background-color: rgba(64, 33, 49, 0.9); /* Black w/opacity */
  /* background-color: #763c4b; */
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #e6e0da;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: white;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
</style>>
