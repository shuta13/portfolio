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
        nuxt-link.link-wrap(to="/garelly")
          span.link GARELLY
      transition(name="animation")
        animation-modal.animation-modal(v-if="appear")
</template>

<script>
import { TweenMax, Power4 } from 'gsap'
import AnimationModal from '~/components/AnimationModal'

export default {
  components: {
    AnimationModal
  },
  data() {
    return {
      appear: true
    }
  },
  mounted() {
    setTimeout(() => {
      TweenMax.to('.animation-modal', 1, {
        ease: Power4.easeOut,
        bottom: '100vh'
      })
    }, 2000)
  },
  methods: {
    toDisappear() {
      this.appear = !this.appear
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
  }
}

@keyframes vertical {
  0% { transform:translateY(-4px); }
  100% { transform:translateY(  0px); }
}

a {
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

a::nth-child(4) {
  animation-duration: 1.1s
}

.animation-modal {
  z-index: 999;
}

.animation-enter, .blind-leave-to {
  opacity: .4;
}
</style>
