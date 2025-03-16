<script lang="ts">
export default {
  name: 'AboutPage',
  data() {
    return {
      name: 'Apples',
      message: 'I like apples',
      clicks: 0,
    }
  },
  methods: {
    countClicks() {
      this.clicks++
    },
  },
}
</script>

<template>
  <div v-on:click="countClicks">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
    <p id="red">You have clicked me {{ clicks }} times.</p>
  </div>
</template>

<style>
#red {
  font-weight: bold;
  color: rgb(144, 12, 12);
}
</style>
