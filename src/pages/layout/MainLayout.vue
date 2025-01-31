<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/weather">weather</RouterLink>
    </nav>
    <hr />
    <!-- Render the child routes here -->
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: "MainLayout",
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 15px;
}
</style>
