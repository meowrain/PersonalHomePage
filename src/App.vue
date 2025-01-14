<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="root">
    <div id="app-container">
      <NavBar />
      <div class="content">
        <RouterView />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="css" scoped>
/* 确保根元素占满整个视口 */
#root {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 确保容器占满整个视口 */
#app-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* 确保内容不足时仍然占满视口 */
}

/* 内容区域自适应 */
.content {
  flex: 1;
  padding: 20px;
  /* 可以根据需要调整 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .content {
    padding: 10px;
    /* 在小屏幕上减少内边距 */
  }
}

@media (max-width: 480px) {
  .content {
    padding: 5px;
    /* 在更小的屏幕上进一步减少内边距 */
  }
}
</style>