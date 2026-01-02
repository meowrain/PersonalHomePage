<template>
    <div
        class="video-card group relative bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-gray-800/40 rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-pink-200/20 hover:border-pink-400/50"
        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <!-- 鼠标跟随发光 -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :style="cardStyle">
        </div>

        <!-- 背景网格 -->
        <div class="absolute inset-0 opacity-5 pointer-events-none">
            <div class="w-full h-full" style="background-image: linear-gradient(rgba(244,114,182,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.15) 1px, transparent 1px); background-size: 20px 20px;"></div>
        </div>

        <!-- 扫描线效果 -->
        <div class="scanline absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition duration-700 pointer-events-none"></div>

        <!-- 发光边框层 -->
        <div class="absolute -inset-[1px] bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <!-- 二次元装饰 -->
        <div class="absolute top-2 right-2 text-lg opacity-0 group-hover:opacity-100 transition duration-300 animate-bounce pointer-events-none z-10">🎬</div>

        <!-- 视频容器 -->
        <div class="relative aspect-video z-10">
            <iframe :src="video.embedUrl" class="absolute inset-0 w-full h-full" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <!-- 视频信息 -->
        <div class="p-4 relative z-10">
            <div class="relative">
                <div class="absolute -inset-2 bg-pink-500/5 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div class="relative">
                    <h3 class="text-lg font-bold text-pink-200 mb-2 group-hover:text-pink-100 transition-colors">{{ video.title }}</h3>
                    <p class="text-pink-200/70 text-sm mb-4 group-hover:text-pink-200/80 transition-colors">{{ video.description }}</p>

                    <!-- 标签 -->
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tag in video.tags" :key="tag"
                            class="px-2 py-1 text-xs bg-pink-500/10 text-pink-200 rounded-full border border-pink-400/30 group-hover:border-pink-400/50 transition-colors">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 角落装饰 -->
        <div class="absolute top-0 left-0 w-1 h-1 border-t-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 z-10"></div>
        <div class="absolute top-0 right-0 w-1 h-1 border-t-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-75 z-10"></div>
        <div class="absolute bottom-0 left-0 w-1 h-1 border-b-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-75 z-10"></div>
        <div class="absolute bottom-0 right-0 w-1 h-1 border-b-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-100 z-10"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Video } from '@/types';

interface Props {
    video: Video;
}

defineProps<Props>();

const cardStyle = ref({});

const handleMouseMove = (event: MouseEvent) => {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    cardStyle.value = {
        background: `radial-gradient(400px circle at ${x}px ${y}px, rgba(236, 72, 153, 0.08), transparent 40%)`
    };
};

const handleMouseLeave = () => {
    cardStyle.value = {};
};
</script>

<style scoped>
.video-card {
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.1);
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.video-card:hover {
    box-shadow: 0 0 25px rgba(236, 72, 153, 0.2);
}

/* 扫描线动画 */
.scanline {
    background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(244, 114, 182, 0.1) 50%,
        transparent 100%
    );
    animation: scan 2s linear infinite;
}

@keyframes scan {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100%);
    }
}
</style>
