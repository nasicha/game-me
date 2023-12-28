<template>
  <div class="container">
    <Widget></Widget>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Game Me · Enigma Eleganza Extravaganza',
  meta: [
    {name: 'description', content: 'I\'m different'},
    { property: 'og:title', content: 'Game Me · Enigma Eleganza Extravaganza' },
    { property: 'og:description', content: 'I\'m different' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://images.sociablekit.com/images/game_me_2024.jpg' }],
  
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