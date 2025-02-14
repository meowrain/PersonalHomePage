<template>
    <div id="app-sticky-header" class="sticky top-0 w-full z-50">
        <div class="action-bar bg-black/80 backdrop-blur-sm border-b border-pink-200/10">
            <div
                class="action-bar-content flex flex-row justify-between items-center h-16 mx-auto px-4 md:px-8 max-w-7xl">
                <!-- Logo 容器 -->
                <div class="flex items-center">
                    <RouterLink to="/" class="flex items-center space-x-3 group">
                        <div class="relative">
                            <div
                                class="absolute -inset-1 bg-gradient-to-r from-pink-200 to-pink-400 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-200">
                            </div>
                            <img src="/images/logo.png" alt="MeowRain"
                                class="h-9 w-9 md:h-10 md:w-10 rounded-full relative border-2 border-pink-200/30 group-hover:border-pink-200 transition-all duration-200">
                        </div>
                        <div class="hidden sm:flex flex-col">
                            <span class="text-pink-200 font-bold text-lg md:text-xl">MeowRain's Space</span>
                            <span class="text-pink-200/50 text-xs">Golang Developer</span>
                        </div>
                    </RouterLink>
                </div>

                <!-- 导航链接 - 桌面端 -->
                <nav class="hidden md:flex items-center space-x-8">
                    <RouterLink v-for="link in navLinks" :key="link.path" :to="link.path"
                        class="text-pink-200/70 hover:text-pink-200 transition-colors duration-200"
                        :class="{ 'text-pink-200 font-bold': isCurrentRoute(link.path) }">
                        {{ link.name }}
                    </RouterLink>
                </nav>

                <!-- 右侧用户信息 -->
                <div class="flex items-center space-x-4">
                    <a href="https://github.com/meowrain" target="_blank" class="flex items-center space-x-2 group">
                        <img class="w-8 h-8 rounded-full border-2 border-pink-200/30 group-hover:border-pink-200 transition-all duration-200"
                            src="https://avatars.githubusercontent.com/u/107172084?v=4" alt="MeowRain">
                        <span
                            class="text-pink-200/70 group-hover:text-pink-200 hidden sm:block transition-colors duration-200">
                            Github
                        </span>
                    </a>

                    <!-- 移动端菜单按钮 -->
                    <button class="md:hidden p-2" @click="toggleMenu"
                        :class="{ 'text-pink-200': isMenuOpen, 'text-pink-200/70': !isMenuOpen }">
                        <div class="w-6 h-6 relative">
                            <span class="block absolute h-0.5 w-full bg-current transition-all duration-300"
                                :class="{ 'rotate-45 top-3': isMenuOpen, 'top-1': !isMenuOpen }"></span>
                            <span class="block absolute h-0.5 w-full bg-current transition-all duration-300"
                                :class="{ 'opacity-0': isMenuOpen, 'top-3': !isMenuOpen }"></span>
                            <span class="block absolute h-0.5 w-full bg-current transition-all duration-300"
                                :class="{ '-rotate-45 top-3': isMenuOpen, 'top-5': !isMenuOpen }"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- 移动端菜单 -->
        <Transition name="slide-down">
            <div v-if="isMenuOpen" class="md:hidden">
                <nav class="bg-black/95 backdrop-blur-sm border-b border-pink-200/10">
                    <div class="max-w-7xl mx-auto px-4 py-3">
                        <div class="flex flex-col space-y-3">
                            <RouterLink v-for="link in navLinks" :key="link.path" :to="link.path"
                                class="px-4 py-2 rounded-lg text-pink-200/70 hover:text-pink-200 hover:bg-pink-200/5 transition-all duration-200"
                                :class="{ 'bg-pink-200/10 text-pink-200': isCurrentRoute(link.path) }"
                                @click="isMenuOpen = false">
                                {{ link.name }}
                            </RouterLink>
                        </div>
                    </div>
                </nav>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);

const navLinks = [
    { name: '首页', path: '/' },
    { name: '项目', path: '/projects' },
    { name: '相册', path: '/album' },
    { name: '视频', path: '/loved-videos' },
    { name: '关于', path: '/about' }
];

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const isCurrentRoute = (path: string) => {
    return route.path === path;
};
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

/* 确保导航栏在滚动时保持清晰 */
.action-bar {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

/* 优化移动端触摸区域 */
@media (max-width: 768px) {
    .action-bar-content {
        height: 3.5rem;
    }

    nav a {
        display: block;
        padding: 0.75rem 1rem;
    }
}

/* 添加 logo 悬停动画 */
.group:hover img {
    transform: scale(1.05);
}

/* 确保渐变动画平滑 */
.group:hover .absolute {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.15;
    }
}
</style>