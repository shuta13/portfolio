<template lang="pug">
  .container
    .menu-wrap
      .hamburger(@click="clicked")
        .line
          transition(name="bars")
            .neighbors(v-if="!appear")
      transition(name="blind")
        .modal-wrap(@click="clicked")
          transition(name="blind")
            menu-modal.modal(v-if="appear")
      .menu
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuModal from '~/components/MenuModal.vue'

@Component({
  components: {
    MenuModal
  }
})
class ToggleMenu extends Vue {
  appear = false
  clicked() {
    this.appear = !this.appear
  }
}
export default ToggleMenu
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  // min-height: 100vh; こいつonにするとページ全体に範囲が及ぶ
  font-size: 62.5%;
  // background-color: #000;
}

.title {
  position: absolute;
  width: 100vw;
  height: 64px;
}

.menu-wrap {
  position: fixed; // sticky menuの実装
  // z-index: 1;
  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    cursor: pointer;
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
    .neighbors {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: rgb(0, 0, 0);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .neighbors:before,
    .neighbors:after {
      content: '';
      position: absolute;
      // z-index: 1;
      top: -10px;
      width: 100%;
      height: 2px;
      background-color: inherit
    }
    .neighbors:after {
      top: 10px;
    }
    // .line:before,
    // .line:after {
    //   content: '';
    //   position: absolute;
    //   // z-index: 1;
    //   top: -10px;
    //   width: 100%;
    //   height: 2px;
    //   background-color: inherit
    // }
    // .line:after {
    //   top: 10px;
    // }
  }
}

// transitionタグに適用
.bars-enter-active, .bars-leave-active {
  transition: opacity .3s;
}
.bars-enter, .bars-leave-to {
  opacity: 0;
}

.blind-enter-active, .blind-leave-active {
  transition: opacity .4s;
}
.blind-enter, .blind-leave-to {
  opacity: 0;
}

</style>
