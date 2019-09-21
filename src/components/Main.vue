<template>
  <div class="hello">
    <div class="grid-container">
      <div class="grid-item photo">
        <img class="image" src="../assets/images/Josefine Magnussen.jpg" alt="Josefine Magnussen">
      </div>
      <div class="grid-item text">
        <!-- <h1> Josefine Magnussen </h1> -->
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptate. Quaerat, autem aut amet temporibus et repellendus vel eos quis nemo officiis numquam magni dignissimos consectetur perspiciatis a voluptas cupiditate.</p>
      <!-- <a href=""> Mine Prosjekter</a>
      <br>
      <a href="#"> Om Josefine</a> -->
      </div>
      <div class="grid-item footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main"
};
</script>

<style scoped>
.grid-container{
  margin-top: 30px;
  display: grid;
  grid-gap: 10px; 

}

.image{
  padding-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  /* height: 500px; */
}

.photo{
  grid-column: 1;
  grid-row: 1;
}

.text{
  grid-column: 2;
  grid-row: 1;
  }
.footer{
  grid-column: 1 / span 2;
}
/* p{
  padding-right: 25%;
} */
p, h1{
  padding-top: 10%;
  padding-right: 25%;
}
</style>
