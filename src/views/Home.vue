<template>
    <div class="home-container">
        <!-- 视频背景横幅 -->
        <div class="hero-section relative h-[85vh] overflow-hidden">
            <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
                <source src="../assets/background.mp4" type="video/mp4">
            </video>
            <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>

            <!-- 主标题内容 -->
            <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-200 mb-6 tracking-tight">
                    <span class="block">Welcome to</span>
                    <span
                        class="block mt-2 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 text-transparent bg-clip-text">
                        MeowRain's Space
                    </span>
                </h1>
                <p class="text-lg md:text-xl text-pink-200/70 max-w-2xl mx-auto leading-relaxed">
                    探索技术的边界，分享编程的乐趣。这里是我的个人空间，记录着我的技术成长与生活点滴。
                </p>
            </div>

            <!-- 向下滚动指示器 -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg class="w-6 h-6 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>

        <!-- 内容区域 -->
        <div class="content-section bg-black px-4 py-16 md:py-24">
            <div class="max-w-7xl mx-auto">
                <!-- 导航卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="(item, index) in navigationItems" :key="index"
                        class="group relative overflow-hidden rounded-2xl bg-pink-200/5 border border-pink-200/10 hover:border-pink-200/30 transition-all duration-500"
                        @mousemove="handleMouseMove($event, index)" @mouseleave="handleMouseLeave(index)">
                        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            :style="cardStyles[index]">
                        </div>
                        <RouterLink :to="item.url" class="block p-6 relative z-10">
                            <div class="flex flex-col h-full">
                                <div class="flex items-center space-x-3 mb-4">
                                    <component :is="item.icon" class="w-8 h-8 text-pink-200" />
                                    <h3 class="text-xl font-bold text-pink-200">{{ item.name }}</h3>
                                </div>
                                <p class="text-pink-200/70 mb-6">{{ item.description }}</p>
                                <div
                                    class="mt-auto flex items-center text-pink-200/70 group-hover:text-pink-200 transition-colors duration-300">
                                    <span>了解更多</span>
                                    <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </RouterLink>
                    </div>
                </div>

                <!-- 技能展示区域 -->
                <div class="mt-24">
                    <h2 class="text-3xl font-bold text-pink-200 text-center mb-12">我的技能栈</h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div v-for="skill in skills" :key="skill.name"
                            class="group p-6 rounded-xl bg-pink-200/5 border border-pink-200/10 hover:border-pink-200/30 transition-all duration-300">
                            <div class="flex flex-col items-center text-center">
                                <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 mb-4">
                                <h3 class="text-pink-200 font-bold mb-2">{{ skill.name }}</h3>
                                <div class="w-full bg-pink-200/10 rounded-full h-2 mb-2">
                                    <div class="bg-pink-400 h-full rounded-full transition-all duration-1000"
                                        :style="{ width: skill.level + '%' }">
                                    </div>
                                </div>
                                <span class="text-pink-200/50 text-sm">{{ skill.level }}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const navigationItems = [
    {
        name: '我的博客',
        description: '分享技术文章和学习心得',
        icon: 'i-mdi-book-open-page-variant',
        url: 'https://blog.meowrain.cn'
    },
    {
        name: '项目展示',
        description: '我的开源项目集合',
        icon: 'i-mdi-source-repository',
        url: '/projects'
    },
    {
        name: '照片墙',
        description: '记录生活的美好瞬间',
        icon: 'i-mdi-image-multiple',
        url: '/album'
    },
    {
        name: '关于我',
        description: '了解更多关于我的信息',
        icon: 'i-mdi-account',
        url: '/about'
    }
];

const skills = [
    { name: 'Golang', level: 85, icon: '/icons/golang.svg' },
    { name: 'Vue.js', level: 80, icon: '/icons/vue.svg' },
    { name: 'Docker', level: 75, icon: '/icons/docker.svg' },
    { name: 'TypeScript', level: 70, icon: '/icons/typescript.svg' },
    { name: 'Kubernetes', level: 65, icon: '/icons/kubernetes.svg' },
    { name: 'PostgreSQL', level: 70, icon: '/icons/postgresql.svg' },
    { name: 'Linux', level: 80, icon: '/icons/linux.svg' },
    { name: 'Git', level: 85, icon: '/icons/git.svg' }
];

const cardStyles = ref(navigationItems.map(() => ({})));

const handleMouseMove = (event: MouseEvent, index: number) => {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    cardStyles.value[index] = {
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,192,203,0.06), transparent 40%)`
    };
};

const handleMouseLeave = (index: number) => {
    cardStyles.value[index] = {};
};
</script>

<style scoped>
.home-container {
    background-color: black;
}

/* 确保视频覆盖整个区域 */
.hero-section video {
    object-fit: cover;
    filter: brightness(0.8);
}

/* 平滑滚动 */
html {
    scroll-behavior: smooth;
}

/* 优化动画性能 */
* {
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
}

/* 确保渐变动画平滑 */
.bg-gradient-to-r {
    background-size: 200% auto;
    animation: shine 8s linear infinite;
}

@keyframes shine {
    to {
        background-position: 200% center;
    }
}
</style>