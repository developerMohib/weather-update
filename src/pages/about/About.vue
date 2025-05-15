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
    <button class="appleClick">{{ name }}</button>
  </div>
  <p>{{ message }}</p>
  <p id="red">You have clicked me {{ clicks }} times.</p>

  <div>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptatum ipsa est, qui fuga
      animi eius aliquam rerum corporis, facilis eligendi exercitationem beatae dolorem eum expedita
      atque culpa sint voluptatibus deserunt blanditiis quia quibusdam.
    </p>
  </div>
</template>

<style scoped>
#red {
  font-weight: bold;
  color: rgb(144, 12, 12);
}
.appleClick {
  padding: 20px;
}
</style>
