<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(item, index) in items" :key="index"
            class="nav-card group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-gray-800/40 border border-pink-200/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105"
            @mousemove="handleMouseMove($event, index)" @mouseleave="handleMouseLeave(index)"
            :style="{ animationDelay: `${index * 0.1}s` }">
            <!-- 悬停光效 -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                :style="cardStyles[index]">
            </div>

            <!-- 背景网格 -->
            <div class="absolute inset-0 opacity-5">
                <div class="w-full h-full" style="background-image: linear-gradient(rgba(244,114,182,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.15) 1px, transparent 1px); background-size: 20px 20px;"></div>
            </div>

            <!-- 扫描线效果 -->
            <div class="scanline absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-700 pointer-events-none"></div>

            <!-- 角落星星装饰 -->
            <div class="absolute top-2 right-2 text-pink-300 text-xs animate-bounce opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                ✦
            </div>

            <!-- 二次元装饰 -->
            <div class="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-100 transition duration-300 animate-bounce">⭐</div>

            <!-- 渐变边框层 -->
            <div class="absolute -inset-[1px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <RouterLink :to="item.url" class="block p-8 relative z-10">
                <div class="flex flex-col h-full">
                    <div class="flex items-center space-x-3 mb-4">
                        <div :class="item.icon"
                            class="w-10 h-10 text-pink-300 group-hover:text-pink-200 group-hover:scale-110 transition-all duration-300 relative">
                            <div class="absolute inset-0 bg-pink-500/20 rounded-lg blur group-hover:blur-md transition duration-300"></div>
                        </div>
                        <h3
                            class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-pink-300 group-hover:from-pink-100 group-hover:to-pink-200">
                            {{ item.name }}
                        </h3>
                    </div>
                    <p class="text-pink-200/70 group-hover:text-pink-100/80 mb-6 transition-colors duration-300">
                        {{ item.description }}
                    </p>
                    <div
                        class="mt-auto flex items-center text-pink-200/70 group-hover:text-pink-200 transition-colors duration-300">
                        <span>了解更多</span>
                        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </RouterLink>

            <!-- 角落装饰 -->
            <div class="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div class="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-75"></div>
            <div class="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-75"></div>
            <div class="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-100"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { NavigationItem } from '@/types';

interface Props {
    items: NavigationItem[];
}

const props = defineProps<Props>();

const cardStyles = ref(props.items.map(() => ({})));

const handleMouseMove = (event: MouseEvent, index: number) => {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    cardStyles.value[index] = {
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(236, 72, 153, 0.1), transparent 40%)`
    };
};

const handleMouseLeave = (index: number) => {
    cardStyles.value[index] = {};
};
</script>

<style scoped>
/* 卡片基础样式 */
.nav-card {
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

.nav-card:hover {
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
