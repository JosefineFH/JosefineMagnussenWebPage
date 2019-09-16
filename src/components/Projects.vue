<template>
  <div class="container">
    <h1>Mine Prosjekter</h1>
    <section class="card">
      <img src="../assets/images/Blank Instagram Portraits.png" alt />
      <div>
        <h3>Girl Camp</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo numquam sit hic dolore quo autem quaerat non quis a placeat, facilis amet ullam debitis, modi adipisci ipsam aut harum!</p>
        <a href="#">Code On GitHub</a>
        <a href="#">Live Demo</a>
      </div>
    </section>

    <section class="card" data-aos="fade-right" data-aos-duration="1000" data-aos-offset= "400">
      <img src="../assets/images/Blank Instagram Portraits.png" alt />
      <div>
        <h3 >Andre Prosjekt</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo numquam sit hic dolore quo autem quaerat non quis a placeat, facilis amet ullam debitis, modi adipisci ipsam aut harum!</p>
        <a href="#">Code</a>
        <a href="#">Live Demo</a>
      </div>
    </section>

    <section class="card" data-aos="fade-left" data-aos-duration="1000" data-aos-offset= "400">
      <img src="../assets/images/Blank Instagram Portraits.png" alt />
      <div>
        <h3 >Tredje Prosjekt</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo numquam sit hic dolore quo autem quaerat non quis a placeat, facilis amet ullam debitis, modi adipisci ipsam aut harum!</p>
        <a href="#">Code</a>
        <a href="#">Live Demo</a>
      </div>
    </section>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  created() {
    AOS.init({

    });
  }
};
</script>
<style>
img{
    /* max-width: 1100px; */
    width: 100%;
}

a{
    color: #333;
    text-decoration: none;
}

.container {
    margin-top: 100px;
    max-width: 1100px;
    overflow: auto;
    padding-left: 20%
}

.main-header {
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rm;
}

.main-header h1 {
    font-size: 4rm;
    margin-bottom: 2rm;
    line-height: 1.2;
}

.main-header h1 span {
    color: #b50d10;
}

.main-header p {
    font-size: 2rm;
}

.card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    background: #f1f1f1;
    margin-bottom: 2rem;
}

.card h3 {
    margin-bottom: 2rem;
}

.card h3 span {
    color: #b50d10;
}

.card img {
    height: 400px;
}

.card > div {
    padding: 2rem;
}

.card:nth-child(even) img {
    order: 2;
}

.btn {
    display: inline-block;
    background: black;
    color: #fff;
    padding: 0.8rem 1.8rem;
    margin-top: 2rem;
    cursor: pointer;
}

.btn:hover {
opacity: 0.8;
}

@media(max-width: 700px) {
    .card {
        display: block;
    }
}
</style>