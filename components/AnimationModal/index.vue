<template lang="pug">
  .container
    .content-wrap
      #canvas(ref="canvas")
</template>

<script>
// import * as THREE from 'three'

export default {

}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100vw;
  height: 100vh;
}

.content-wrap {
  background-color: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
