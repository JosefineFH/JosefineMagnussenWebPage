<template>
  <div class="container">
    <h1>Mine Prosjekter</h1>
    <section class="card">
      <img src="../assets/images/GirlCamp.png" alt />
      <div>
        <h3>Girl Camp</h3>
        <p>Frontend prosjekt der jeg i hovedsak kun har bruk rammeverket Vue.js.</p>
        <p>Webpage med responsive design.</p>
        <a
          class="links"
          href="https://github.com/JosefineFM/Portflio/tree/master/Vue/girlcamp"
        >Code på GitHub</a>
        <br />
        <a class="links" href="https://girlcamp01.firebaseapp.com/#/">Live Demo</a>
      </div>
    </section>

    <section class="card">
      <img src="../assets/images/vue-prod.png" style="width: 400px; padding-top: 15%;" />
      <div>
        <h3>Employee Manager</h3>
        <p>Webapplikasjon med responsive design</p>
        <p>HTML, CSS, JavaScript og Firebase som database</p>
        <p>
          <span style="font-weight: bold;">Test bruker email:</span>
          test@test.no
        </p>
        <p>
          <span style="font-weight: bold;">Test passord:</span>
          test123
        </p>
        <a
          class="links"
          href="https://github.com/JosefineFM/Portflio/tree/master/adminmanager"
        >Code på GitHub</a>
        <br />
        <a
          class="links"
          href="https://vue-prod-3615c.firebaseapp.com/#/login?redirect=%2F"
        >Live Demo</a>
      </div>
    </section>

    <section class="card">
      <!-- <img src="../assets/images/vue-prod.png" style="width: 400px; padding-top: 15%;" /> -->
      <div>
        <h3>Matvaretabellen</h3>
        <p>Dette jobber jeg med akkurat nå.</p>
        <p>
          <span style="font-weight: bold;">Frontend:</span>
          HTML, CSS og rammeverket Vue.js.
        </p>
        <p>
          <span style="font-weight: bold;">Backend:</span>
          Asp.Net Core og SQL Server.
        </p>
        <a
          class="links"
          href="https://github.com/JosefineFM/Portflio/tree/master/Food%20Tabel"
        >Code på GitHub</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.links {
  color: #402131;
  font-size: 20px;
  font-weight: bold;
}
.icons {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

a {
  color: #333;
  text-decoration: none;
}
a:hover {
  color: #b50d10;
  font-weight: bold;
}

.container {
  margin-top: 100px;
  max-width: 1100px;
  overflow: auto;
  margin: 5% 20% 0 20%;
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
  grid-template-columns: 1fr auto;
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
  padding: 20px;
  width: 200px;
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

@media (max-width: 700px) {
  .card {
    display: block;
  }
}
</style>