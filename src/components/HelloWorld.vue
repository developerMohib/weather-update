<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <RouterLink to="/weather">GO TO WEATHER PAGE</RouterLink>
    <a target="_blank" href="https://www.google.com/search?q=todays+weather&oq=todays+we&gs_lcrp=EgZjaHJvbWUqEggBEAAYRhiAAhixAxjJAxiABDIGCAAQRRg5MhIIARAAGEYYgAIYsQMYyQMYgAQyCggCEAAYkgMYgAQyBwgDEAAYgAQyBwgEEAAYgAQyCQgFEAAYChiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDczMjZqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8&dlnr=1&ved=2ahUKEwjpkfi577GLAxUkUGcHHRHaN0cQl6ENegQIDRAE">VIEW WEATHER</a>
    <h1 class="green">{{ msg }}</h1>
    <h3>
      I&apos;ve successfully created a project with
      <mark rel="noopener">Vite</mark> and <mark rel="noopener">Vue</mark>.
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
