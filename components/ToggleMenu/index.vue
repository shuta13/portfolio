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

.main {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  background-color: red;
  position: absolute;
  color: #fff;
  font-family: 'CutiveMono';
  font-size: 4vw;
}

.menu-wrap {
  position: absolute;
  .page-items {
    background-color: aqua;
    color: #fff;
  }
}
</style>
