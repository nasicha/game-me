<template>
  <div class="modal-mask" >
      <div class="modal-wrapper" @click="closeModal">
        <div class="modal-container"  @click.stop >
          <div class="modal-header">
            <h3>Codewort ist korrekt!</h3>
          </div>  
          <div class="modal-body">
            <p>Ja, gut. Der Test ist jetzt vorbei. Du hast gewonnen. Geh und klick auf den Kuchen. Für deinen Kuchen.</p>
          </div>
          <div class="modal-footer">
            <button class="modal-button" @click="handleButtonClick">
              Kuchen 🍰
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
const videoLink = 'https://www.youtube.com/watch?v=kmpyWk3p9GA';
const emit = defineEmits(['close'])

const handleButtonClick = () => {
  emit('close');
  window.open(videoLink, '_blank');
}

const closeModal = (event: MouseEvent) => {
  if ((event.target as HTMLElement).classList.contains('modal-wrapper')) {
    emit('close');
  }
};
</script>

<style lang="scss" scoped>
.modal {
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: all 0.3s ease-in-out;
  }

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &-container {
    width: 360px;
    max-width: 90vw;
    margin: 0px auto;
    padding: 1.25rem 1.75rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  &-header {
    margin-bottom: 1.25rem;
  }

  &-body {
    margin-bottom: 1.25rem;
    line-height: 1.25rem;
    text-wrap: pretty;
  }

  &-footer {
    text-align: right;
  }

  &-button {
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: rgb(67, 91, 119);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: rgb(52, 128, 220);
    }
  }
}
</style>