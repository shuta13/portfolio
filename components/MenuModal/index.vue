<template lang="pug">
  .container
    .modal-wrap
      ul.page-items
        .item-wrap
          nuxt-link(to="/garelly") top
          nuxt-link(to="/garelly/webmotion") web-motions
          nuxt-link(to="/garelly/about") about
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

.modal-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  // background-color: red;
  list-style: none;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.page-items {
  position: absolute;
  // background-color: red;
  display: flex;
  justify-content: center;
  .item-wrap {
    @media screen and (max-width: 768px) {
      width: 50vw;
    }
    width: 20vw;
    justify-content: space-between;
  }
  a {
    margin-top: 1.4vh;
    text-decoration: none;
    font-family: 'CutiveMono';
    @media screen and (max-width: 1300px) {
      font-size: 2.0rem;
    }
    font-size: 3vw;
    line-height: 8vh;
    cursor: pointer;
    color: #fff;
    width: 100vw;
    display: flex;
  }
}
</style>
