<template>
  <main class="grid-container">
    <div class="grid-item photo">
      <img class="image" src="../assets/images/Josefine Magnussen.jpg" alt="Josefine Magnussen" />
    </div>
    <div class="text">
      <h2>Hei</h2>
      <p>Mitt navn er Josefine.</p>
      <p>
        Jeg er en IT-Utvikler fra Larvik, Norge.
        For det meste bruker jeg tiden foran pc der jeg koder for det mest frontend men også en del backend.
        Jeg er altså en full-stack utvikler som er kreativ, nyskjerig og brenner for faget sitt.
      </p>
<div class="vl list">
      <ul style="float: left;">
        <h3>Frontend</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JSON</li>
        <li>Vue.js</li>
      </ul>

      <ul style="float: left;">
        <h3>Backend</h3>
        <li>C#</li>
        <li>ASP.Net core</li>
        <li>PHP</li>
        <li>API i php, asp og json</li>
        <li>SQL</li>
      </ul>
      </div>
    </div>
    <div class="grid-item footer"></div>
  </main>
</template>

<style scoped>
.grid-container {
  margin-top: 5%;
  display: grid;
  grid-gap: 10px;
    grid-template-columns: auto auto;

}
.image {
  padding: 15%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.photo {
  grid-column: 1;
  grid-row: 1;
}
.text {
  grid-column: 2;
  grid-row: 1;
  padding: auto;
}
.footer {
  height: 50px;
  grid-column: 1 / span 3;
}
p {
  line-height: 32px;
}
h2 {
  padding-top: 5%;
}
ul {
  list-style-type: none;
}
li{
  padding-top: 10px;
}
.vl{
  border-left: 2px solid #402131;
  height: 300px;
}

@media only screen and (max-width: 800px) {
  body {
    background-color: lightblue;
  }
  .grid-container{
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
  .vl{
  border-left: 2px solid #402131;
  height: 300px;
}
}
</style>
