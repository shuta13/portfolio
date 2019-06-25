<template lang="pug">
  .container(ref="canvas")#canvas
    div.main
      span.letters 404
      span.subletters01
        | This page
        br
        | maybe broken.
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
      // this.effectGlitch.goWild = true
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
* {
  margin: 0px;
  padding: 0px;
}
.container {
  background-color: #000;
  // position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  // background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  position: absolute;
}

.letters {
  // background-color: #888;
  color: #fff;
  font-family: 'Josefin Sans';
  font-size: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  margin-left: 2vw;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
}

// Safari用(他に該当箇所複数アリ)
_::-webkit-full-page-media, _:future, :root .letters {
  font-family: 'JosefinSansBoldItalic';
}

.subletters01 {
  // background-color: #ccc;
  text-align: left;
  color: #fff;
  font-family: 'Source Code Pro';
  font-size: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2vw;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-left: 4vw;
  }
}
</style>
