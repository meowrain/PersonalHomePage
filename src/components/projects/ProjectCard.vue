<template>
    <div
        class="project-card group relative bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-gray-800/40 rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-pink-200/20 hover:border-pink-400/50"
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
        <div class="absolute top-2 right-2 text-lg opacity-0 group-hover:opacity-100 transition duration-300 animate-bounce pointer-events-none z-10">🚀</div>

        <!-- 项目预览图 -->
        <div class="relative aspect-video z-10">
            <img :src="project.image" :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <!-- 悬浮时的放大图标 -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div class="relative">
                    <div class="absolute inset-0 bg-pink-500/30 rounded-full blur-lg"></div>
                    <svg class="relative w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                    </svg>
                </div>
            </div>
        </div>

        <!-- 项目信息 -->
        <div class="p-6 relative z-10">
            <div class="relative">
                <div class="absolute -inset-2 bg-pink-500/5 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div class="relative">
                    <!-- 项目类型标签 -->
                    <div class="flex items-center space-x-2 mb-4">
                        <div class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                        <span class="text-sm text-pink-200/70 group-hover:text-pink-200/80 transition-colors">{{ project.category }}</span>
                    </div>

                    <h2 class="text-xl font-bold text-pink-200 mb-3 group-hover:text-pink-100 transition-colors">{{ project.title }}</h2>
                    <p class="text-pink-200/70 text-sm mb-6 group-hover:text-pink-200/80 transition-colors">{{ project.description }}</p>

                    <!-- 技术标签 -->
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span v-for="tech in project.technologies" :key="tech"
                            class="px-2 py-1 text-xs bg-pink-500/10 text-pink-200 rounded-full border border-pink-400/30 group-hover:border-pink-400/50 transition-colors">
                            {{ tech }}
                        </span>
                    </div>

                    <!-- 项目链接 -->
                    <div class="flex space-x-4">
                        <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
                            class="flex-1 text-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 relative overflow-hidden group/btn">
                            <span class="relative z-10">在线预览</span>
                            <div class="absolute inset-0 bg-white/20 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                        </a>
                        <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank"
                            class="flex-1 text-center px-4 py-2 bg-gray-800 text-pink-200 rounded-lg border border-pink-400/30 hover:bg-gray-700 hover:border-pink-400/50 transition-all duration-200 transform hover:scale-105">
                            查看代码
                        </a>
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
import type { Project } from '@/types';

interface Props {
    project: Project;
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
.project-card {
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

.project-card:hover {
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
