<template lang="pug">
  .container
    after-moving-blind.moving-blind(v-if="routeFlag")
    blind-modal.blind
    toggle-menu
    .content
      .image-wrap
        nuxt-link(to="/garelly/work13").image(:style="{ 'background-image': 'url(/top/thumnails/work13.jpg)' }").centering
        nuxt-link(to="/garelly/work01").image(:style="{ 'background-image': 'url(/top/thumnails/work01.jpg)' }").centering
        nuxt-link(to="/garelly/work02").image(:style="{ 'background-image': 'url(/top/thumnails/work02.jpg)' }").centering
        nuxt-link(to="/garelly/work03").image(:style="{ 'background-image': 'url(/top/thumnails/work03.jpg)' }").centering
        nuxt-link(to="/garelly/work04").image(:style="{ 'background-image': 'url(/top/thumnails/work04.jpg)' }").centering
        nuxt-link(to="/garelly/work05").image(:style="{ 'background-image': 'url(/top/thumnails/work05.jpg)' }").centering
        nuxt-link(to="/garelly/work06").image(:style="{ 'background-image': 'url(/top/thumnails/work06.jpg)' }").centering
        nuxt-link(to="/garelly/work07").image(:style="{ 'background-image': 'url(/top/thumnails/work07.jpg)' }").centering
        nuxt-link(to="/garelly/work08").image(:style="{ 'background-image': 'url(/top/thumnails/work08.jpg)' }").centering
        nuxt-link(to="/garelly/work09").image(:style="{ 'background-image': 'url(/top/thumnails/work09.jpg)' }").centering
        nuxt-link(to="/garelly/work10").image(:style="{ 'background-image': 'url(/top/thumnails/work10.jpg)' }").centering
        nuxt-link(to="/garelly/work11").image(:style="{ 'background-image': 'url(/top/thumnails/work11-thumbnail.jpg)' }")
        nuxt-link(to="/garelly/work12").image(:style="{ 'background-image': 'url(/top/thumnails/work12.jpg)' }").centering
</template>

<script>
/* eslint-disable */
import { TweenMax, Power4 } from 'gsap'
import AfterMovingBlind from '~/components/AfterMovingBlind'
import BlindModal from '~/components/BlindModal'
import ToggleMenu from '~/components/ToggleMenu'

export default {
  data() {
    return {
      routeFlag: true
    }
  },
  components: {
    AfterMovingBlind,
    BlindModal,
    ToggleMenu
  },
  mounted() {
    this.moveBlind()
    if (this.$store.state.currentRoute == '/' || this.$store.state.garellyTopCount === 0) {
      this.routeFlag = true
      this.$store.commit('incrementTopPageCount', 1)
    } else {
      this.routeFlag = false
    }
  },
  methods: {
    moveBlind() {
      TweenMax.to('.moving-blind', 1.6, {
        delay: 2.8,
        left: '100vw',
        ease: Power4.easeOut
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}

.blind {
  z-index: 999;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrap {
  @media screen and (max-width: 768px) {
    margin-top: 2vw;
    margin-bottom: 2vw;
  }
  margin-top: 1.8vw;
  margin-bottom: 1.8vw;
  width: 96vw;
  // height: 96vh;
  display: flex;
  justify-content: space-between;
  // align-items: center; // 消すと一番上から始まる
  flex-wrap: wrap;
  // background-color: blue;
  // widthを調整(@mediaで)
  // 見切れた部分はロールして見れるように
  // flex-wrapでよさそう
  // 眠い
}

.image {
  // min-width: 360px;
  // min-height: 240px;
  width: 32vw;
  height: 24vw;
  @media screen and (max-width: 1300px) {
    width: 48vw;
    height: 36vw;
  }
  @media screen and (max-width: 768px) {
    width: 96vw;
    height: 72vw;
  }
  object-fit: cover;
  overflow: hidden;
  background: no-repeat;
}

.image-wrap:after {
  // 疑似要素生成
  content:"";
  display: block;
  width:32vw;
}

.centering {
  background-position: center;
}

.moving-blind {
  position: fixed;
  z-index: 999;
}
</style>
