<template lang="pug">
  .container(ref="canvas")#canvas
    div.main
      span.letters 404
      span.subletters01 This page maybe broken
</template>

<script>
/* eslint-disable */
import * as THREE from 'three'
import { EffectComposer, RenderPass, GlitchPass, MaskPass, ShaderPass, CopyShader, DigitalGlitch, BloomPass } from 'three-full'

export default {
  data() {
    return {
      data: undefined,
      scene: undefined,
      camera: undefined,
      object: undefined,
      renderer: undefined,
      composer: undefined,
      renderPass: undefined,
      glitchPass: undefined,
      customPass: undefined,
      effectGlitch: undefined,
      started: false
    }
  },
  mounted() {
    this.init()
    this.configScene()
    this.positionCamera()
    this.bindWindowEvents()
    this.$refs.canvas.appendChild(this.renderer.domElement)
    this.startScene()
  },
  methods: {
    // setup
    init() {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor(new THREE.Color(0x222222))
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.object = new THREE.Object3D()
      this.scene.add(this.object)
    },

    configScene() {
      // add spotlight and ambient light
      this.scene.fog = new THREE.Fog(0xffffff, 1, 1000)

      const spotLight = new THREE.DirectionalLight(0xffffff)
      spotLight.position.set(1, 1, 1)
      this.scene.add(spotLight)

      const ambientLight = new THREE.AmbientLight(0x222222)
      this.scene.add(ambientLight)
    },

    positionCamera() {
      // position the camera for the scene
      this.camera.position.z = 400
    },

    postProcessing() {
      this.composer = new EffectComposer(this.renderer)
      this.renderPass = new RenderPass(this.scene, this.camera)
      this.composer.addPass(this.renderPass)

      this.effectGlitch = new GlitchPass(10)
      this.effectGlitch.renderToScreen = true
      this.composer.addPass(this.effectGlitch)
    },

    startScene() {
      if (this.started) return

      this.postProcessing()

      this.renderScene()

      this.started = !this.started
    },

    renderScene() {
      window.RAF = requestAnimationFrame(this.renderScene)
      // this.volume = this.audio.volume
      this.object.rotation.y += 0.01
      this.object.rotation.z += 0.01
      this.composer.render()
    },

    bindWindowEvents() {
      // resize
      window.addEventListener('resize', this.handleWindowResize, false)
    },

    handleWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.composer.setSize(window.innerWidth, window.innerHeight)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  .main {
    // background-color: #fff;
    display: flex;
    flex-direction: row;
    position: absolute;
    height: 24vh;
    width: 32vw;
  }

  .letters {
    // background-color: #888;
    color: #fff;
    font-family: 'Josefin Sans';
    font-size: 8vw;
    margin-top: 7vh;
    margin-left: 1vw;
  }

  .subletters01 {
    // background-color: #ccc;
    text-align: left;
    color: #fff;
    font-family: 'Source Code Pro';
    font-size: 2vw;
    margin-top: 10vh;
    margin-left: 2vw;
  }
}
</style>
