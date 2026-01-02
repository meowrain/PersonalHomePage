<template>
    <div class="hero-section relative h-[70vh] overflow-hidden">
        <!-- 视频背景 -->
        <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
            <source src="../../assets/background.mp4" type="video/mp4">
        </video>

        <!-- 多层渐变遮罩 -->
        <div class="absolute inset-0 bg-gradient-to-b from-pink-900/10 via-black/60 to-black"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>

        <!-- 渐变光晕背景 -->
        <div class="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <!-- 二次元装饰 - 飘浮的星星和爱心 -->
        <div class="floating-star absolute top-20 left-10 text-4xl opacity-20 pointer-events-none" style="animation-delay: 0s;">⭐</div>
        <div class="floating-star absolute top-40 right-20 text-3xl opacity-20 pointer-events-none" style="animation-delay: 1s;">✨</div>
        <div class="floating-star absolute bottom-40 left-20 text-3xl opacity-20 pointer-events-none" style="animation-delay: 2s;">💖</div>
        <div class="floating-star absolute top-60 left-1/4 text-2xl opacity-20 pointer-events-none" style="animation-delay: 0.5s;">⭐</div>
        <div class="floating-star absolute bottom-60 right-1/4 text-2xl opacity-20 pointer-events-none" style="animation-delay: 1.5s;">✨</div>
        <div class="floating-star absolute top-1/3 right-10 text-3xl opacity-20 pointer-events-none" style="animation-delay: 2.5s;">💫</div>
        <div class="floating-star absolute bottom-20 right-40 text-2xl opacity-20 pointer-events-none" style="animation-delay: 3s;">💖</div>

        <!-- 主标题内容 -->
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <!-- 渐变边框容器 -->
            <div class="card-container relative max-w-4xl mx-auto">
                <!-- 渐变边框层 -->
                <div class="absolute -inset-[1px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-sm"></div>

                <!-- 主内容层 -->
                <div
                    class="relative bg-gradient-to-br from-gray-900/20 via-black/30 to-gray-900/20 rounded-3xl border border-pink-200/10 p-8 md:p-12 backdrop-blur-sm shadow-2xl">
                    <!-- 角落星星装饰 -->
                    <div class="absolute -top-3 -right-3 text-4xl animate-bounce opacity-60 pointer-events-none drop-shadow-lg">✨</div>
                    <div class="absolute -bottom-3 -left-3 text-3xl animate-pulse opacity-60 pointer-events-none drop-shadow-lg">💖</div>

                    <!-- 闪光效果 -->
                    <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-pink-500/5 to-transparent shimmer-effect pointer-events-none"></div>

                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        <span class="block text-pink-200 animate-glow">Welcome to</span>
                        <span
                            class="block mt-2 bg-gradient-to-r from-pink-200 via-pink-300 to-purple-300 text-transparent bg-clip-text">
                            MeowRain's Space
                        </span>
                    </h1>

                    <!-- 副标题 -->
                    <p class="text-lg md:text-xl text-pink-200/80 max-w-2xl mx-auto leading-relaxed mb-8">
                        探索技术的边界 ✿ 分享编程的乐趣 ✿ 记录成长的足迹
                    </p>

                    <!-- 互动按钮 -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            class="group relative px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30">
                            <span class="relative z-10 flex items-center space-x-2">
                                <span>开始探索</span>
                                <span class="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button
                            class="group px-8 py-3 border-2 border-pink-300/50 rounded-full text-pink-200 hover:bg-pink-500/20 hover:border-pink-300 transition-all duration-300 hover:scale-105">
                            <span class="flex items-center space-x-2">
                                <span>了解更多</span>
                                <span class="animate-pulse">✦</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 向下滚动指示器 -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div class="scroll-indicator flex flex-col items-center space-y-2 animate-bounce">
                <span class="text-pink-200 text-sm">Scroll</span>
                <svg class="w-6 h-6 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3">
                    </path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Hero section component - 柔和二次元风格横幅
</script>

<style scoped>
.hero-section {
    background-color: black;
    position: relative;
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

/* 入场动画 */
.card-container > div {
    animation: fade-in-up 1s ease-out;
}

@keyframes fade-in-up {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 文字发光动画 */
@keyframes glow {
    0%, 100% {
        text-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
    }
    50% {
        text-shadow: 0 0 20px rgba(236, 72, 153, 0.8);
    }
}

.animate-glow {
    animation: glow 2s ease-in-out infinite;
}

/* 闪光效果动画 */
@keyframes shimmer {
    0% {
        transform: translateX(-100%) skewX(-15deg);
    }
    100% {
        transform: translateX(200%) skewX(-15deg);
    }
}

.shimmer-effect {
    animation: shimmer 3s ease-in-out infinite;
    animation-delay: 1s;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .floating-star {
        display: none;
    }

    .card-container > div {
        padding: 2rem 1.5rem !important;
    }

    h1 {
        font-size: 2rem !important;
    }
}
</style>
