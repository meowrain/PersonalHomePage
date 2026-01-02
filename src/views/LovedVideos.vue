<template>
    <div class="loved-videos-container p-4 md:p-8">
        <!-- 页面标题 -->
        <PageHeader title="我喜欢的视频" subtitle="收藏了一些我觉得有趣的视频" />

        <!-- 视频网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoCard v-for="video in VIDEOS" :key="video.id" :video="video" />
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

/* 确保 iframe 在移动设备上也能正常显示 */
@media (max-width: 640px) {
    .video-card {
        margin-bottom: 1.5rem;
    }
}
</style>
