<template lang="pug">
  .container
    .image-wrap
      .content
        .image(:style="{ 'background-image': 'url(/top/work08.png)' }")
        .bottom-wrap
          .back(@click="updateRouteStore") back
</template>

<script>
export default {
  methods: {
    updateRouteStore() {
      const route = '/work*'
      this.$store.commit('setCurrentRoute', route)
      this.$router.push('/garelly')
    }
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
  cursor: pointer;
  color: rgb(0, 0, 0);
  font-family: 'CutiveMono';
  @media screen and (max-width: 768px) {
    color: rgb(150, 120, 100);
  }
  font-size: 1.2rem;
}
</style>
