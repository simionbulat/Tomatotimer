<template>
  <div>
    <tomato-timer />
  </div>
</template>

<script>
import TomatoTimer from "./components/TomatoTimer.vue";
export default {
  name: "App",
  components: {
    TomatoTimer,
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
}
</style>
