<template>
    <div class="hero-section relative h-[70vh] overflow-hidden">
        <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
            <source src="../../assets/background.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>

        <!-- 主标题内容 -->
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-200 mb-6 tracking-tight">
                <span class="block">Welcome to</span>
                <span
                    class="block mt-2 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 text-transparent bg-clip-text">
                    MeowRain's Space
                </span>
            </h1>
            <p class="text-lg md:text-xl text-pink-200/70 max-w-2xl mx-auto leading-relaxed">
                探索技术的边界，分享编程的乐趣。这里是我的个人空间，记录着我的技术成长与生活点滴。
            </p>
        </div>

        <!-- 向下滚动指示器 -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg class="w-6 h-6 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3">
                </path>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
// Hero section component - 视频背景横幅
</script>

<style scoped>
.hero-section {
    background-color: black;
}
</style>
