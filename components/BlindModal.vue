<template lang="pug">
  .container
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
class BlindModal extends Vue {
}
export default BlindModal
</script>

<style lang="scss" scoped>
.container {
  display: none;
  background-color: rgb(255, 120, 120);
  position: absolute;
  width: 100vw;
  height: 100vh;
}
</style>
