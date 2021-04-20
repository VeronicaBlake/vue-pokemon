<template>
  <h3 class="text-center">
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
.logo {
  height: 1em;
}
</style>
