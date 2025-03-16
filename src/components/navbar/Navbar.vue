<script lang="ts">
export default {
  name: 'NavbarWeatherApp',
}
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/weather">Weather</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style scoped>
nav {
  padding: 10px;
  background: #42b983;
}
a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
</style>
