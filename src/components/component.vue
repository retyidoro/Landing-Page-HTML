<template>
  <div class="component-container" v-bind:class="rootClassName">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppComponent',
  props: {
    text: {
      type: String,
      default: 'Text',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.component-container {
  width: 372px;
  height: 184px;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: column;
}
.component-root-class-name {
  width: 0px;
}
@media(max-width: 479px) {
  .component-container {
    width: 320px;
    height: 1074px;
  }
}
</style>
