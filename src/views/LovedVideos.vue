<template>
    <div class="loved-videos-container p-4 md:p-8 relative overflow-hidden">
        <!-- 背景装饰光晕 -->
        <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <!-- 二次元装饰 - 飘浮的星星和爱心 -->
        <div class="floating-star absolute top-20 left-10 text-4xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 0s;">🎬</div>
        <div class="floating-star absolute top-40 right-20 text-3xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 1s;">✨</div>
        <div class="floating-star absolute bottom-40 left-20 text-3xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 2s;">💖</div>
        <div class="floating-star absolute top-60 left-1/3 text-2xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 0.5s;">🎥</div>
        <div class="floating-star absolute bottom-60 right-1/3 text-2xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 1.5s;">✨</div>
        <div class="floating-star absolute top-1/2 right-10 text-3xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 2.5s;">💫</div>
        <div class="floating-star absolute bottom-20 right-40 text-2xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 3s;">🎀</div>

        <div class="relative z-10">
            <!-- 页面标题 -->
            <PageHeader title="我喜欢的视频 🎬" subtitle="收藏了一些我觉得有趣的视频" />

            <!-- 视频网格 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <VideoCard v-for="video in VIDEOS" :key="video.id" :video="video" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/common/PageHeader.vue';
import VideoCard from '@/components/videos/VideoCard.vue';
import { VIDEOS } from '@/utils/videoData';
</script>

<style scoped>
.loved-videos-container {
    min-height: calc(100vh - 64px);
    /* 减去导航栏高度 */
    background-color: black;
}

.video-card {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 192, 203, 0.1);
}

/* 添加视频卡片的悬停效果 */
.video-card:hover {
    border-color: rgba(255, 192, 203, 0.3);
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

/* 确保 iframe 在移动设备上也能正常显示 */
@media (max-width: 640px) {
    .video-card {
        margin-bottom: 1.5rem;
    }
}
</style>
