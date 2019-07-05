<template lang="pug">
  .container
    .main
      background-motion.bg-motion(v-if="bgMotionShow")
      span.title did0es portfolio
      .content
        .item-wrap
          a(href="https://twitter.com/did0es")
            img.item(src="~/assets/images/twitter-square-brands.svg")
          a(href="https://github.com/shuta13")
            img.item(src="~/assets/images/github-square-brands.svg")
          a(href="https://www.facebook.com/profile.php?id=100028982675881")
            img.item(src="~/assets/images/facebook-square-brands.svg")
          .button-wrap
            .link-wrap(@click="updateRouteStore")(@mouseover="hoveredGarellyButton")(@mouseleave="leftGarellyButton")
              .link
              span.garelly GARELLY
      transition(name="animation")
        animation-modal.animation-modal(v-if="appear")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TweenMax, Linear, Power4 } from 'gsap'
import AnimationModal from '~/components/AnimationModal.vue'
import BackgroundMotion from '~/components/BackgroundMotion/BackgroundMotion.vue'

@Component({
  components: {
    AnimationModal,
    BackgroundMotion
  }
})
class Top extends Vue {
  appear = true;
  in = false;
  bgMotionShow = true;
  mounted() {
    this.bgMotion()
    TweenMax.to('.text', 0.4, {
      delay: 1,
      opacity: 0
    })
    TweenMax.to('.animation-modal', 1.4, {
      delay: 1.8,
      ease: Power4.easeOut,
      left: '100vw',
      opacity: 0
    })
    this.bgMotionShowMutate()
  }
  toDisappear() {
    this.appear = !this.appear
  }
  updateRouteStore() {
    const route = '/'
    this.$store.commit('setCurrentRoute', route)
    this.$router.push('/garelly')
  }
  bgMotion() {
    TweenMax.to('.bg-image', 0.4, {
      backgroundPosition: '-100vw 0vw',
      ease: Linear.easeNone,
      repeat: -1
    })
  }
  bgMotionShowMutate() {
    if (window.innerWidth < 1300) this.bgMotionShow = !this.bgMotionShow
  }
  hoveredGarellyButton() {
    if (window.innerWidth > 768) {
      TweenMax.to('.link', 0.6, {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 2,
        y: '2%',
        ease: Power4.easeOut
      })
      TweenMax.to('.garelly', 1, {
        color: 'rgb(40, 20, 60)',
        transform: 'matrix(1, 0, 0, 1, 0, 0)'
      })
    }
  }
  leftGarellyButton() {
    if (window.innerWidth > 768) {
      TweenMax.to('.link', 1, {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        y: '100%',
        ease: Power4.easeIn
      })
      TweenMax.to('.garelly', 1, {
        color: '#fff'
      })
    }
  }
}
export default Top
</script>

<style lang="scss">
.container {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
}

a {
  text-decoration: none;
}
</style>

<style lang="scss" scoped>
.container {
  position: absolute;
  background-color: #000;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url('~assets/images/bg.png') no-repeat 50% 50%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    object-fit: cover;
  }
}

// .bg-motion {
//   @media screen and (max-width: 1300px) {
//     display: none;
//   }
// }

.main {
  // background-color: #777;
  // position: relative;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
}

.title {
  // background-color: aquamarine;
  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media screen and (max-height: 640px) {
    font-size: 1.8rem;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: #fff;
  font-family: 'Cutive Mono';
  font-size: 4vw;
  height: 8vh;
  width: 42vw;
  margin-bottom: 2vh;
  z-index: 99;
}

.content {
  width: 80vw;
}

.link-wrap {
  overflow: hidden;
}

.item-wrap {
  $item-margin: 3vh;
  // background-color: #ccc;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  .item {
    // background-color: #000;
    @media screen and (max-width: 768px) {
      margin-left: $item-margin;
      margin-right: $item-margin;
      width: 2rem;
      height: 2rem;
    }
    margin-left: $item-margin;
    margin-right: $item-margin;
    width: 4vw;
    height: 8vh;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link-wrap {
    @media screen and (max-width: 768px) {
      background-color: #fff;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: $item-margin;
    margin-right: $item-margin;
    @media screen and (max-width: 1300px) {
      height: 2.4vw;
    }
    @media screen and (max-width: 768px) {
      min-width: 90px;
      height: 2.8vh;
    }
    @media screen and (max-height: 640px) {
      min-width: 80px;
      height: 3.4vh;
    }
    width: 8.7vw;
    height: 3.6vh;
  }

  .link {
    // background-color: blue;
    width: 100vw;
    height: 2.2vw;
    @media screen and (max-width: 1300px) {
      height: 2.6vw;
    }
    @media screen and (max-width: 768px) {
      height: 2.6vw;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
    // margin-left: $item-margin;
    // margin-right: $item-margin;
    // font-family: 'Cutive Mono';
    // color: #fff;
    // font-size: 2vw;
    @media screen and (max-width: 768px) {
      border-top-left-radius: 0.4px;
      border-top-right-radius: 0.4px;
    }
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    cursor: pointer;
    // border: solid 1px #ffffff;
    // @media screen and (max-width: 768px) {
    //   padding: 0.3vw 0.4vw;
    // }
    margin-top: 0.4vw;
    @media screen and (max-width: 768px) {
      background-color: rgba(255, 255, 255, 1);
      color: rgb(40, 20, 60);
    }
    background-color: rgba(255, 255, 255, 1);
    // padding: 0.2vw 0.4vw;
    transform: translate(0%, 100%);
  }
  .garelly {
    // background-color: red;
    position: absolute;
    font-family: 'Cutive Mono';
    @media screen and (max-width: 768px) {
      width: 18vw;
    }
    width: 10vw;
    @media screen and (max-width: 1300px) {
      height: 2.2vw;
    }
    @media screen and (max-width: 768px) {
      height: 1rem;
    }
    height: 2vw;
    @media screen and (max-width: 1300px) {
      font-size: 2vw;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 768px) {
      color: #000;
    }
    color: #fff;
    font-size: 2vw;
    @media screen and (max-width: 768px) {
      border-bottom: none;
    }
    border-bottom: solid 1px #ffffff;
    cursor: pointer;
  }
}

// loading時のbg等
.animation-modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  opacity: 1;
}

.animation-enter, .animation-leave-to {
  opacity: .4;
}

.content {
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
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
  // 文字の透過できない場合
  @media screen and (max-width: 768px) {
    color: rgb(255, 255, 255);
  }
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
  // background-image: url(http://localhost:3000/loading/work05-loading.png);
}

_::-webkit-full-page-media, _:future, :root .text {
  color: rgb(255, 255, 255);
}

// keyframes拳

@keyframes vertical {
  0% { transform:translateY(-2px); }
  100% { transform:translateY(  0px); }
}

@keyframes loadingVertical {
  0% { transform:translateY(-8px); }
  100% { transform:translateY(  8px); }
}

a, .link-wrap {
  animation: vertical 1.2s ease-in-out infinite alternate;
}

.text {
  animation: loadingVertical 1.4s ease-in-out infinite alternate;
}

a:nth-child(1) {
  animation-duration: 1.3s
}

a:nth-child(2) {
  animation-duration: 1.2s
}

a:nth-child(3) {
  animation-duration: 1.4s
}

.link-wrap::nth-child(4) {
  animation-duration: 1.1s
}
</style>
