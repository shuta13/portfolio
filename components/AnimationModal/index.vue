<template lang="pug">
  .container
    #canvas(ref="canvas")
      .text-wrap
        .text.bg-image LOADING...
</template>

<script>
/* eslint-disable */
import TweenMax from 'gsap'

export default {
  mounted() {
    this.bgMotion()
  },
  methods: {
    bgMotion() {
      TweenMax.to('.bg-image', .5, { 
        backgroundPosition: "-2247px 0px",
        //autoRound:false,
        ease: Linear.easeNone,
        repeat: -1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100vw;
  height: 100vh;
}

#canvas {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-wrap {
  background-color: #000;
  width: 100vw;
  height: 100vh;
}

.text {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Josefin Sans';
  font-size: 7vw;
  // 文字の透過
  // color: #fff;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.bg-image {
  width: 100vw;
  height: 100vh;
  background-image: url(http://localhost:3000/top/work05.png);
}
</style>
