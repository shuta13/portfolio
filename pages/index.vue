<template lang="pug">
  .container
    .main
      span.title did0es portfolio
      .item-wrap
        a(href="https://twitter.com/did0es")
          img.item(src="~/assets/images/twitter-square-brands.svg")
        a(href="https://github.com/shuta13")
          img.item(src="~/assets/images/github-square-brands.svg")
        a(href="https://www.facebook.com/profile.php?id=100028982675881")
          img.item(src="~/assets/images/facebook-square-brands.svg")
        .link-wrap(@click="updateRouteStore")
          span.link GARELLY
      transition(name="animation")
        //- animation-modal.animation-modal(v-if="appear")
        .animation-modal(v-if="appear")
          .content
            .text-wrap
              .text.bg-image(:style="{ 'background-image': 'url(http://localhost:3000/loading/work05-loading.jpg);' }") LOADING...
</template>

<script>
import { TweenMax, Linear, Power4 } from 'gsap'
// import AnimationModal from '~/components/AnimationModal'

export default {
  components: {
    // AnimationModal
  },
  data() {
    return {
      appear: true,
      in: false
    }
  },
  mounted() {
    this.bgMotion()
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => {
        TweenMax.to('.animation-modal', 1, {
          ease: Power4.easeOut,
          bottom: '100vh'
        })
        this.$nuxt.$loading.finish()
      }, 6000)
    })
  },
  methods: {
    toDisappear() {
      this.appear = !this.appear
    },
    updateRouteStore() {
      const route = '/'
      this.$store.commit('setCurrentRoute', route)
      this.$router.push('/garelly')
    },
    bgMotion() {
      TweenMax.to('.bg-image', 0.5, {
        backgroundPosition: '-2247px 0px',
        ease: Linear.easeNone,
        repeat: -1
      })
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

.container {
  font-size: 62.5%;
}

a {
  text-decoration: none;
}
</style>

<style lang="scss" scoped>
.container {
  background-color: #000;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url('~assets/images/bg.png') no-repeat 50% 50%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    object-fit: cover;
  }
}

.main {
  // background-color: #777;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 56vw;
}

.title {
  // background-color: aquamarine;
  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: #fff;
  font-family: 'CutiveMono';
  font-size: 4vw;
  height: 8vh;
  width: 42vw;
  margin-bottom: 2vh;
}

.item-wrap {
  $item-margin: 3vh;
  // background-color: #ccc;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  .item {
    // background-color: #000;
    @media screen and (max-width: 768px) {
      margin-left: $item-margin;
      margin-right: $item-margin;
      width: 2rem;
      height: 2rem;
    }
    margin-left: $item-margin;
    margin-right: $item-margin;
    width: 4vw;
    height: 8vh;
  }

  .link-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link {
    // background-color: red;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    margin-left: $item-margin;
    margin-right: $item-margin;
    font-family: 'CutiveMono';
    color: #fff;
    font-size: 2vw;
    cursor: pointer;
  }
}

// loading時のbg等
.animation-modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
}

.animation-enter, .blind-leave-to {
  opacity: .4;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-wrap {
  background-color: #000;
  width: 100vw;
  height: 100vh;
}

.text {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Josefin Sans';
  font-size: 7vw;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
  // 文字の透過
  color: rgb(255, 255, 255);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.bg-image {
  width: 100vw;
  height: 100vh;
  // background-image: url(http://localhost:3000/loading/work05-loading.png);
}

// keyframes拳

@keyframes vertical {
  0% { transform:translateY(-4px); }
  100% { transform:translateY(  0px); }
}

a, .link-wrap {
  animation: vertical 1.2s ease-in-out infinite alternate;
}

a:nth-child(1) {
  animation-duration: 1.3s
}

a:nth-child(2) {
  animation-duration: 1.2s
}

a:nth-child(3) {
  animation-duration: 1.4s
}

.link-wrap::nth-child(4) {
  animation-duration: 1.1s
}
</style>
