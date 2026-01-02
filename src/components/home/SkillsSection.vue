<template>
    <div class="mt-16">
        <!-- 标题区域 -->
        <div class="text-center mb-12 relative">
            <div class="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl animate-bounce opacity-70 hidden md:block">✨</div>
            <div class="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl animate-bounce opacity-70 hidden md:block" style="animation-delay: 0.5s;">⭐</div>
            <h2
                class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-200 to-purple-300 inline-block animate-glow">
                技术栈 💪 Skills
            </h2>
            <div class="w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="(skill, index) in skills" :key="skill.name"
                class="skill-card group p-6 rounded-xl bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-gray-800/40 border border-pink-200/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                :style="{ animationDelay: `${index * 0.1}s` }">
                <!-- 发光背景层 -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <!-- 扫描线效果 -->
                <div class="scanline absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition duration-700 pointer-events-none"></div>

                <!-- 背景网格 -->
                <div class="absolute inset-0 opacity-5">
                    <div class="w-full h-full" style="background-image: linear-gradient(rgba(244,114,182,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.15) 1px, transparent 1px); background-size: 20px 20px;"></div>
                </div>

                <!-- 星星装饰 -->
                <div class="absolute top-2 right-2 text-pink-300 text-xs animate-bounce opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    ✦
                </div>

                <!-- 二次元装饰 -->
                <div class="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-100 transition duration-300 animate-bounce">⭐</div>

                <div class="flex flex-col items-center text-center relative z-10">
                    <!-- UnoCSS 图标 -->
                    <div :class="skill.icon"
                        class="w-14 h-14 mb-4 inline-block text-pink-300 group-hover:text-pink-200 group-hover:scale-110 transition-all duration-300 relative">
                        <div class="absolute inset-0 bg-pink-500/20 rounded-lg blur group-hover:blur-md transition duration-300"></div>
                    </div>
                    <h3
                        class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-200 font-bold mb-3">
                        {{ skill.name }}
                    </h3>

                    <!-- 进度条 -->
                    <div class="w-full bg-pink-900/30 rounded-full h-2.5 mb-2 overflow-hidden">
                        <div
                            class="skill-bar h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-pink-400 to-purple-400 relative"
                            :style="{ width: skill.level + '%' }">
                            <!-- 进度条发光效果 -->
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                        </div>
                    </div>

                    <!-- 技能等级标签 -->
                    <span
                        class="text-pink-200/70 group-hover:text-pink-200/80 text-sm font-mono group-hover:tracking-wider transition-all duration-300">
                        {{ skill.level }}%
                    </span>
                </div>

                <!-- 角落装饰 -->
                <div class="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div class="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-75"></div>
                <div class="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-75"></div>
                <div class="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-100"></div>
            </div>
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
/* 技能卡片基础样式 */
.skill-card {
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

.skill-card:hover {
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

/* 进度条动画 */
.skill-bar {
    position: relative;
    box-shadow: 0 0 10px rgba(236, 72, 153, 0.4);
}

@keyframes shine {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

.animate-shine {
    animation: shine 2s infinite;
}

/* 标题发光动画 */
@keyframes glow {
    0%, 100% {
        filter: drop-shadow(0 0 5px rgba(236, 72, 153, 0.6));
    }
    50% {
        filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.9));
    }
}

.animate-glow {
    animation: glow 2s ease-in-out infinite;
}
</style>
