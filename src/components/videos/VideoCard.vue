<template>
    <div
        class="video-card bg-black/30 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-200/20 transition-all duration-300 transform hover:-translate-y-1">
        <!-- 视频容器 -->
        <div class="relative aspect-video">
            <iframe :src="video.embedUrl" class="absolute inset-0 w-full h-full" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <!-- 视频信息 -->
        <div class="p-4">
            <h3 class="text-lg font-bold text-pink-200 mb-2">{{ video.title }}</h3>
            <p class="text-pink-200/70 text-sm mb-4">{{ video.description }}</p>

            <!-- 标签 -->
            <div class="flex flex-wrap gap-2">
                <span v-for="tag in video.tags" :key="tag"
                    class="px-2 py-1 text-xs bg-pink-200/10 text-pink-200 rounded-full">
                    {{ tag }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Video } from '@/types';

interface Props {
    video: Video;
}

defineProps<Props>();
</script>

<style scoped>
.video-card {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 192, 203, 0.1);
}

.video-card:hover {
    border-color: rgba(255, 192, 203, 0.3);
}
</style>
