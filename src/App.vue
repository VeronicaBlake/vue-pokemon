<template>
  <h3>
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />eronica's Pokedex
  </h3>
  <HomePage />
</template>

<script>
import HomePage from "./pages/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  max-block-size: 40px;
}
</style>
