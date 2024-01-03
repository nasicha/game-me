<template>
  <div class='sk-ww-instagram-feed-private' data-embed-id='247788'></div>
  <div ref="passwordContainer" class="password-container">
    <p ref="instructions" v-if="feedLoaded">Um das Codewort einzugeben, entweder dem Kanal folgen oder gleich hier ausprobieren:</p>
    <div v-if="feedLoaded" class="input-container">
      <input v-model="enteredPassword" placeholder="Codewort eingeben" ref="myInput" />
      <button @click="checkPassword">></button>
    </div>
    <small v-if="wrongPassword" class="hint">{{'Leider falsch. Codewort in Großbuchstaben und ohne Leerzeichen schreiben, dann gibts Kuchen 🍰'}}</small>
  </div>
  <Transition name="modal">
    <Modal v-if="showModal" @close="showModal = false" />
  </Transition>
</template>
<script lang="ts" setup>
const showModal = ref(false);
const feedLoaded = ref(false);
const pwd = 'THECAKEISALIE';
const enteredPassword = ref('');
const wrongPassword = ref(false);
const passwordContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const intervalIdButton = setInterval(() => {
      const externalButton = document.querySelector('.sk-ig-load-more-posts');

      if (externalButton) {
        (externalButton as HTMLButtonElement).click();

        clearInterval(intervalIdButton);
      }
    }, 500);

    const intervalIdProvileText = setInterval(() => {
      const myDiv = document.querySelector('.sk-instagram-feed-private-bio-container');

      if (myDiv) {
        feedLoaded.value = true;
        myDiv.textContent = 'Iris Böhm • Meine Bewerbung als Social Media Manager in Form einer Instagram-Schnitzeljagd.';

        if (passwordContainer.value) {
          myDiv.insertAdjacentElement('afterend', passwordContainer.value);
        }

        clearInterval(intervalIdProvileText);
      }
    }, 50);
})

const checkPassword = () => {
  // Compare entered password with pwd
  if (enteredPassword.value === pwd) {
    showModal.value = true;
  } else {
    wrongPassword.value = true;
  }
};
</script>
<style lang="scss">
.sk {
  &-instagram-user-root-container {
    @media (min-width: 451px) {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      justify-content: center;
      align-items: center;
    }
  }

  
  &-ig-profile-info {
    color: black;
    
    @media (min-width: 480px) {
      max-width: 460px;
    }
  }
}

.loading-img {
  margin: 42vh 0;
}

.password-container {
  margin-top: .5rem;
}

.input-container {
	display: inline-flex;
	justify-content: space-between;
  margin-top: .5rem;


  & > input {
    border: 0;
    padding: 0.3rem;
    width: 100%;
    font-size: .9rem;
    transition: all .2s;
    border: 1px solid rgb(67, 91, 119);
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    
    &:focus {
      outline: none;
      border-color: rgb(52, 128, 220);
    }
  }

  & > button {
    border: 0;
    width: 30px;
    color: white;
    background-color: rgb(67, 91, 119);
    cursor: pointer;
    transition: all .2s;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    
    &:hover {
      background-color: rgb(52, 128, 220);
    }
  }

}


.hint {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
}
</style>