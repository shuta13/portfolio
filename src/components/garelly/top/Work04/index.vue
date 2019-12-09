<template lang="pug">
  .container
    .image-wrap
      .content(@click="updateWork04State")
        v-lazy-image.image(src="https://did0es.netlify.com/top/work04.png")
        //- .bottom-wrap
        //-   .back(@click="updateWork04State") back
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
    updateWork04State () {
      this.$store.commit('updateWork04State', false)
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
  align-items: center;
  flex-wrap: wrap;
}

.image {
  position: absolute;
  z-index: 1;
  min-width: 320px;
  width: 50vw;
  height: auto;
  object-fit: cover;
  // overflow: hidden;
  // background: no-repeat;
  // background-position: center center;
}

.bottom-wrap {
  z-index: 2;
  bottom: 0;
  position: fixed;
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
  color: #fff;
  font-family: 'Cutive Mono';
  @media screen and (max-width: 768px) {
    color: rgb(150, 120, 100);
  }
  font-size: 1.2rem;
}
</style>
