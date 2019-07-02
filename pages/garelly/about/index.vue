<template lang="pug">
  .container
    toggle-menu.menu
    .content-wrap
      .content
        .image-wrap
          img.image(src="~/assets/images/icon.jpg")
        .text-wrap
          .text
            .title About Me
            .text1-wrap
              .text1 1999年生まれ．クリエイティブ成分を好みます
              .text1 現在、学生をしつつ大阪のWeb系企業でアレコレ開発をしています
            .title Skill
            .text2 ・よく書く
            .text3-wrap
              span.text3  > JavaScript, Vue.js/Nuxt.js, C/C++, Ruby, Processing
            .text2 ・つかう
            .text3-wrap
              span.text3  > Docker, Git, Laravel, Rails, MySQL, Three.js, GLSL, Photoshop, Figma
            .text2 ・創造的活動
              a(href="https://www.pixiv.net/member.php?id=19834475").text3.link-pixiv  >> Pixiv(絵をかきます)
              a(href="https://soundcloud.com/user-858183512").text3.link-soundcloud  >> Soundcloud(おうたを作ります)
              a(href="https://did0es.me/garelly").text3.link-garelly  >> Garelly(CreativeなCoding)
            .text2 ・活動
              span.text3 CyberAgent Architecture Challenge (2019)
              span.text3 CyberAgent 学生版ヒダッカソン-API編- (2019)
              span.text3 Cookpad Spring Internship (2019)  等に参加
</template>

<script>
import { TweenMax, Power4 } from 'gsap'
import ToggleMenu from '~/components/ToggleMenu'

export default {
  components: {
    ToggleMenu
  },
  mounted() {
    this.$nextTick(() => {
      this.fadeInContent()
    })
  },
  methods: {
    fadeInContent() {
      TweenMax.to('.content-wrap', 1.6, {
        opacity: 1,
        ease: Power4.easeOut,
        top: '0vh'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  background-color: rgb(240, 240, 240);
  margin: 0 auto;
  width: 100vw;
  @media screen and (max-width: 768px) {
    height: auto;
  }
  height: 100vh;
}

.menu {
  position: fixed;
  height: 2vw;
  width: 2vw;
  z-index: 999;
}

a {
  text-decoration: none;
}

.content-wrap {
  position: absolute;
  width: 100vw;
  @media screen and (max-width: 768px) {
    height: auto;
  }
  height: auto;
  top: 10vh;
  opacity: 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 8vh;
  }
  @media screen and (min-width: 769px) {
    margin-top: 20vh;
  }
}

.content {
  // background-color: rgb(120, 120, 120);
  width: 60vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Sawarabi Gothic';
  color: rgba(40, 40, 40, .8)
}

.image-wrap {
  // background-color: rgb(120, 250, 120);
  @media screen and (max-width: 768px) {
    width: 40vw;
    height: 40vw;
  }
  width: 18vw;
  height: 18vw;
  min-width: 200px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 14vw;
  height: 14vw;
  min-width: 200px;
  min-height: 200px;
}

.text-wrap {
  // background-color: rgb(255, 120, 120);
  @media screen and (max-width: 768px) {
    width: 60vw;
    height: 28vh;
  }
  width: 40vw;
  height: 40vh;
}

.text {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.title {
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  font-size: 2vw;
  line-height: 6vh;
  @media screen and (max-width: 768px) {
    line-height: 5vh;
  }
}

.text1 {
  font-size: 1.2vw;
  // background-color: rgb(120, 100, 100);
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
}

.text2 {
  // background-color: rgb(120, 255, 120);
  @media screen and (min-width: 768px) {
    font-size: 1.4vw;
  }
  @media screen and (max-width: 768px) {
    width: 60vw;
    font-size: 1rem;
  }
  width: 40vw;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    line-height: 4vh;
  }
  line-height: 3.6vh;
}

.text3-wrap {
  // background-color: rgb(120, 120, 255);
  @media screen and (max-width: 768px) {
    width: 60vw;
  }
  width: 40vw;
  height: 3vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.text3 {
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  width: 60vw;
  font-size: 1.1vw;
  @media screen and (max-width: 768px) {
    line-height: 1.8vh;
  }
  // iPhone5世代以前のためのメディアクエリ
  @media screen and (max-height: 640px) {
    font-size: 0.4rem;
  }
}

.other-wrap {
  // background-color: rgb(120, 255, 120);
  margin-top: 2vh;
  width: 100vw;
  display: flex;
  justify-content: center;
}

.other {
  @media screen and (max-width: 768px) {
    margin-top: 6vh;
  }
}

.link-pixiv {
  color: rgb(2, 80, 250);
}

.link-soundcloud {
  color: rgb(240,69,3);
}

.link-garelly {
  color: rgb(40, 40, 40);
}

.items-activity {
  @media screen and (max-width: 768px) {
    width: 74vw;
  }
  width: 70vw;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  font-size: 1.4vw;
}

.items-archive {
  @media screen and (max-width: 768px) {
    // 小さくしすぎるとその他のアレが折れる
    width: 74vw;
  }
  width: 70vw;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  font-size: 1.4vw;
  display: flex;
  justify-content: space-between;
  margin-top: 1vh;
}

.archive-wrap {
  @media screen and (max-width: 769px) {
    width: 56vw;
  }
  width: 60vw;
}

.archive {
  top: 0;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    width: 0vw;
  }
  font-size: 1vw;
}
</style>
