<template>
  <div class="gallery-item" :tabindex="0" @click="openModal">
    <NuxtImg
        v-if="item?.imageUrl"
        :src="item.imageUrl" 
        :alt="item.altText"
        :provider="item.provider"
        fit=""
      />
    <div v-if="item?.type" class="gallery-item-type">
      <span class="visually-hidden">{{ item.type }}</span>
      <i :class="item.typeClass" aria-hidden="true"></i>
    </div>
    <div class="gallery-item-info">
      <ul>
        <li class="gallery-item-likes">
          <span class="visually-hidden">Likes:</span>
        </li>
        <li class="gallery-item-comments">
          <span class="visually-hidden">Comments:</span>
        </li>
      </ul>
    </div>
    
  <ModalComponent v-if="item?.type === 'image'" :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal">
    <template #image>
      <NuxtImg
        v-if="item?.modalUrl"
        :src="item.modalUrl" 
        :alt="item.altText"
        :provider="item.provider"
      />
    </template>
    <template #content>image</template>
  </ModalComponent>
  <ModalComponent v-if="item?.type === 'gallery'" :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal">
    <template #image>
      <NuxtImg
        v-if="item?.modalUrl"
        :src="item.modalUrl" 
        :alt="item.altText"
        :provider="item.provider"
      />
    </template>
    <template #content>gallery</template>
  </ModalComponent>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  item: Object,
});

const isModalOpened = ref(false);

const openModal = () => {
  console.log("open modal");
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

const submitHandler = ()=>{
  //here you do whatever
}
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>