<template>
  <div>
    <section>
      <div class="container">
        <div></div>
        <div class="content">
          <div>
            <img src="../assets/images/JosefineHolth.png" alt="" srcset="" />
          </div>
          <div class="text">
            <h1>Josefine Holth</h1>
            <h1>Web Developer</h1>
          </div>
        </div>
        <div></div>
      </div>

      <div class="sections">
        <h1>Hello World!</h1>
        <p>
          Jeg heter Josefine. Jeg er nettutvikler. Jeg bruker fritiden min på personlige prosjekter og lærer mer om PHP, Javascript, HTML og CSS.
        </p>
        <p>
          Jeg  liker også holde på med fotografering, tilbringe tid ut i naturen og selvfølgelig gaming.
        </p>
        <p>
          Hvis du har en idé om et nettsted eller ditt nåværende nettsted trenger en oppgradering så ta gjerne kontakt med meg så kan vi se hva vi kan få til. Eller hvis du vil snakke med meg om en jobb muligheter, kontakt meg gjerne.
        </p>
        <div class="center">
          <button @click="aboutMe()">Les Mere</button>
          <a href="mailto:YourMail@Mail.com">Kontakt Meg</a>
        </div>
      </div>
    </section>

    <section class="sectionsWithColor" style="background-color: #F7F7F5">
      <h1>Mine Skills</h1>
      <div class="skillContainer">
        <ul>
          <li>PHP</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git </li>
        </ul>
      </div>
</section>

    <section style="display:none;">
      <h1 class="prosject__h2">Prosjects</h1>
      <div>
        <div class="prosject__container">
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut saepe
              dolor laboriosam cum, placeat voluptatum fugiat itaque non
              expedita ipsa ducimus dicta! Doloremque repellat delectus odio
              ullam quidem perspiciatis sunt.
            </p>
          </div>
          <div>
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut saepe
              dolor laboriosam cum, placeat voluptatum fugiat itaque non
              expedita ipsa ducimus dicta! Doloremque repellat delectus odio
              ullam quidem perspiciatis sunt.
            </p>
          </div>
          <div>
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut saepe
              dolor laboriosam cum, placeat voluptatum fugiat itaque non
              expedita ipsa ducimus dicta! Doloremque repellat delectus odio
              ullam quidem perspiciatis sunt.
            </p>
          </div>
        </div>
      <div class="center">
        <button class="readMore">ReadMore</button>
      </div>
    </section>
  </div>
</template>
<script>
// import axios from "axios";

export default {
//   data() {
//     return {
//       projects: [],
//     };
//   },
  //  mounted () {
  //   axios
  //     .get('data.json')
  //     .then((response) => {
  //       this.projects = response.data
  //       console.log()
  //       })
  // },

  methods: {
    aboutMe () {
      this.$router.push('/about')
    }
  }
}
</script>
<style scoped>

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

h1 {
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  color: #1B5E36;
  text-transform: uppercase;
  text-align: center;
}
.container {

  padding-top: 15%;
  display: grid;
}

.skillContainer ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
}

.skillContainer li {
  padding: 2%;
}

.text {
  padding-top: 9%;
}

.text > h1 {
  font-family: "Modak", cursive;
  font-size: 10vw;
  line-height: 7vw;
  margin: 5px;
  text-align: center;
  font-weight: lighter;
  color: #1B5E36;
}

.sections {
  margin: 25% 10%;
  font-size: 1rem;
}

.sectionsWithColor {
  padding: 10% 10%;
  font-size: 1rem;
}

.center > button,
a {
  text-decoration: none;
  color: black;
  margin-top: 15%;
  font-size: 16px;
  padding: 15px 30px;
  border: none;
  border-radius: 33px;
  background: #ffffff;
  box-shadow: 14px 14px 19px #e6e6e6, -14px -14px 19px #ffffff;
}

.center > button:hover,
a:hover{
  font-weight: bold;
  color: #1B5E36;
}

.center {
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 30px 0px 30px 0px;
}

@media only screen and (max-width: 800px) {
.readMore {
  font-size: 16px;
  padding: 15px 32px;
  border: none;
  border-radius: 33px;
  background: #ffffff;
  box-shadow: 14px 14px 19px #e6e6e6, -14px -14px 19px #ffffff;
}
.readMore:hover {
  font-weight: bold;
}
.prosject__h2 {
  text-align: center;
  padding-top: 5%;
  color: #7b6950;
  }
}
@media only screen and (min-width: 400px) {
  img{
    width: 90%;
  }
  .sectionsWithColor ul{
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 10px;
  }
    .text > h1{
    padding: 5% 0 0 0;
        font-size: 10vw;
    line-height: 5vw;
  }

  .sections{
    margin: 20% 10%;
  }
}
@media only screen and (min-width: 800px) {
  h1{
    font-size: 2rem;
  }
  p{
    font-size: 1.2rem
  }
  .container {
    margin-bottom: 150px;
    min-height: 300px;
    width: 100%;
    grid-template-columns: 10% 80% 10%;
  }
  .content {
    display: grid;
    grid-template-columns: 60% 40%;
    column-gap: 10px;
  }
  .sections {
    margin: 10% 10%;
    font-size: 1rem;
  }
  .text {
    padding-top: 30%;
  }
  .text > h1 {
    font-size: 4vw;
    line-height: 3vw;
  }
  .aboutMe {
    margin: 15% 13%;
  }
  .skillContainer ul{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    column-gap: 10px;
    font-size: 1.5rem;
  }
  .skillContainer ul li {
    padding-top: 20px;
    list-style: none;
    flex: 0 0 33%;
  }
  .prosject__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "image"
      "content";
  }
  .grid-text {
    grid-area: content;
    color: #1B5E36;
    height: 300px;
    margin-bottom: 200px;
    padding-left: 60px;
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
    border-left: 2px solid #1B5E36;
    height: 300px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .prosject__container > div {
    padding: 7%;
  }
  .prosject__container > div > h3 {
    color: #7b6950;
  }
  .prosject__container > div > p {
    font-size: 18px;
    color: darkslategray;
  }
}
</style>
