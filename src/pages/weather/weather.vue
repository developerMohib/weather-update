
<template>
  <div>
    <h1>Weather Page</h1>
    <p>Check the current weather here!</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "WeatherPage",
};
</script>

<style scoped>
h1 {
  color: #ffa500;
}
</style>
