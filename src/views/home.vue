<template>
  <div class="home-container">
    <div class="home-container1 bg-purple-400"></div>
    <h1 class="bg-teal-400">Heading</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Landing Page',
    meta: [
      {
        property: 'og:title',
        content: 'Landing Page',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-container1 {
  flex: 0 0 auto;
  width: 200px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 1600px) {
  .home-container {
    align-items: flex-end;
  }
}
</style>
