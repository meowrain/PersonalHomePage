<template>
    <div class="mb-12">
        <!-- 标题带科技感装饰 -->
        <div class="relative mb-8">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
            <div class="absolute -left-6 top-1/2 -translate-y-1/2 text-xl animate-bounce opacity-70">✨</div>
            <div class="absolute -right-6 top-1/2 -translate-y-1/2 text-xl animate-bounce opacity-70" style="animation-delay: 0.5s;">✨</div>
            <h2 class="relative text-2xl font-bold text-pink-200 text-center tracking-wider">
                <span class="inline-block px-4">技术栈 💪</span>
            </h2>
        </div>

        <!-- 技能标签网格 -->
        <div class="flex flex-wrap justify-center gap-4">
            <div v-for="(skill, index) in skills" :key="skill.name"
                class="group relative"
                :style="{ animationDelay: `${index * 0.1}s` }"
            >
                <!-- 发光背景层 -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <!-- 扫描线效果 -->
                <div class="scanline absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition duration-700"></div>

                <!-- 主卡片 -->
                <div class="relative px-5 py-3 rounded-xl bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-gray-800/40 border border-pink-200/20 hover:border-pink-400/50 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1">
                    <div class="flex items-center space-x-3">
                        <!-- 图标容器 -->
                        <div class="relative">
                            <div class="absolute inset-0 bg-pink-500/20 rounded-lg blur group-hover:blur-md transition duration-300"></div>
                            <div :class="skill.icon" class="relative w-6 h-6 inline-block text-pink-200 group-hover:text-pink-300 transition-colors duration-300"></div>
                        </div>

                        <!-- 技能名称 -->
                        <span class="text-pink-200/90 group-hover:text-pink-100 font-medium tracking-wide transition-colors duration-300">
                            {{ skill.name }}
                        </span>

                        <!-- 技能等级指示器 -->
                        <div class="ml-2 flex space-x-0.5">
                            <div v-for="i in 5" :key="i"
                                class="w-1 h-3 rounded-full transition-all duration-300"
                                :class="i <= Math.ceil(skill.level / 20) ? 'bg-pink-400/80 shadow-[0_0_8px_rgba(244,114,182,0.6)]' : 'bg-pink-200/20'"
                            ></div>
                        </div>

                        <!-- 二次元小装饰 -->
                        <div class="ml-auto text-lg opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-125">⭐</div>
                    </div>

                    <!-- 角落装饰 -->
                    <div class="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div class="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-75"></div>
                    <div class="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-75"></div>
                    <div class="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-100"></div>
                </div>
            </div>
        </div>

        <!-- 底部装饰 -->
        <div class="flex justify-center space-x-4 mt-6 opacity-60">
            <span class="text-2xl animate-pulse">💖</span>
            <span class="text-2xl animate-pulse" style="animation-delay: 0.3s;">✨</span>
            <span class="text-2xl animate-pulse" style="animation-delay: 0.6s;">💫</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Skill } from '@/types';

interface Props {
    skills: Skill[];
}

defineProps<Props>();
</script>

<style scoped>
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

/* 入场动画 */
.group {
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
