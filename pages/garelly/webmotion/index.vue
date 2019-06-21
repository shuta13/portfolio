<template lang="pug">
  .container
    blind-modal.blind
    toggle-menu
    .content
      .image-wrap
        nuxt-link(to="/garelly/webmotion/work01").image(:style="{ 'background-image': 'url(/webmotion/work01.gif)' }").centering
        nuxt-link(to="/garelly/webmotion/work02").image(:style="{ 'background-image': 'url(/webmotion/work02.gif)' }").centering
        nuxt-link(to="/garelly/webmotion/work03").image(:style="{ 'background-image': 'url(/webmotion/work03.gif)' }").centering
</template>

<script>
/* eslint-diable */
import BlindModal from '~/components/BlindModal'
import ToggleMenu from '~/components/ToggleMenu'

export default {
  components: {
    BlindModal,
    ToggleMenu
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
</style>
