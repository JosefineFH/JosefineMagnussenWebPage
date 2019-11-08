<template>
  <div class="main">
    <div class="item1">
      <h1>About Josefine</h1>
    </div>

    <div class="item2">
      <img class="profileImg" src="../assets/images/IMG_0846.jpg" alt="Josefine Magnussen" />
    </div>

    <div class="item3">
    <p>- Timeline</p>

    <p>If you want to contact me just send me a mail!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia cumque id voluptas pariatur minima eius est sequi. Eos adipisci ab, exercitationem possimus autem nostrum doloremque consequuntur minima fuga numquam!</p>

    </div>
    <div class="item4">
            <router-link class="projects" to="projects">
      <span>Se mine prosjekter</span>
    </router-link>
    </div>

  </div>
</template>
<style scoped>
.profileImg {
  width: 400px;
  margin-left: 100px;
}
.item1{
    grid-column: 2;
    grid-row: 1;
}
.item2{
    grid-column: 1;
    grid-row: 1;
}
.item3{
    grid-column: 1/ span 2;
    grid-row: 2;
}
.item4{
    grid-column: 1/ span 2;
    grid-row: 3;
}
.main {
    margin-top: 100px;
display: grid; 
grid-row-gap: 20px;
grid-template-columns: auto auto;
}
img {
  /* width: 70%;
  display: block;
  margin-left: 100px; */
  /* margin-right: auto; */
}
</style>
