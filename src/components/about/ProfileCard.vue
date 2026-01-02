<template>
    <div class="flex flex-col items-center mb-12">
        <div class="relative group cursor-pointer">
            <!-- 外层光晕 -->
            <div class="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

            <!-- 头像光环动画 -->
            <div
                class="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-500 animate-gradient">
            </div>

            <!-- 头像容器 -->
            <div class="relative avatar-container">
                <img class="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-pink-200/30 group-hover:border-pink-200/60 transition-all duration-500 shadow-2xl"
                    :src="avatarUrl" :alt="name">

                <!-- 悬浮时的装饰点 -->
                <div class="absolute top-0 right-0 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 delay-100 animate-bounce"></div>
                <div class="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 delay-200 animate-ping"></div>

                <!-- 二次元装饰 - 可爱的小贴纸 -->
                <div class="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition duration-300 transform hover:scale-125">✨</div>
                <div class="absolute -bottom-1 -left-2 text-xl opacity-0 group-hover:opacity-100 transition duration-300 delay-75">💖</div>
            </div>
        </div>

        <!-- 名字和职位 -->
        <div class="text-center mt-8 space-y-2 relative">
            <!-- 名字两侧的星星装饰 -->
            <div class="absolute -left-8 top-1/2 -translate-y-1/2 text-lg animate-spin-slow opacity-60 hidden md:block">⭐</div>
            <div class="absolute -right-8 top-1/2 -translate-y-1/2 text-lg animate-spin-slow opacity-60 hidden md:block" style="animation-direction: reverse;">⭐</div>

            <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient-x">
                {{ name }}
            </h1>
            <p class="text-lg text-pink-200/70 font-light tracking-wide">{{ title }}</p>

            <!-- 可爱的小标签 -->
            <div class="flex justify-center space-x-2 mt-2">
                <span class="px-3 py-1 text-xs rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-200/80">🌸 程序猿</span>
                <span class="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-200/80">💻 开发者</span>
            </div>
        </div>
    </div>

    <!-- 个人简介 -->
    <div class="mb-12 text-center relative">
        <!-- 装饰线 -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>

        <p class="text-pink-200/80 leading-relaxed max-w-2xl mx-auto text-lg mt-6">
            {{ bio }}
        </p>

        <!-- 装饰线 -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    name: string;
    title: string;
    bio: string;
    avatarUrl: string;
}

defineProps<Props>();
</script>

<style scoped>
@keyframes gradient {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.animate-gradient {
    animation: gradient 3s linear infinite;
}

@keyframes gradient-x {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

.animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
}

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 8s linear infinite;
}

.avatar-container {
    transition: transform 0.3s ease;
}

.avatar-container:hover {
    transform: scale(1.05);
}
</style>
