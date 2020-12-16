<template>
  <div>
    <section>
      <div class="container">
        <div></div>
        <div>
          <div class="imgContainer">
            <img src="../assets/images/2020-12-16-072821387.jpg" alt="" srcset="" />
          </div>
          <div class="textContainer">
            <h2>Josefine Holth</h2>
            <p>
              I 2018 startet jeg på GET Academy i Larvik på kurset Start It for og lære
              meg programmering. Der programmerte jeg mest HTML, CSS og Javascript.
            </p>
            <p>
              Fra August 2018 til Juni 2019 ble jeg tilbud et års studie på GET Academy.
              Der jobbet jeg med både PHP, C#, ASP .Net core, SQL (PostgreSQL, MySQL og
              SQL Server). Jeg har også jobbet litt med Bootstrap og Vuetify. Rammeverk er
              jeg mest vant til å bruke Vue.js.
            </p>
            <p>
              For det meste har jeg brukt PHP og ASP.Net core til å lage RESTapiet og
              bruke Vue.js som frontend rammeverk.
            </p>
            <p>
              Grunnen til at jeg liker IT-Utvikling er at det er spennende, nytenkende og
              ikke mins så lærer man seg noe nytt vær dag. Jeg har alltid vært nysgjerrig
              og interessert i tek. Men mest av alt så for jeg jobbe med noe jeg liker og
              brenner for.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
img {
  width: 90%;
}
.container {
  margin: 3% 10% 3% 10%;
  padding-top: 15%;
  display: grid;
}
.imgContainer {
  display: flex;
  justify-content: center;
}
.textContainer h2 {
  text-align: center;
  margin: 4rem 0 4rem 0;
  font-size: 2.2rem;
  font-family: "Nixie One", cursive;
  color: #1b5e36;
}
.textContainer > p {
  font-size: 16px;
}
.textContainer {
  margin-bottom: 8%;
}

@media only screen and (min-width: 400px) {
  .container {
    margin: 3% 10% 3% 10%;
  }
}
@media only screen and (min-width: 800px) {
  img {
    width: 100%;
  }
  .textContainer {
    margin-bottom: 8%;
  }
.textContainer > p {
  font-size: 20px;
}
  .container {
    padding-top: 10%;
    min-height: 300px;
    grid-template-columns: 20% 60% 20%;
        margin: 0 3% 0 3%;

  }
}
</style>
