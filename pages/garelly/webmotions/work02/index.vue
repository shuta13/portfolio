<template lang="pug">
  .container
    .image-wrap
      .content
        deep-sea
        .bottom-wrap
          nuxt-link(to="/garelly/webmotions").back back
</template>

<script>
import DeepSea from '~/components/DeepSea'

export default {
  components: {
    DeepSea
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}

a {
  text-decoration: none;
}

.image-wrap {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  position: relative;
  // background-color: red;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-wrap: wrap;
}

.image {
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
  background: no-repeat;
  background-position: center center;
}

.bottom-wrap {
  z-index: 2;
  bottom: 0;
  position: fixed;
  // background-color: red;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back {
  color: rgb(255, 255, 255);
  font-family: 'CutiveMono';
  font-size: 1.2rem;
}
</style>
