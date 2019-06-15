<template>
  <div class="container">
    <div>
      <not-found />
    </div>
  </div>
</template>

<script>
import NotFound from '~/components/NotFound'

export default {
  components: {
    NotFound
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
