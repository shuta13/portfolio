<template lang="pug">
  .container
    animation-modal.animation-modal(v-if="appear")
    blind-modal.blind
    toggle-menu
    .content
      transition(name="webmotions-works-modal")
        webmotions-work01.work(v-if="$store.state.webmotionsWork01State")
      //- transition(name="webmotions-works-modal")
      //-   webmotions-work02.work(v-if="$store.state.webmotionsWork02State")
      transition(name="webmotions-works-modal")
        webmotions-work03.work(v-if="$store.state.webmotionsWork03State")
      transition(name="webmotions-works-modal")
        webmotions-work04.work(v-if="$store.state.webmotionsWork04State")
      .image-wrap
        .image(:style="{ 'background-image': 'url(/webmotion/thumbnails/work03.jpg)' }").centering(@click="updateWebmotionsWork01State")
        //- .image(:style="{ 'background-image': 'url(/webmotion/thumbnails/work02.jpg)' }").centering(@click="updateWebmotionsWork02State")
        .image(:style="{ 'background-image': 'url(/webmotion/thumbnails/work01.jpg)' }").centering(@click="updateWebmotionsWork03State")
        .image(:style="{ 'background-image': 'url(/webmotion/thumbnails/work04.jpg)' }").centering(@click="updateWebmotionsWork04State")
</template>

<script>
import { TweenMax, Power4 } from 'gsap'
import AnimationModal from '~/components/AnimationModal.vue'
import BlindModal from '~/components/BlindModal.vue'
// ts仕様
import ToggleMenu from '~/components/ToggleMenu.vue'
// コンテンツのコンポーネント群
import webmotionsWork01 from '~/components/garelly/webmotions/Work01'
// import webmotionsWork02 from '~/components/garelly/webmotions/Work02'
import webmotionsWork03 from '~/components/garelly/webmotions/Work03'
import webmotionsWork04 from '~/components/garelly/webmotions/Work04'

export default {
  components: {
    AnimationModal,
    BlindModal,
    ToggleMenu,
    webmotionsWork01,
    // webmotionsWork02,
    webmotionsWork03,
    webmotionsWork04
  },
  data () {
    return {
      appear: true
    }
  },
  mounted () {
    if (this.$store.state.webmotionsCount === 0) {
      this.appear = true
      this.$store.commit('incrementPageCount', 1)
    } else {
      this.appear = false
    }
    TweenMax.to('.animation-modal', 1, {
      delay: 1.8,
      ease: Power4.easeOut,
      left: '100vw'
    })
    TweenMax.to('.animation-modal', 1, {
      delay: 2.14,
      bottom: '100vh'
    })
  },
  methods: {
    updateWebmotionsWork01State () {
      this.$store.commit('updateWebmotionsWork01State', true)
    },
    updateWebmotionsWork02State () {
      this.$store.commit('updateWebmotionsWork02State', true)
    },
    updateWebmotionsWork03State () {
      this.$store.commit('updateWebmotionsWork03State', true)
    },
    updateWebmotionsWork04State () {
      this.$store.commit('updateWebmotionsWork04State', true)
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}

.container {
  margin: 0 auto;
}

.blind {
  z-index: 999;
}

.content {
  display: flex;
  justify-content: center;
  // align-items: center;
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
  cursor: pointer;
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
  overflow: hidden;
  z-index: 999;
}

.work {
  position: fixed;
}

.webmotions-works-modal-enter-active, .webmotions-works-modal-leave-active {
  transition: opacity .4s;
}
.webmotions-works-modal-enter, .webmotions-works-modal-leave-to {
  opacity: 0;
}
</style>
