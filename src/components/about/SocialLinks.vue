<template>
    <div class="mb-12">
        <!-- 标题 -->
        <div class="relative mb-8">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
            <div class="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl animate-ping opacity-50">💖</div>
            <div class="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl animate-ping opacity-50" style="animation-delay: 1s;">✨</div>
            <h2 class="relative text-2xl font-bold text-pink-200 text-center tracking-wider">
                <span class="inline-block px-4">社交链接 🌐</span>
            </h2>
        </div>

        <!-- 社交链接卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a v-for="(link, index) in links" :key="link.name"
                :href="link.url" target="_blank"
                class="group relative block"
                :style="{ animationDelay: `${index * 0.15}s` }"
            >
                <!-- 发光边框层 -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-pink-500/40 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

                <!-- 扫描效果 -->
                <div class="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-50 transition duration-500">
                    <div class="scan-line absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent"></div>
                </div>

                <!-- 主卡片 -->
                <div class="relative flex items-center justify-center space-x-4 px-8 py-5 rounded-xl bg-gradient-to-br from-gray-800/50 via-gray-900/70 to-gray-800/50 border border-pink-200/20 hover:border-pink-400/60 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 overflow-hidden">
                    <!-- 背景网格 -->
                    <div class="absolute inset-0 opacity-10">
                        <div class="w-full h-full" style="background-image: linear-gradient(rgba(244,114,182,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>
                    </div>

                    <!-- 图标容器 -->
                    <div class="relative">
                        <div class="absolute inset-0 bg-pink-500/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <font-awesome-icon
                            :icon="link.icon"
                            class="relative w-6 h-6 text-pink-200/80 group-hover:text-pink-100 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110"
                        />
                    </div>

                    <!-- 链接名称 -->
                    <span class="relative text-pink-200/90 group-hover:text-pink-100 font-medium tracking-wider transition-colors duration-300">
                        {{ link.name }}
                    </span>

                    <!-- 箭头指示器 -->
                    <div class="relative ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                        <svg class="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </div>

                    <!-- 二次元装饰 - 悬浮时出现 -->
                    <div class="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-100 transition duration-300 animate-bounce">✨</div>
                    <div class="absolute -bottom-1 -left-2 text-lg opacity-0 group-hover:opacity-100 transition duration-300 delay-75">💫</div>

                    <!-- 角落装饰 -->
                    <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-pink-400/60"></div>
                    <div class="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-pink-400/60"></div>
                    <div class="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-pink-400/60"></div>
                    <div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-pink-400/60"></div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SocialLink } from '@/types';

interface Props {
    links: SocialLink[];
}

defineProps<Props>();
</script>

<style scoped>
/* 扫描线动画 */
.scan-line {
    animation: scan 2s linear infinite;
}

@keyframes scan {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

/* 入场动画 */
a {
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
</style>
