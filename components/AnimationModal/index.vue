<template lang="pug">
  .container
    .content
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
        backgroundPosition: "-100vw 0vw",
        ease: Linear.easeNone,
        repeat: -1
      })
      TweenMax.to('.bg-image', .4, { 
        delay: 1,
        opacity: 0
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

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-wrap {
  background-color: #fff;
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
  // font-family: 'JosefinSansBoldItalic';
  font-size: 7vw;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
  // 文字の透過
  color: rgb(255, 255, 255);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

// Safari用
_::-webkit-full-page-media, _:future, :root .bg-image {
  font-family: 'JosefinSansBoldItalic';
}

.bg-image {
  width: 100vw;
  height: 100vh;
  background-image: url(http://localhost:3000/top/work05.png);
  @media screen and (max-width: 768px) {
    color: rgb(0, 0, 0);
  }
}

// Safari用
_::-webkit-full-page-media, _:future, :root .bg-image {
  color: rgb(0, 0, 0);
}

@keyframes loadingVertical {
  0% { transform:translateY(-8px); }
  100% { transform:translateY(  8px); }
}

.text {
  animation: loadingVertical 1.4s ease-in-out infinite alternate;
}
</style>
