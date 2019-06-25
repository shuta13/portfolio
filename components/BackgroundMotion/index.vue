<template lang="pug">
  .container
    #canvas(ref="canvas")
</template>

<script>
import * as THREE from 'three'

export default {
  data() {
    return {
      scene: undefined,
      camera: undefined,
      renderer: undefined,
      started: false
    }
  },
  mounted() {
    this.init()
    this.configScene()
    this.positionCamera()
    this.loadTexture()
    this.bindWindowEvents()
    this.$refs.canvas.appendChild(this.renderer.domElement)
    this.startScene()
  },
  methods: {
    init() {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      this.renderer.setClearColor(0xffffff, 1)
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
    configScene() {
      const light = new THREE.AmbientLight(0xffffff)
      this.scene.add(light)
    },
    positionCamera() {
      this.camera.position.set(0, 0, 10)
    },
    loadTexture() {
      const texture = new THREE.TextureLoader().load('http://localhost:3000/api/bg.png',
        (tex) => {
          const w = 0.17
          const h = tex.image.height / (tex.image.width / w)
          const geometry = new THREE.PlaneGeometry(100, 100)
          // 勝手にリサイズ止める
          texture.minFilter = THREE.LinearFilter
          // クロスオリジンのアレ
          texture.crossOrigin = 'anonymous'
          const material = new THREE.MeshBasicMaterial({ map: texture })
          const plane = new THREE.Mesh(geometry, material)
          plane.scale.set(w, h, 1)
          this.scene.add(plane)
        })
    },
    bindWindowEvents() {
      window.addEventListener('resize', this.handleWindowResize(), false)
    },
    handleWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
    },
    startScene() {
      if (this.started) return
      this.renderScene()
      this.started = !this.started
    },
    renderScene() {
      requestAnimationFrame(this.renderScene)
      this.renderer.render(this.scene, this.camera)
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#canvas {
  width: 100vw;
  height: 100vh;
}
</style>
