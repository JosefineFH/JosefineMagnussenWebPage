<template>
  <div class="grid-container">
    <div class="grid-item photo">
      <img class="image" src="../assets/images/Josefine Magnussen.jpg" alt="Josefine Magnussen" />
    </div>
    <div class="text">
      <h2>Hei</h2>
      <p>
        Jeg er Josefine.
        En IT-Utvikler fra Larvik, Norge.
        Jeg har jobbet med frontend og backend,
        altså jeg er en fullstacker.
      </p>
    </div>
    <div class="grid-item footer"></div>
  </div>
</template>
<style scoped>
* {
  /* border: solid 1px violet; */
}
.grid-container {
  margin-top: 30px;
  display: grid;
  grid-gap: 10px;
}
.image {
  padding-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
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
  grid-column: 1 / span 2;
}

p,
h1 {
  padding-top: 10%;
  padding-right: 25%;
}
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
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
}
</style>
