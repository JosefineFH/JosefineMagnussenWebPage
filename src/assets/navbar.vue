<template>
  <nav>
    <img
      class="menuIcon"
      src="../assets/images/menu.png"
      alt="Menu"
      v-on:click="available = !available"
    />

    <div  v-bind:class="compClasses">
      <div class="container">
        <ul>
        <li>
          <router-link class="link" to="/">
          <span>Home</span>
        </router-link>
        </li>
        <li>
          <router-link class="link" to="/About">
          <span>About</span>
        </router-link>
        </li>
        <li>
                <router-link class="link" to="/Projects">
          <span>Projects</span>
        </router-link>
        </li>
        <li>
        <span>
        <a
          class="link"
          href="mailto:josefine.magnussen@hotmail.com"
          target="_top"
          >Send mail</a>
        </span>
        </li>
        </ul>
      </div>
    </div>

  </nav>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      available: false,
    };
  },

  computed: {
    compClasses: function (){
      return{
        available: this.available,
      }
    }
  },

  methods: {
    backToMain() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* nav{
  border: solid black 1px;
} */
.available ul{
  display: block;
  
}
.container a{
 color: black;
 text-decoration: none;
 font-size: 26px;
 
}
.menuIcon{
  width: 30px;
  margin: 30px 0px 0px 30px;
}

ul{
  padding-left: 30px;
  display: none;
  color: #fff;
  line-height: 45px;
}


/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (min-width: 400px) {
  /* nav{
    background-color: lightgreen;
  } */
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (min-width: 800px) {
  ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style-type: none;
  }
  li{ 
    padding: 0 15px;
  }
  .menuIcon{
    display: none;
  }
}

</style>