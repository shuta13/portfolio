<template lang="pug">
  .container
    .moving-modal-wrap
      .moving-modal
        .text-wrap
          .welcome-text Welcome
        .text-wrap
          .welcome-text to
        .text-wrap
          .welcome-text Garelly
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0vw;
}

.moving-modal-wrap {
  position: absolute;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  @media screen and (min-width: 769px) {
    justify-content: center;
  }
  margin: 0;
  align-items: center;
  line-height: 10vh;
}

.text-wrap {
  // background-color: rgb(120, 120, 255);
  @media screen and (max-width: 767px) {
    margin-left: 27vw;
    margin-right: auto;
    width: 27vw;
  }
  // iPad用、あまりにも見た目がアレだったので
  @media screen and (width: 768px) {
    margin-left: 36vw;
    margin-right: auto;
    width: 27vw;
  }
  width: 20vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.welcome-text {
  position: absolute;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  font-size: 4vw;
}

// .curtain1, .curtain2, .curtain3 {
//   position: absolute;
//   background-color: rgb(120, 120, 255);
// }

// .curtain1, .curtain3 {
//   width: 21vw;
//   height: 8vw;
//   right: 17vw;
// }

// .curtain2 {
//   width: 6vw;
//   height: 5vw;
//   right: 48vw;
// }
</style>
