<template>

<div class="mainContainer">
  <div class="products">
      <div class="product">
        <div class="center">product 1</div>
        <img class="img" src="../img/step.jpg">
      </div>
      <div class="product">
        <div class="center">product 2</div>
        <img class="img" src="../img/logo.png">
      </div>
      <div class="product">
        <div class="center">product 3</div>
      </div>
      <div class="product">
        <div class="center">product 4</div>
      </div>
      <div class="product">
        <div class="center">product 5</div>
      </div>
      <div class="product">
        <div class="center">product 6</div>
      </div>
      <div class="product">
        <div class="center">product 7</div>
      </div>
      <div class="product">
        <div class="center">product 8</div>
      </div>
      <div class="product">
        <div class="center">product 9</div>
      </div>
      <div class="product">
        <div class="center">product 10</div>
      </div><div class="product">
        <div class="center">product 11</div>
        <img class="img" src="../img/step.jpg">
      </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

h1 {
  text-align: center;
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
    @media (max-width :640px): {
      width: '100%'
    }
  }

  .products {
    justify-items: center;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }

.product {
  border: solid;
  border-width: 2px;
  flex:1;
  justify-items: center;
  margin: 30px;
  margin-bottom: 50px;
  max-width: 200px;
  max-height: 200px;
  min-width: 200px;
  min-height: 200px;
  @media (max-width: 1100px): {
            width: 100%;
            height: 300px;
            margin: 0px 0px 30px 0px;
        }
}

.img {
  width: 180px;
  height: 180px;
  margin-left: 10px;
  margin-right: auto;
}

.center {
  text-align: center;
  border-bottom: solid;
  border-width: 2px;
}
</style>
