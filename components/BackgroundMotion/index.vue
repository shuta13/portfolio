<template lang="pug">
  .container
    #pixiview(ref="pixiview")
</template>

<script>
import PIXI from 'pixi.js'

export default {
  data() {
    return {
      width: undefined,
      height: undefined,
      stage: undefined,
      renderer: undefined
    }
  },
  mounted() {
    this.init()
    this.bindWindowEvents()
    this.$refs.pixiview.appendChild(this.renderer.view)
  },
  methods: {
    init() {
      this.stage = new PIXI.Stage(0x000000)
      this.renderer = PIXI.autoDetectRenderer(200, 200)
    },
    bindWindowEvents() {
      window.addEventListener('resize', this.handleWindowResize, false)
    },
    handleWindowResize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
