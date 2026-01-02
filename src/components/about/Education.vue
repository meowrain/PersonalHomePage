<template>
    <div class="mt-12">
        <!-- 标题 -->
        <div class="relative mb-8">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
            <div class="absolute -left-6 top-1/2 -translate-y-1/2 text-xl animate-bounce opacity-70">📚</div>
            <div class="absolute -right-6 top-1/2 -translate-y-1/2 text-xl animate-bounce opacity-70" style="animation-delay: 0.5s;">🎓</div>
            <h2 class="relative text-2xl font-bold text-pink-200 text-center tracking-wider">
                <span class="inline-block px-4">教育经历 🏫</span>
            </h2>
        </div>

        <!-- 教育经历卡片 -->
        <div class="relative max-w-3xl mx-auto">
            <div class="relative group">
                <!-- 发光背景 -->
                <div class="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse"></div>

                <!-- 主卡片 -->
                <div class="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-gray-800/60 border border-pink-200/30 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden">
                    <!-- 背景网格 -->
                    <div class="absolute inset-0 opacity-5">
                        <div class="w-full h-full" style="background-image: linear-gradient(rgba(244,114,182,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.15) 1px, transparent 1px); background-size: 30px 30px;"></div>
                    </div>

                    <!-- 扫描线效果 -->
                    <div class="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 transition duration-500 pointer-events-none">
                        <div class="scanline w-full h-full bg-gradient-to-b from-transparent via-pink-400/20 to-transparent"></div>
                    </div>

                    <!-- 顶部装饰条 -->
                    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-pink-500/50"></div>

                    <!-- 内容区域 -->
                    <div class="relative">
                        <!-- 标题区域 -->
                        <div class="flex items-start justify-between mb-6">
                            <div class="flex-1">
                                <!-- 学校图标 + 名称 -->
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="relative">
                                        <div class="absolute inset-0 bg-pink-500/30 rounded-lg blur"></div>
                                        <div class="relative w-10 h-10 flex items-center justify-center bg-pink-500/20 rounded-lg border border-pink-400/40">
                                            <svg class="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 class="text-2xl font-bold bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                                        {{ university }}
                                    </h3>
                                    <!-- 小装饰 -->
                                    <span class="text-xl animate-pulse">✨</span>
                                </div>

                                <!-- 专业 -->
                                <p class="text-pink-200/70 text-lg font-light mb-2">{{ major }}</p>
                            </div>

                            <!-- 时间标签 -->
                            <div class="flex flex-col items-end space-y-2">
                                <div class="relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500/15 to-purple-500/15 border border-pink-400/40 shadow-[0_0_15px_rgba(244,114,182,0.2)]">
                                    <svg class="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <span class="text-pink-200 font-semibold tracking-wider">{{ period }}</span>
                                </div>

                                <!-- 学位装饰 -->
                                <div class="flex items-center space-x-1.5">
                                    <div class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                                    <span class="text-pink-200/50 text-sm">本科</span>
                                </div>
                            </div>
                        </div>

                        <!-- 装饰线 -->
                        <div class="relative h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent my-6"></div>

                        <!-- 底部信息 -->
                        <div class="flex items-center justify-between text-sm">
                            <div class="flex items-center space-x-4 text-pink-200/50">
                                <div class="flex items-center space-x-1.5">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span>中国 · 山西</span>
                                </div>
                                <div class="flex items-center space-x-1.5">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span>全日制</span>
                                </div>
                            </div>

                            <!-- 状态指示器 -->
                            <div class="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-400/30">
                                <div class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                                <span class="text-green-300/90 text-xs font-medium tracking-wide">已毕业 🎉</span>
                            </div>
                        </div>
                    </div>

                    <!-- 二次元装饰 - 悬浮时出现 -->
                    <div class="absolute -top-3 -right-3 text-3xl opacity-0 group-hover:opacity-100 transition duration-500 animate-bounce">🎓</div>
                    <div class="absolute -bottom-2 -left-2 text-2xl opacity-0 group-hover:opacity-100 transition duration-500 delay-100">⭐</div>

                    <!-- 角落装饰 -->
                    <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-pink-400/60 rounded-tl-sm"></div>
                    <div class="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-pink-400/60 rounded-tr-sm"></div>
                    <div class="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-pink-400/60 rounded-bl-sm"></div>
                    <div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-pink-400/60 rounded-br-sm"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    university: string;
    major: string;
    period: string;
}

defineProps<Props>();
</script>

<style scoped>
/* 扫描线动画 */
.scanline {
    animation: scan 2.5s linear infinite;
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
