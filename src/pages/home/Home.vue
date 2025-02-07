<template>
    <HelloWorld msg="Wellcome to my first vue app"/>
    <WelcomeItem />
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import WelcomeItem from '@/components/WelcomeItem.vue';

export default {
  name: 'HomePage',
  components: {
    HelloWorld,
    WelcomeItem,
  }
}
</script>
