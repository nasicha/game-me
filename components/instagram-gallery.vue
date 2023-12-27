<template>
  <main>
    <div class="container">
    <div class="gallery">
        <InstagramGalleryItem v-for="(item, index) in galleryItems" :key="index" :item="item" />
    </div>
      <!-- End of gallery -->
      <div class="loader"></div>
    </div>
  <!-- End of container -->

  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useJsonLoader from '@/composables/jsonLoader'; // Adjust the path accordingly

const { gallery } = useJsonLoader(); // Adjust the path accordingly

const galleryItems = ref(gallery);
</script>

<style lang="scss" >
@use '../assets/scss/instagram-feed.scss';
</style>
