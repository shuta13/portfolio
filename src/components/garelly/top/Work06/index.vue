<template lang="pug">
  .container
    .image-wrap
      .content(@click="updateWork06State")
        v-lazy-image.image(src="https://did0es.netlify.com/top/work06.png")
        //- .bottom-wrap
        //-   .back(@click="updateWork06State") back
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
    updateWork06State () {
      this.$store.commit('updateWork06State', false)
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
  background-color: rgba(0, 0, 0, .5);
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
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.back {
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-family: 'Cutive Mono';
  font-size: 1.2rem;
}
</style>
