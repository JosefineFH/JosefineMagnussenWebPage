<template>
  <div class="grid-container">
    <div class="grid-item photo">
      <img class="image" src="../assets/images/IMG_0846.jpg" alt="Josefine Magnussen" />
    </div>
    <div class="text">
      <h2>Om Josefine</h2>
      <!-- <p>timeline</p> -->
      <p>
        I 2018 startet jeg på GET Academy i Larvik på kurset Start It for og lære meg programmering.
        Der programmerte jeg mest HTML, CSS og Javascript.
      </p>
      <p>
        Fra August 2018 til Juni 2019 ble jeg tilbud et års studie på GET Academy.
        Der jobbet jeg med både PHP, C#, ASP .Net core, SQL (PostgreSQL, MySQL og SQL Server).
        Jeg har også jobbet litt med Bootstrap og Vuetify.
        Rammeverk er jeg mest vant til å bruke Vue.js.
      </p>
      <p>
        For det meste har jeg brukt PHP og ASP.Net core til å lage RESTapiet og bruke
        Vue.js som frontend rammeverk.
      </p>
      <p>
        Grunnen til at jeg liker IT-Utvikling er at det er spennende, nytenkende og ikke mins så lærer man seg noe nytt vær dag.
        Jeg har alltid vært nysgjerrig og interessert i tek.
        Men mest av alt så for jeg jobbe med noe jeg liker og brenner for.
      </p>
      <a href="mailto:josefine.magnussen@hotmail.com" target="_top">Kontakt meg gjerne på mail.</a>
      <!-- <router-link class="link"  to="/projects"> Mine prosjekter</router-link> -->
    </div>
    <div class="grid-item footer"></div>
  </div>
</template>

<style scoped>
a{
  color: #402131;
  font-size: 20px;
}
a:hover{
  color: grey;
  font-size: 20px;
}
.grid-container {
  margin-top: 5%;
  display: grid;
  grid-gap: 10px;
}
.image {
  padding-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
.photo {
  grid-column: 1;
  grid-row: 1;
}
.text {
  grid-column: 2;
  grid-row: 1;
}
.footer {
  height: 50px;

  grid-column: 1 / span 2;
}
.link {
  text-align: center;
  border-radius: 5px;
  margin-right: 10%;
  font-size: 20px;
  width: 150px;
  padding: 10px;
  background: #402131;
  border: none;
  color: white;
  border: solid #402131 2px;
  text-decoration: none;
}
p {
  padding-right: 25%;
  line-height: 32px;
}
h2 {
  padding-top: 5%;
}
ul {
  list-style-type: none;
}
li {
  padding-top: 10px;
}
.vl {
  border-left: 2px solid #402131;
  height: 300px;
}

@media only screen and (max-width: 800px) {
  body {
    background-color: lightblue;
  }
  .grid-container {
    margin-top: 5%;
  }
  .text {
    grid-column: 1;
    grid-row: 2;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  .image {
    display: initial;
    margin: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  p {
    padding: 0;
  }
  .vl {
    border-left: 2px solid #402131;
    height: 600px;
  }
}
</style>
