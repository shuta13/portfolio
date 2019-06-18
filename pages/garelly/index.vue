<template lang="pug">
  .container
    toggle-menu
    .whole-wrap
      .image-wrap
        .image(:style="{ 'background-image': 'url(/top/work01.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work02.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work03.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work03.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work01.png)' }")
        .image(:style="{ 'background-image': 'url(/top/work02.png)' }")
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

.whole-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrap {
  margin-top: 8vh;
  width: 96vw;
  // height: 96vh;
  display: flex;
  justify-content: center;
  // align-items: center; // 消すと一番上から始まる
  flex-wrap: wrap;
  background-color: blue;
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
