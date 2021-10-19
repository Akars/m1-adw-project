<template>
    <div class="app">
      <Header/>
      <router-view :key ="$route.path"/>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>
#app {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #EBF5FB;
}

.app {
  align-content: center;
}
</style>
