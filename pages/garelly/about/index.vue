<template lang="pug">
- var s = '\0'
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
              .text1 現在、学生をしつつ大阪のWeb系企業でインターンをしています
            .title Skill
            .text2 ・よく書く
            .text3-wrap
              .text3 #{s}#{s}>#{s}JavaScript,#{s}Vue.js/Nuxt.js,#{s}C/C++,#{s}Ruby
            .text2 ・つかう
            .text3-wrap
              .text3 #{s}#{s}>#{s}Docker,#{s}Git,#{s}PHP(Laravel),#{s}Rails,#{s}Three.js
        .other-wrap
          .other
            .items-activity 創造的活動#{s}#{s}>#{s}#{s}
              a(href="https://www.pixiv.net/member.php?id=19834475").link-pixiv Pixiv(絵を書きます),#{s}#{s}
              a(href="https://soundcloud.com/user-858183512").link-soundcloud Soundcloud(曲を作ります),#{s}#{s}
              a(href="https://did0es.me/garelly").link-garelly Garelly(CreativeなCodingしてます)
            .items-archive その他#{s}#{s}>#{s}#{s}
              .archive-wrap
                span.archive CyberAgent#{s}Architecture#{s}Challenge#{s}2019
                span.archive Cookpad#{s}Spring#{s}Internship#{s}2019#{s}#{s}等に参加
</template>

<script>
import TweenMax from 'gsap'
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
      TweenMax.to('.content-wrap', 1.4, {
        delay: 1.2,
        opacity: 1,
        top: '0vh'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  // background-color: rgb(255, 120, 120);
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
}

.menu {
  position: fixed;
  height: 2vw;
  width: 2vw;
  z-index: 9;
}

a {
  text-decoration: none;
}

.content-wrap {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 14vh;
  opacity: 0;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 769px) {
    align-items: center;
  }
  @media screen and (max-width: 768px) {
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
  font-family: 'ChogokubosoGothic', 'monospace';
  font-weight: 900;
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
  height: 30vh;
}

.title {
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  font-size: 2vw;
  line-height: 4vh;
  margin-bottom: 1.2vh;
}

.text {
  font-size: 1.2vw;
}

.text1 {
  // background-color: rgb(120, 100, 100);
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  margin-bottom: 1.4vh;
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

.text2 {
  // background-color: rgb(120, 255, 120);
  margin-bottom: 0.5vh;
  @media screen and (min-width: 768px) {
    font-size: 1.4vw;
  }
  @media screen and (max-width: 768px) {
    width: 60vw;
  }
  width: 40vw;
  display: flex;
  flex-wrap: wrap;
}

.text3 {
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  width: 100vw;
  font-size: 1.1vw;
}

.other-wrap {
  // background-color: rgb(120, 255, 120);
  margin-top: 2vh;
  width: 100vw;
  display: flex;
  justify-content: center;
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
    width: 70vw;
  }
  width: 70vw;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  font-size: 1.4vw;
}

.items-archive {
  @media screen and (max-width: 768px) {
    width: 70vw;
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
    width: 55vw;
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
  }
  font-size: 1vw;
}
</style>
