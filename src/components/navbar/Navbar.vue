<script lang="ts">
export default {
  name: "NavbarWeather",
};
</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/weather">Weather View</RouterLink></li>
    </ul>
  </nav>
</template>


<style scoped>
nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  background-color: #f8f9fa;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  text-decoration: none;
  color: #007bff;
}

nav ul li a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
