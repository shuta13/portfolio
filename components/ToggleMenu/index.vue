<template lang="pug">
  .container
    .menu-wrap
      //- input.toggle(type="checkbox")
      .hamburger
        .line
      .menu
        ul.page-items
          li top
          li graphics
          li generative
          li other
          li about
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  // margin: 0 auto;
  // min-height: 100vh; こいつonにするとページ全体に範囲が及ぶ
  font-size: 62.5%;
  // background-color: #000;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.title {
  position: absolute;
  width: 100vw;
  height: 64px;
}

.menu-wrap {
  position: fixed; // sticky menuの実装
  z-index: 1;
  .toggle {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
  }
  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    .line {
      position: relative;
      width: 100%;
      height: 2px;
      background-color: rgb(0, 0, 0);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .line:before,
    .line:after {
      content: '';
      position: absolute;
      z-index: 1;
      top: -10px;
      width: 100%;
      height: 2px;
      background-color: inherit
    }
    .line:after {
      top: 10px;
    }
  }
}
</style>
