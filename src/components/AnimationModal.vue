<template lang="pug">
  .container
    .content
      .text-wrap
        .text.bg-image(:style="{ 'background-image': 'url(https://did0es.netlify.com/top/work05.png);' }") LOADING...
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { TweenMax, Linear } from 'gsap'

@Component
class AnimationModal extends Vue {
  mounted () {
    this.bgMotion()
  }
  bgMotion () {
    TweenMax.to('.bg-image', 0.5, {
      backgroundPosition: '-100vw 0vw',
      ease: Linear.easeNone,
      repeat: -1
    })
    TweenMax.to('.bg-image', 0.4, {
      delay: 1,
      opacity: 0
    })
  }
}
export default AnimationModal
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
  background-image: url(https://did0es.netlify.com/loading/work05.jpg);
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
