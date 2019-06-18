<template lang="pug">
  .container
    .menu-wrap
      input.toggle(type="checkbox")
      .hamburger
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
  position: fixed; // sticky menuの実装
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
  background-color: red;
  position: absolute;
  width: 100vw;
  height: 64px;
}

.menu-wrap {
  .toggle {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
  }
  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
