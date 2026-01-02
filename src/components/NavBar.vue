<template>
    <div id="app-sticky-header" class="sticky top-0 w-full z-50">
        <div class="action-bar bg-black/80 backdrop-blur-sm border-b border-pink-200/20 relative overflow-hidden">
            <!-- 渐变光晕背景 -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <!-- 飘浮星星装饰 -->
            <div class="floating-star absolute top-2 left-20 text-sm opacity-30 pointer-events-none" style="animation-delay: 0s;">⭐</div>
            <div class="floating-star absolute top-3 right-32 text-xs opacity-30 pointer-events-none" style="animation-delay: 1s;">✨</div>
            <div class="floating-star absolute top-2 right-16 text-sm opacity-30 pointer-events-none" style="animation-delay: 2s;">💖</div>

            <div
                class="action-bar-content relative flex flex-row justify-between items-center h-16 mx-auto px-4 md:px-8 max-w-7xl">
                <!-- Logo 容器 -->
                <div class="flex items-center">
                    <RouterLink to="/" class="flex items-center space-x-3 group">
                        <div class="relative">
                            <!-- 柔和光晕效果 -->
                            <div
                                class="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500">
                            </div>
                            <!-- 星星装饰 -->
                            <div class="star absolute -top-2 -right-2 text-pink-300 text-xs animate-bounce">✦</div>
                            <img src="/images/logo.png" alt="MeowRain"
                                class="h-9 w-9 md:h-10 md:w-10 rounded-full relative border-2 border-pink-200/30 group-hover:border-pink-300/50 transition-all duration-300 group-hover:scale-110">
                        </div>
                        <div class="hidden sm:flex flex-col">
                            <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 font-bold text-lg md:text-xl group-hover:animate-glow">
                                MeowRain's Space
                            </span>
                            <span class="text-pink-200/50 text-xs group-hover:text-pink-200/70 transition-colors duration-300">
                                Golang Developer ✿
                            </span>
                        </div>
                    </RouterLink>
                </div>

                <!-- 导航链接 - 桌面端 -->
                <nav class="hidden md:flex flex-1 justify-center items-center space-x-6">
                    <RouterLink v-for="link in navLinks" :key="link.path" :to="link.path"
                        class="nav-link group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden"
                        :class="isCurrentRoute(link.path) ? 'nav-link-active' : 'nav-link-inactive'">
                        <!-- 悬停光效 -->
                        <div class="nav-link-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <FontAwesomeIcon :icon="link.icon"
                            class="text-sm relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        <span class="relative z-10 group-hover:tracking-wide transition-all duration-300">{{ link.name }}</span>

                        <!-- 星星装饰 -->
                        <div v-if="isCurrentRoute(link.path)" class="absolute -top-1 -right-1 text-pink-300 text-xs animate-pulse">✦</div>
                    </RouterLink>
                </nav>

                <!-- 右侧用户信息 -->
                <div class="flex items-center space-x-4 relative z-10">
                    <a href="https://github.com/meowrain" target="_blank" class="flex items-center space-x-2 group">
                        <div class="relative">
                            <!-- 柔和光晕边框 -->
                            <div
                                class="absolute -inset-0.5 bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500">
                            </div>
                            <img class="w-8 h-8 rounded-full border-2 border-pink-200/30 group-hover:border-pink-300/50 transition-all duration-300 relative group-hover:scale-110"
                                src="https://avatars.githubusercontent.com/u/107172084?v=4" alt="MeowRain">
                            <!-- 星星装饰 -->
                            <div class="absolute -top-1 -right-1 text-pink-300 text-xs animate-bounce">✦</div>
                        </div>
                        <span class="text-pink-200/70 group-hover:text-pink-200 hidden sm:block transition-colors duration-300 group-hover:tracking-wide">
                            Github
                        </span>
                    </a>

                    <!-- 移动端菜单按钮 -->
                    <button class="md:hidden p-2 text-pink-200/70 hover:text-pink-200 transition-colors duration-300"
                        @click="toggleMenu">
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
                <nav class="bg-black/95 backdrop-blur-sm border-b border-pink-200/20 relative overflow-hidden">
                    <!-- 移动端菜单星星装饰 -->
                    <div class="absolute inset-0 pointer-events-none">
                        <div class="floating-star absolute top-4 left-10 text-xs opacity-20" style="animation-delay: 0s;">✨</div>
                        <div class="floating-star absolute top-12 right-8 text-xs opacity-20" style="animation-delay: 1s;">💖</div>
                        <div class="floating-star absolute bottom-8 left-12 text-xs opacity-20" style="animation-delay: 2s;">⭐</div>
                    </div>

                    <div class="max-w-7xl mx-auto px-4 py-3 relative z-10">
                        <div class="flex flex-col space-y-2">
                            <RouterLink v-for="link in navLinks" :key="link.path" :to="link.path"
                                class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group"
                                :class="isCurrentRoute(link.path)
                                    ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-200 border border-pink-300/30'
                                    : 'text-pink-200/70 hover:text-pink-200 hover:bg-pink-500/10'"
                                @click="isMenuOpen = false">
                                <!-- 悬停效果 -->
                                <div class="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-purple-400/10 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <FontAwesomeIcon :icon="link.icon"
                                    class="text-sm w-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                <span class="relative z-10 group-hover:tracking-wide transition-all duration-300">{{ link.name }}</span>

                                <!-- 激活状态星星装饰 -->
                                <div v-if="isCurrentRoute(link.path)" class="absolute right-3 text-pink-300 text-sm animate-pulse">
                                    ✦
                                </div>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const route = useRoute();
const isMenuOpen = ref(false);

const navLinks = [
    { name: '首页', path: '/', icon: 'home' },
    { name: '项目', path: '/projects', icon: 'code' },
    { name: '相册', path: '/album', icon: 'images' },
    { name: '视频', path: '/loved-videos', icon: 'video' },
    { name: '关于', path: '/about', icon: 'user' }
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

/* 导航栏基础样式 */
.action-bar {
    box-shadow: 0 0 20px rgba(236, 72, 153, 0.1);
}

/* 导航链接样式 */
.nav-link-inactive {
    color: rgb(251 207 232 / 0.7);
}

.nav-link-inactive:hover {
    color: rgb(251 207 232 / 0.9);
    background: rgba(236, 72, 153, 0.1);
}

.nav-link-active {
    color: rgb(252 231 255);
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
    border: 1px solid rgba(236, 72, 153, 0.3);
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.2);
}

/* 导航链接光效 */
.nav-link-glow {
    background: radial-gradient(circle at center, rgba(236, 72, 153, 0.2) 0%, transparent 70%);
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
        transform: translateY(-15px) rotate(10deg);
    }
}

/* 发光动画 */
@keyframes glow {
    0%, 100% {
        filter: drop-shadow(0 0 2px rgba(236, 72, 153, 0.5));
    }
    50% {
        filter: drop-shadow(0 0 4px rgba(236, 72, 153, 0.8));
    }
}

.animate-glow {
    animation: glow 2s ease-in-out infinite;
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

    /* 移动端隐藏部分装饰 */
    .floating-star {
        display: none;
    }
}
</style>