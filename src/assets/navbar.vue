<template>
  <nav class="header">
  <div class="menu-items">
    <label for="hamburger-menu">
      <img src="../assets/images/menu.png" alt="dropdown menu" class="dropdown_icon"/>
    </label>
    <input type="checkbox" id="hamburger-menu">
    <div class="nav_bar">
    <ul>
          <li>
            <router-link class="link" to="/">
              <span>Hjem</span>
            </router-link>
          </li>
          <li>
            <router-link class="link" to="/About">
              <span>Om Meg</span>
            </router-link>
          </li>
          <li>
            <router-link class="link" to="/Projects">
              <span>Prosjekter</span>
            </router-link>
          </li>
          <li>
            <span>
              <a
                class="link"
                href="mailto:josefine.magnussen@hotmail.com"
                target="_top"
                >Kontakt meg</a
              >
            </span>
          </li>
        </ul>
    </div>
  </div>
    <!-- <div>
        <ul>
          <li>
            <router-link class="link" to="/">
              <span>Hjem</span>
            </router-link>
          </li>
          <li>
            <router-link class="link" to="/About">
              <span>Om Meg</span>
            </router-link>
          </li>
          <li>
            <router-link class="link" to="/Projects">
              <span>Prosjekter</span>
            </router-link>
          </li>
          <li>
            <span>
              <a
                class="link"
                href="mailto:josefine.magnussen@hotmail.com"
                target="_top"
                >Kontakt meg</a
              >
            </span>
          </li>
        </ul>
    </div> -->
  </nav>
</template>
<script>

// export default {
//   name: 'about',
//   data () {
//     return {
//       available: false
//     }
//   },

//   computed: {
//     compClasses: function () {
//       return {
//         available: this.available
//       }
//     }
//   },

//   methods: {
//     backToMain () {
//       this.$router.push('/')
//     }
//   }
// }
</script>

<style>
@import "./Style/nav.css";
</style>
