<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">

        <div class="modal-image">
          <slot name="image"> default content </slot>
        </div>
        <div class="modal-content">
          <div>
          <button @click.stop="emit('modal-close')">X</button>
        </div>
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import {onClickOutside} from '@vueuse/core'

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null)
onClickOutside(target, ()=>emit('modal-close'))

</script>


<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  display: flex;
  width: 800px;
  max-height: 80vh;
  margin: 150px auto;
  padding: 0 30px 0 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);

  & img {
    height: 100%;
  }

}

div {
  color: black;
}

</style>