<template lang="pug">
  .container
    after-moving-blind.moving-blind(v-if="routeFlag")
    toggle-menu
    .content
      transition(name="works-modal")
        work01.work(v-if="$store.state.work01State")
      transition(name="works-modal")
        work02.work(v-if="$store.state.work02State")
      transition(name="works-modal")
        work03.work(v-if="$store.state.work03State")
      transition(name="works-modal")
        work04.work(v-if="$store.state.work04State")
      transition(name="works-modal")
        work05.work(v-if="$store.state.work05State")
      transition(name="works-modal")
        work06.work(v-if="$store.state.work06State")
      transition(name="works-modal")
        work07.work(v-if="$store.state.work07State")
      transition(name="works-modal")
        work08.work(v-if="$store.state.work08State")
      transition(name="works-modal")
        work09.work(v-if="$store.state.work09State")
      transition(name="works-modal")
        work10.work(v-if="$store.state.work10State")
      transition(name="works-modal")
        work11.work(v-if="$store.state.work11State")
      transition(name="works-modal")
        work12.work(v-if="$store.state.work12State")
      transition(name="works-modal")
        work13.work(v-if="$store.state.work13State")
      transition(name="works-modal")
        work14.work(v-if="$store.state.work14State")
      transition(name="works-modal")
        work15.work(v-if="$store.state.work15State")
      transition(name="works-modal")
        work16.work(v-if="$store.state.work16State")
      .image-wrap
        .image(:style="{ 'background-image': 'url(/top/thumnails/work01.jpg)' }").centering(@click="updateWork01State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work02.jpg)' }").centering(@click="updateWork02State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work03.jpg)' }").centering(@click="updateWork03State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work04.jpg)' }").centering(@click="updateWork04State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work05.jpg)' }").centering(@click="updateWork05State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work06.jpg)' }").centering(@click="updateWork06State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work07.jpg)' }").centering(@click="updateWork07State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work08.jpg)' }").centering(@click="updateWork08State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work09.jpg)' }").centering(@click="updateWork09State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work10.jpg)' }").centering(@click="updateWork10State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work11-thumbnail.jpg)' }")(@click="updateWork11State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work12.jpg)' }").centering(@click="updateWork12State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work13.jpg)' }").centering(@click="updateWork13State")
        .image(:style="{ 'background-image': 'url(/top/thumnails/work14.jpg)' }").centering(@click="updateWork14State").onlyPC
        .image(:style="{ 'background-image': 'url(/top/thumnails/work15.jpg)' }").centering(@click="updateWork15State").onlyPC
        .image(:style="{ 'background-image': 'url(/top/thumnails/work16.jpg)' }").centering(@click="updateWork16State").onlyPC
</template>

<script>
/* eslint-disable */
import { TweenMax, Power4 } from 'gsap'
import AfterMovingBlind from '~/components/AfterMovingBlind'
import BlindModal from '~/components/BlindModal'
// ts仕様
import ToggleMenu from '~/components/ToggleMenu.vue'
// コンテンツのコンポーネント群
import Work01 from '~/components/garelly/top/Work01'
import Work02 from '~/components/garelly/top/Work02'
import Work03 from '~/components/garelly/top/Work03'
import Work04 from '~/components/garelly/top/Work04'
import Work05 from '~/components/garelly/top/Work05'
import Work06 from '~/components/garelly/top/Work06'
import Work07 from '~/components/garelly/top/Work07'
import Work08 from '~/components/garelly/top/Work08'
import Work09 from '~/components/garelly/top/Work09'
import Work10 from '~/components/garelly/top/Work10'
import Work11 from '~/components/garelly/top/Work11'
import Work12 from '~/components/garelly/top/Work12'
import Work13 from '~/components/garelly/top/Work13'
import Work14 from '~/components/garelly/top/Work14'
import Work15 from '~/components/garelly/top/Work15'
import Work16 from '~/components/garelly/top/Work16'

export default {
  data() {
    return {
      routeFlag: true
    }
  },
  components: {
    AfterMovingBlind,
    BlindModal,
    ToggleMenu,
    Work01,
    Work02,
    Work03,
    Work04,
    Work05,
    Work06,
    Work07,
    Work08,
    Work09,
    Work10,
    Work11,
    Work12,
    Work13,
    Work14,
    Work15,
    Work16
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
        delay: 1.6,
        left: '100vw',
        ease: Power4.easeOut
      })
      TweenMax.to('.moving-blind', 1 , {
        delay: 2.6,
        bottom: '100vh'
      })
    },
    updateWork01State() {
      this.$store.commit('updateWork01State', true)
    },
    updateWork02State() {
      this.$store.commit('updateWork02State', true)
    },
    updateWork03State() {
      this.$store.commit('updateWork03State', true)
    },
    updateWork04State() {
      this.$store.commit('updateWork04State', true)
    },
    updateWork05State() {
      this.$store.commit('updateWork05State', true)
    },
    updateWork06State() {
      this.$store.commit('updateWork06State', true)
    },
    updateWork07State() {
      this.$store.commit('updateWork07State', true)
    },
    updateWork08State() {
      this.$store.commit('updateWork08State', true)
    },
    updateWork09State() {
      this.$store.commit('updateWork09State', true)
    },
    updateWork10State() {
      this.$store.commit('updateWork10State', true)
    },
    updateWork11State() {
      this.$store.commit('updateWork11State', true)
    },
    updateWork12State() {
      this.$store.commit('updateWork12State', true)
    },
    updateWork13State() {
      this.$store.commit('updateWork13State', true)
    },
    updateWork14State() {
      this.$store.commit('updateWork14State', true)
    },
    updateWork15State() {
      this.$store.commit('updateWork15State', true)
    },
    updateWork16State() {
      this.$store.commit('updateWork16State', true)
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
  width: 100vw;
  // height: 100vh; // ずれる
  display: flex;
  justify-content: center;
  // align-items: center; // 上に合わせる
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

.moving-blind {
  position: fixed;
  z-index: 999;
}

.work {
  position: fixed;
}

.works-modal-enter-active, .works-modal-leave-active {
  transition: opacity .6s;
}

.works-modal-enter, .works-modal-leave-to {
  opacity: 0;
}

.onlyPC {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
