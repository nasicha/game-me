<template>
  <div class='sk-ww-instagram-feed-private' data-embed-id='247788'></div>
</template>
<script lang="ts" setup>

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
        myDiv.textContent = 'Iris Böhm • Meine Bewerbung als Social Media Manager in Form einer Instagram-Schnitzeljagd.'; // Replace with your desired text

        clearInterval(intervalIdProvileText);
      }
    }, 50);
})

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
  margin: 42vh;
}
</style>