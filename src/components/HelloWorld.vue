<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <a href="https://www.google.com">GO TO WEATHER APP</a>
    <h1 class="green">{{ msg }}</h1>
    <h3>
      I&apos;ve successfully created a project with
      <mark rel="noopener">Vite</mark> and <mark rel="noopener">Vue 3</mark>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
.greetings a:visited {
  color: black;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
