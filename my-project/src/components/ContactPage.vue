<template>
  <div>
    <h1>Contact</h1>
    <div class="mainContainer">
      <h2>
        Vous pouvez nous retrouver dans nos magasins partenaires tel que LDLC
      </h2>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.687595074286!2d2.2832914156738977!3d48.84509737928615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6700fb3d6f22f%3A0x6f2f38b4ad260538!2sLDLC%20Paris!5e0!3m2!1sen!2sfr!4v1635163802487!5m2!1sen!2sfr"
          width="500"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div class="text">
          <div class="address">
            <h3>Adresse</h3>
            <p>
              Vous pouvez nous retrouver au 12-14 Rue de l'Église, 75015 Paris
            </p>
          </div>
          <div class="hello">
            <h3>Dites bonjour</h3>
            <p>
              Vous avez quelques questions ? Faites nous part à notre adresse
              mail !
            </p>
            <p type="email" class="mail">All-in-one@hotmail.fr</p>
          </div>
        </div>
      </div>
      <div class="network">
        <h2>
          Vous pouvez également nous rendre visite sur nos réseaux sociaux
        </h2>
        <div class="secondNetwork">
          <div class="">Facebook</div>
          <img src="../assets/fb.jpg" />
          <div>Instagram</div>
          <img src="../assets/insta.jpg" />
          <div>Whats'App</div>
          <img src="../assets/whatsapp.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.mainContainer {
  margin-top: 10vh;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  padding: 25px;
  height: 20px;
  flex-wrap: wrap;
  min-height: calc(90vh - 50px);
  height: fit-content;
  @media (max-width: 640px) : {
    width: "100%";
  }
}

h1 {
  text-align: center;
  color: #4682b4;
  font-weight: bold;
  flex-wrap: wrap;
}

.map {
  margin-top: 40px;
  flex-wrap: wrap;
  margin-bottom: 200px;
}

h2 {
  text-align: center;
}

h3 {
  font-family: "Andale Mono", monospace;
  color: #778899;
  font-weight: solid;
  text-decoration: underline;
}

.text {
  margin-top: -320px;
  margin-left: 530px;
  flex-wrap: wrap;
}

.mail {
  text-decoration: underline;
  color: blue;
  margin-top: -10px;
}

.address {
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.secondNetwork {
  justify-content: center;
  text-align: center;
  font-family: "Andale Mono", monospace;
  color: #778899;
}

img {
  max-width: 30px;
  max-height: 30px;
  margin-bottom: 20px;
}
</style>

