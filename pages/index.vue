<template lang="pug">
  .container
      not-found
</template>

<script>
import NotFound from '~/components/NotFound'

export default {
  components: {
    NotFound
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 62.5%;
}
</style>
