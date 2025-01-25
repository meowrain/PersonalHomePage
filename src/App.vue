<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="root" class="h-screen flex flex-col">
    <div id="app-container" class="flex-1 flex flex-col min-h-screen">
      <NavBar />
      <div class="content flex-1 p-5 sm:p-10 md:p-8 bg-black">
        <RouterView />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
/* 自定义 CSS 用于处理特定需求 */
#root {
  height: 100vh;
  /* 确保根元素占满整个视口 */
}

#app-container {
  min-height: 100vh;
  /* 确保容器占满整个视口 */
}
</style>