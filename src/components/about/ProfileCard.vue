<template>
    <div class="flex flex-col items-center mb-12">
        <div class="relative group">
            <!-- 头像光环动画 -->
            <div
                class="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300 animate-gradient">
            </div>
            <img class="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-pink-200/30 group-hover:border-pink-200 transition-all duration-300"
                :src="avatarUrl" :alt="name">
        </div>
        <h1 class="text-3xl font-bold text-pink-200 mt-6 mb-2">{{ name }}</h1>
        <p class="text-pink-200/70">{{ title }}</p>
    </div>

    <!-- 个人简介 -->
    <div class="mb-12 text-center">
        <p class="text-pink-200/80 leading-relaxed max-w-2xl mx-auto">
            {{ bio }}
        </p>
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
</style>
