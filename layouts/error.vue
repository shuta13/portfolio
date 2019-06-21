<template lang="pug">
  .container
    not-found
</template>

<script>
import NotFound from '~/components/NotFound'

export default {
  components: {
    NotFound
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 62.5%;
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
