<template lang="pug">
  .container
    #canvas(ref="canvas")
</template>

<script>
import * as THREE from 'three'

import vertexSource from './shader/vertex.glsl'
import fragmentSource from './shader/fragment.glsl'

export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      started: false,
      targetPercent: null,
      uniforms: {
        uTime: {
          value: null
        },
        uMouse: {
          value: null
        },
        uPercent: {
          value: null
        },
        uTex: {
          value: null
        }
      },
      mouseX: null,
      mouseY: null
    }
  },
  mounted() {
    this.init()
    this.configScene()
    this.positionCamera()
    this.loadTexture()
    this.bindWindowEvents()
    this.$refs.canvas.appendChild(this.renderer.domElement)
    this.$refs.canvas.addEventListener('mousemove', function (e) {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
    })
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
      this.targetPercent = 0.0
      const texture = new THREE.TextureLoader().load(process.env.bgImageUrl,
        (tex) => {
          // const w = 0.17
          // const h = tex.image.height / (tex.image.width / w)
          const geometry = new THREE.PlaneGeometry(100, 100)
          // 勝手にリサイズ止める
          texture.minFilter = THREE.LinearFilter
          // クロスオリジンのアレ
          texture.crossOrigin = 'anonymous'
          // 表示するだけ
          this.uniforms = {
            uTime: {
              value: 0.0
            },
            uMouse: {
              value: new THREE.Vector2(0.5, 0.5)
            },
            uPercent: {
              value: this.targetPercent
            },
            uTex: {
              value: texture
            }
          }
          const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexSource,
            fragmentShader: fragmentSource
          })
          // const material = new THREE.MeshBasicMaterial({ map: texture })
          const plane = new THREE.Mesh(geometry, material)
          // plane.scale.set(w, h, 1)
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
      this.uniforms.uTime.value += 0.0008
      if (this.targetPercent < 10.0 && this.targetPercent <= 0.0) this.targetPercent += 1.0
      else if (this.targetPercent >= 10.0) this.targetPercent -= 0.5
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

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
