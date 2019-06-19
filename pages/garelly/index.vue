<template lang="pug">
  .container
    toggle-menu
    .content
      .image-wrap
        nuxt-link(to="/garelly/work01").image(:style="{ 'background-image': 'url(/top/work01.png)' }")
        nuxt-link(to="/garelly/work02").image(:style="{ 'background-image': 'url(/top/work02.png)' }")
        nuxt-link(to="/garelly/work03").image(:style="{ 'background-image': 'url(/top/work03.png)' }")
        nuxt-link(to="/garelly/work04").image(:style="{ 'background-image': 'url(/top/work04.png)' }")
        nuxt-link(to="/garelly/work05").image(:style="{ 'background-image': 'url(/top/work05.png)' }")
        nuxt-link(to="/garelly/work06").image(:style="{ 'background-image': 'url(/top/work06.png)' }")
        nuxt-link(to="/garelly/work07").image(:style="{ 'background-image': 'url(/top/work07.png)' }")
        nuxt-link(to="/garelly/work08").image(:style="{ 'background-image': 'url(/top/work08.png)' }")
        nuxt-link(to="/garelly/work09").image(:style="{ 'background-image': 'url(/top/work09.png)' }")
        nuxt-link(to="/garelly/work10").image(:style="{ 'background-image': 'url(/top/work10.jpg)' }")
        nuxt-link(to="/garelly/work11").image(:style="{ 'background-image': 'url(/top/work11-thumnail.png)' }")
        nuxt-link(to="/garelly/work12").image(:style="{ 'background-image': 'url(/top/work12.jpg)' }")
</template>

<script>
import ToggleMenu from '~/components/ToggleMenu'

export default {
  components: {
    ToggleMenu
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
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
  justify-content: center;
  // align-items: center; // 消すと一番上から始まる
  flex-wrap: wrap;
  // background-color: blue;
  // widthを調整(@mediaで)
  // 見切れた部分はロールして見れるように
  // flex-wrapでよさそう
  // 眠い
}

.image {
  background-position: center center;
  // min-width: 360px;
  // min-height: 240px;
  width: 32vw;
  height: 24vw;
  @media screen and (max-width: 1300px) {
    background-position: center center;
    width: 48vw;
    height: 36vw;
  }
  @media screen and (max-width: 768px) {
    background-position: center center;
    width: 96vw;
    height: 72vw;
  }
  object-fit: cover;
  overflow: hidden;
  background: no-repeat;
}
</style>
