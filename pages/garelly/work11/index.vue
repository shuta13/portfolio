<template lang="pug">
  .container
    .image-wrap
      .content
        .image(:style="{ 'background-image': 'url(/top/work11.png)' }")
        .bottom-wrap
          nuxt-link(to="/garelly").back top
</template>

<script>
export default {

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
  min-width: 100vw;
  height: 250vh;
  @media screen and (max-width: 768px) {
    height: vh;
  }
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
  color: rgb(0, 0, 0);
  font-family: 'CutiveMono';
  @media screen and (max-width: 768px) {
    top: 0;
  }
  font-size: 1.2rem;
}
</style>
