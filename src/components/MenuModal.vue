<template lang="pug">
  .container
    .modal-wrap
      ul.page-items
        .item-wrap
          nuxt-link(to="/garelly") top
          nuxt-link(to="/garelly/webmotions") web-motions
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
class MenuModal extends Vue {
  mounted () {
    this.updateRouteStore()
  }
  updateRouteStore () {
    const route = '/garelly/*'
    this.$store.commit('setCurrentRoute', route)
  }
}
export default MenuModal
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
    font-family: 'Cutive Mono';
    @media screen and (max-width: 1300px) {
      font-size: 4vw;
    }
    @media screen and (max-width: 768px) {
      font-size: 2.1rem;
    }
    @media screen and (max-height: 640px) {
      font-size: 1.7rem;
    }
    font-size: 3.4vw;
    line-height: 11.4vh;
    cursor: pointer;
    color: #fff;
    width: 100vw;
    display: flex;
  }

  // Safari用(他に該当箇所複数アリ)
  _::-webkit-full-page-media, _:future, :root a {
    font-family: 'CutiveMono';
  }
}
</style>
