<template lang="pug">
  .container
    .main
      span.title garelly
    .menu-wrap
      input.toggle(type="checkbox")
      .hamburger
      .menu
        ul.page-items
          li top
          li hoge
          li foo
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  /* margin: 0 auto; */
  min-height: 100vh;
  display: flex;
  /* justify-content: center;
  align-items: center;
  text-align: center; */
  font-size: 62.5%;
  background-color: #ccc;
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
