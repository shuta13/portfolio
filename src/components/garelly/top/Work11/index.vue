<template lang="pug">
  .container
    .image-wrap(@click="updateWork11State")
      .content
        .image-wrap
          v-lazy-image.image(src="https://did0es.me/top/work11.png")
        //- .bottom-wrap
        //-   .back(@click="updateWork11State") back
</template>

<script>
import TweenMax from 'gsap'

export default {
  mounted () {
    TweenMax.to('.image', 1, {
      opacity: 1
    })
  },
  methods: {
    updateWork11State () {
      this.$store.commit('updateWork11State', false)
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

.content {
  position: relative;
  // background-color: red;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.image-wrap {
  background-color: rgba(0, 0, 0, .2);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  position: absolute;
  z-index: 1;
  min-width: 320px;
  width: 40vw;
  height: auto;
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
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.back {
  cursor: pointer;
  color: rgb(0, 0, 0);
  font-family: 'Cutive Mono';
  @media screen and (max-width: 768px) {
    top: 0;
  }
  font-size: 1.2rem;
}
</style>
