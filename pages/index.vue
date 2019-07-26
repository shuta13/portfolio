<template lang="pug">
  .container
    .main
      background-motion.bg-motion(v-if="bgMotionShow")
      .main-content
        span.title did0es portfolio
        .description-wrap
          .description
            .rect
            .question Q. ここは何?
              p.answer > @did0esのポートフォリオサイトです
              p.answer > 以下のリンクから現在の活動を確認することが出来ます
          .description-en
            .rect
            .question Q. What is this site?
              p.answer > This site is made by @did0es as a portfolio
              p.answer > You can find @did0es's activity through the four links
        .sub-content
          .item-wrap
            .item
              a(href="https://twitter.com/did0es")(target="_blank")
                FontAwesomeIcon.icon(:icon="twitter")
            .item
              a(href="https://github.com/shuta13")(target="_blank")
                FontAwesomeIcon.icon(:icon="github")
            .item
              a(href="https://www.facebook.com/profile.php?id=100028982675881")(target="_blank")
                FontAwesomeIcon.icon(:icon="facebook")
            .button-wrap
              .link-wrap(@click="updateRouteStore")(@mouseover="hoveredGarellyButton")(@mouseleave="leftGarellyButton")
                .link
                span.garelly GARELLY
        transition(name="animation")
          animation-modal.animation-modal(v-if="appear")
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import {
  faTwitterSquare,
  faGithubSquare,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { TweenMax, Linear, Power4 } from 'gsap'
import AnimationModal from '~/components/AnimationModal.vue'
import BackgroundMotion from '~/components/BackgroundMotion/BackgroundMotion.vue'

@Component({
  components: {
    FontAwesomeIcon,
    AnimationModal,
    BackgroundMotion
  }
})
class Top extends Vue {
  @Provide()
  appear = true;
  in = false;
  bgMotionShow = true;
  twitter = faTwitterSquare;
  github = faGithubSquare;
  facebook = faFacebookSquare;
  sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

  async mounted () {
    this.bgMotion()
    this.textAnimation()
    this.bgMotionShowMutate()
    await this.sleep(1800)
    this.overText()
    await this.sleep(720)
    this.changeRectColor()
    await this.sleep(120)
    this.leftText()
  }
  toDisappear () {
    this.appear = !this.appear
  }
  updateRouteStore () {
    const route = '/'
    this.$store.commit('setCurrentRoute', route)
    this.$router.push({ path: '/garelly' })
    // const getRoute = this.$router.resolve({ path: '/garelly' })
    // window.open(getRoute.href, '_blank')
  }
  bgMotion () {
    TweenMax.to('.bg-image', 0.4, {
      backgroundPosition: '-104vw 0vw',
      ease: Linear.easeNone,
      repeat: -1
    })
  }
  textAnimation () {
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
  }
  bgMotionShowMutate () {
    if (window.innerWidth < 1300) { this.bgMotionShow = !this.bgMotionShow }
  }
  overText () {
    TweenMax.to('.rect', 0, {
      ease: Power4.easeInOut,
      transform: 'translate(-106%, 0)'
    })
    TweenMax.to('.rect', 0.8, {
      ease: Power4.easeInOut,
      transform: 'translate(-6%, 0)',
      martix: '(1, 0, 0, 1, 0, 0)'
    })
    TweenMax.to('.rect', 0.2, {
      backgroundColor: 'rgba(255, 255, 255, 1)'
    })
  }
  async changeRectColor () {
    for (let i = 0; i < 10; i++) {
      this.toBlack()
      await this.sleep(20)
      this.toWhite()
      await this.sleep(80)
    }
  }
  toBlack () {
    TweenMax.to('.rect', 0, {
      backgroundColor: 'rgba(0, 0, 0, 1)'
    })
  }
  toWhite () {
    TweenMax.to('.rect', 0, {
      backgroundColor: 'rgba(255, 255, 255, 0.4)'
    })
  }
  leftText () {
    TweenMax.to('.rect', 0.8, {
      ease: Power4.easeInOut,
      transform: 'translate(106%, 0)'
    })
    TweenMax.to(['.question', '.answer'], 0.8, {
      ease: Power4.easeInOut,
      color: 'rgba(255, 255, 255, 1)'
    })
  }
  hoveredGarellyButton () {
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
  leftGarellyButton () {
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

.main-content {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80vw;
}

.title {
  // background-color: aquamarine;
  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media screen and (max-height: 640px) {
    font-size: 1.8rem;
  }
  font-size: 4vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: #fff;
  font-family: 'Cutive Mono';
  height: 8vh;
  width: 42vw;
  z-index: 99;
}

.description-wrap {
  background-color: rgba(0, 0, 0, .4);
  display: flex;
  // flex-direction: row;
  // justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, .4);
  @media screen and (max-height: 640px) {
    height: 18vh;
  }
  height: 14vh;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
  width: 42vw;
  z-index: 99;
}

.rect {
  border-radius: 2px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  transform: translate(-106%, 0);
}
.description, .description-en {
  @media screen and (max-width: 768px) {
    width: 28vw;
    height: 12vw;
  }
  width: 20vw;
  height: 7vw;
  text-align: left;
  border-left: solid 1px #fff;
  padding-left: 0.4rem;
  overflow: hidden;
  position: absolute;
}

.description {
  font-family: 'Sawarabi Gothic';
  @media screen and (max-width: 768px) {
    margin-left: -18vw;
  }
  // margin-left: -10vw;
}

.description-en {
  font-family: 'Cutive Mono';
  @media screen and (max-width: 768px) {
    margin-left: 18vw;
  }
  margin-left: 20vw;
}

.question {
  @media screen and (max-width: 768px) {
    font-size: 2.1vw;
  }
  @media screen and (max-height: 640px) {
    font-size: .72rem;
  }
  font-size: 1.3vw;
}

.answer {
  @media screen and (max-width: 768px) {
    font-size: 1.4vw;
  }
  @media screen and (max-height: 640px) {
    font-size: 0.4rem;
  }
  font-size: 1vw;
}

.sub-content {
  display: flex;
  justify-content: center;
  align-items: center;
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
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: $item-margin;
      margin-right: $item-margin;
      // width: 2rem;
      // height: 2rem;
    }
    margin-left: $item-margin;
    margin-right: $item-margin;
    width: 4vw;
    height: 10vh;
    // transition: width .2s;
    // transition: height .2s;
  }
  .icon {
    @media screen and (max-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
    width: 4vw;
    height: 8vh;
    transition: width .2s;
    transition: height .2s;
    color: #fff;
    z-index: 99;
  }
  .icon:hover {
    width: 3.5vw;
    height: 7vh;
    @media screen and (max-width: 768px) {
      width: 1.8rem;
      height: 1.8rem;
    }
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
