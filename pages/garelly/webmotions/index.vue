<template lang="pug">
  .container
    animation-modal.animation-modal(v-if="appear")
    blind-modal.blind
    toggle-menu
    .content
      .image-wrap
        nuxt-link(to="/garelly/webmotions/work03").image(:style="{ 'background-image': 'url(/webmotion/work03.png)' }").centering
        nuxt-link(to="/garelly/webmotions/work02").image(:style="{ 'background-image': 'url(/webmotion/work02.png)' }").centering
        nuxt-link(to="/garelly/webmotions/work01").image(:style="{ 'background-image': 'url(/webmotion/work01.png)' }").centering
</template>

<script>
import { TweenMax, Power4 } from 'gsap'
import AnimationModal from '~/components/AnimationModal'
import BlindModal from '~/components/BlindModal'
import ToggleMenu from '~/components/ToggleMenu'

export default {
  components: {
    AnimationModal,
    BlindModal,
    ToggleMenu
  },
  data() {
    return {
      appear: true
    }
  },
  mounted() {
    if (this.$store.state.webmotionsCount === 0) {
      this.appear = true
      this.$store.commit('incrementPageCount', 1)
    } else {
      this.appear = false
    }
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => {
        TweenMax.to('.animation-modal', 1, {
          ease: Power4.easeOut,
          left: '100vw'
        })
        this.$nuxt.$loading.finish()
      }, 6000)
    })
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
  }
  margin-top: 1.8vw;
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

.animation-modal {
  z-index: 999;
}
</style>
