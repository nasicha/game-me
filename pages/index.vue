<template>
  <div class="container">
    <Widget></Widget>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Game Me · Enigma Eleganza Extravaganza',
  meta: [{ name: 'description', content: 'I\'m different' }],
});
useSeoMeta({
  title: 'Game Me · Enigma Eleganza Extravaganza',
  ogTitle: 'Game Me · Enigma Eleganza Extravaganza',
  ogImage: 'https://images.sociablekit.com/images/game_me_2024.jpg',
  description: 'I\'m different',
  ogDescription: 'I\'m different',
});
</script>



<style lang="scss">

:root {
  font-size: 16px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin-block: 0;
  padding: 0;
}
.container {
  margin: 0 auto;
  max-width: 1280px;
}
</style>