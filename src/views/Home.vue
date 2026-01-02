<template>
    <div class="home-container">
        <!-- 视频背景横幅 -->
        <HeroSection />

        <!-- 内容区域 -->
        <div class="content-section bg-black px-6 py-12 md:py-16 relative overflow-hidden">
            <!-- 背景装饰光晕 -->
            <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <!-- 二次元装饰 - 飘浮的星星和爱心 -->
            <div class="floating-star absolute top-20 left-10 text-4xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 0s;">⭐</div>
            <div class="floating-star absolute top-40 right-20 text-3xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 1s;">✨</div>
            <div class="floating-star absolute bottom-40 left-20 text-3xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 2s;">💖</div>
            <div class="floating-star absolute top-60 left-1/3 text-2xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 0.5s;">⭐</div>
            <div class="floating-star absolute bottom-60 right-1/3 text-2xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 1.5s;">✨</div>
            <div class="floating-star absolute top-1/2 right-10 text-3xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 2.5s;">💫</div>
            <div class="floating-star absolute bottom-20 right-40 text-2xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 3s;">💖</div>

            <div class="max-w-7xl mx-auto relative z-10">
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

/* 飘浮星星动画 */
.floating-star {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(10deg);
    }
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
