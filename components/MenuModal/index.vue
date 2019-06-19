<template lang="pug">
  .container
    .modal-wrap
      ul.page-items
        li top
        li generative
        li others
        li about
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
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.modal-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-items {
  position: absolute;
  // background-color: red;
  li {
    font-family: 'CutiveMono';
    font-size: 3vw;
    line-height: 8vh;
    cursor: pointer;
    color: #fff;
  }
}
</style>
