<template>
  <nav class="nav__bar">
    <img
      class="menuIcon"
      src="../assets/images/menu.png"
      alt="Menu"
      v-on:click="available = !available"
    />

    <div v-bind:class="compClasses">
      <div class="container">
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

  </nav>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      available: false
    }
  },

  computed: {
    compClasses: function () {
      return {
        available: this.available
      }
    }
  },

  methods: {
    backToMain () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
/* nav{
  border: solid black 1px;
} */
ul {
  margin: 0;
  padding: 0;
}
.nav__bar {
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  background: #ffffff;
}

.available ul {
  display: block;
}
.container {
  z-index: 1;
  position: absolute;
  background-color: #fff;
  width: 100%;
}
.container a {
  color: black;
  text-decoration: none;
  font-size: 26px;
  padding: 30px;
}
.menuIcon {
  width: 30px;
  margin: 30px 30px 30px 30px;
}

ul {
  display: none;
  color: #fff;
  line-height: 60px;
  font-family: "Quicksand", sans-serif;
  font-weight: 300;
}

a:hover {
  color: #1B5E36;
  font-weight: bold;
  font-size: 27px;
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media only screen and (min-width: 800px) {
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style-type: none;
  }
  li {
    padding: 0 15px;
  }
  .menuIcon {
    display: none;
  }

  .container {
    padding: 10px;

    z-index: 0;
    position: static;
  }
}
</style>
