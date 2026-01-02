<template>
    <div class="home-container">
        <!-- 视频背景横幅 -->
        <HeroSection />

        <!-- 内容区域 -->
        <div class="content-section bg-black px-6 py-12 md:py-16">
            <div class="max-w-7xl mx-auto">
                <!-- 导航卡片 -->
                <NavigationCards :items="NAVIGATION_ITEMS" />

                <!-- 技能展示区域 -->
                <SkillsSection :skills="SKILLS" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue';
import NavigationCards from '@/components/home/NavigationCards.vue';
import SkillsSection from '@/components/home/SkillsSection.vue';
import { NAVIGATION_ITEMS, SKILLS } from '@/utils/constants';
</script>

<style scoped>
.home-container {
    background-color: black;
}

/* 确保视频覆盖整个区域 */
.hero-section video {
    object-fit: cover;
    filter: brightness(0.8);
}

/* 平滑滚动 */
html {
    scroll-behavior: smooth;
}

/* 优化动画性能 */
* {
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
}

/* 确保渐变动画平滑 */
.bg-gradient-to-r {
    background-size: 200% auto;
    animation: shine 8s linear infinite;
}

@keyframes shine {
    to {
        background-position: 200% center;
    }
}
</style>