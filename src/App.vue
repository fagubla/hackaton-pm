<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <homeView />
  </div>
</template>

<script>
import homeView from "./components/homeView.vue";

export default {
  name: "App",
  components: {
    homeView,
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
</style>
