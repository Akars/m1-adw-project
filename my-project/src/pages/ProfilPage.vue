<template>
  <div>
    <h1>Mon profil</h1>
    <div class="mainContainer">
      <div class="divProfil">
        <h2 class="secondTitle">Mes informations</h2>
        <table class="table">
          <tbody>
            <tr>
              <th class="th">Nom</th>
              <td class="td">Lin</td>
            </tr>
            <tr>
              <th class="th">Prénom</th>
              <td class="td">Amaury</td>
            </tr>
            <tr>
              <th class="th">Email</th>
              <td class="td">amaury.lin@efrei.net</td>
            </tr>
            <tr>
              <th class="th">Adresse</th>
              <td class="td">22 rue de la tourelle</td>
            </tr>
            <tr>
              <th class="th">Code postal</th>
              <td class="td">75000</td>
            </tr>
            <tr>
              <th class="th">Ville</th>
              <td class="td">Paris</td>
            </tr>
            <tr>
              <th class="th">Code département</th>
              <td class="td">75</td>
            </tr>
            <tr>
              <th class="th">Région</th>
              <td class="td">Ile-de-France</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: #4682b4;
  font-weight: bold;
}
.mainContainer {
  margin-top: 10vh;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  padding: 25px;
  min-height: calc(90vh - 50px);
  height: fit-content;
  justify-items: center;
  @media (max-width: 640px) {
    width: 100%;
  }
}

.secondTitle {
  margin: 0px 0px 20px 0px;
  text-align: center;
}
.divProfil {
  margin-top: 20px;
  background-color: white;
  padding: 20px 40px 20px 40px;
  box-shadow: 0 0 10px #999;
  @media (max-width: 640px) {
    padding: 20px 20px 20px 20px;
  }
}
.table {
  border: 1px solid #eee;
  border-collapse: collapse;
  width: auto;
  margin-bottom: 25px;
  display: block;
  overflow: auto;
}
.th {
  border: 1px solid #eee;
  border-collapse: collapse;
  background-color: #fafafa;
  padding: 5px 20px 5px 20px;
  white-space: nowrap;
}
.td {
  border: 1px solid #eee;
  border-collapse: collapse;
  padding: 5px 20px 5px 20px;
  width: 100%;
  min-width: 300px;
}
.text {
  float: left;
  line-height: 50px;
  @media (max-width: 960px) {
    float: none;
    line-height: 30px;
  }
}
</style>
