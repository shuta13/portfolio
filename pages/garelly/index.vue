<template lang="pug">
  .container
    toggle-menu
    .content
      .image-wrap
        .image(:style="{ 'background-image': 'url(/top/work01.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work02.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work03.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work04.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work05.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work06.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work07.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work08.png)' }")
        nuxt-link(to="/404").image(:style="{ 'background-image': 'url(/top/work09.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work10.jpg)' }")
        .image(:style="{ 'background-image': 'url(/top/work11.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work12.jpg)' }")
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
  @media screen and (max-width: 768px) {
    width: 96vw;
    height: 72vw;
  }
  object-fit: cover;
  overflow: hidden;
}
</style>
