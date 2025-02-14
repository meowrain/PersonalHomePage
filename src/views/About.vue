<template>
    <div class="about-container p-4 md:p-8">
        <!-- 个人信息卡片 -->
        <div class="max-w-4xl mx-auto bg-black/30 rounded-2xl border border-pink-200/10 p-8 backdrop-blur-sm">
            <!-- 头像区域 -->
            <div class="flex flex-col items-center mb-12">
                <div class="relative group">
                    <!-- 头像光环动画 -->
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300 animate-gradient">
                    </div>
                    <img class="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-pink-200/30 group-hover:border-pink-200 transition-all duration-300"
                        src="https://avatars.githubusercontent.com/u/107172084?v=4" alt="MeowRain">
                </div>
                <h1 class="text-3xl font-bold text-pink-200 mt-6 mb-2">MeowRain</h1>
                <p class="text-pink-200/70">Golang Developer & Open Source Enthusiast</p>
            </div>

            <!-- 个人简介 -->
            <div class="mb-12 text-center">
                <p class="text-pink-200/80 leading-relaxed max-w-2xl mx-auto">
                    热爱编程和开源社区，专注于 Golang 开发。喜欢探索新技术，享受解决问题的过程。
                    目前在学习分布式系统和云原生技术。
                </p>
            </div>

            <!-- 技能标签 -->
            <div class="mb-12">
                <h2 class="text-xl font-bold text-pink-200 mb-6 text-center">技术栈</h2>
                <div class="flex flex-wrap justify-center gap-3">
                    <div v-for="skill in skills" :key="skill.name"
                        class="group relative px-4 py-2 rounded-full bg-pink-200/5 border border-pink-200/10 hover:border-pink-200/30 transition-all duration-300">
                        <div class="flex items-center space-x-2">
                            <font-awesome-icon :icon="skill.icon"
                                class="w-5 h-5 text-pink-200/70 group-hover:text-pink-200" />
                            <span class="text-pink-200/70 group-hover:text-pink-200">{{ skill.name }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 社交链接 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank"
                    class="flex items-center justify-center space-x-3 px-6 py-3 rounded-lg bg-pink-200/5 border border-pink-200/10 hover:border-pink-200/30 hover:bg-pink-200/10 transition-all duration-300 group">
                    <font-awesome-icon :icon="link.icon" class="w-5 h-5 text-pink-200/70 group-hover:text-pink-200" />
                    <span class="text-pink-200/70 group-hover:text-pink-200">{{ link.name }}</span>
                </a>
            </div>

            <!-- 教育经历 -->
            <div class="mt-12 border-t border-pink-200/10 pt-8">
                <h2 class="text-xl font-bold text-pink-200 mb-6 text-center">教育经历</h2>
                <div class="space-y-4">
                    <div
                        class="flex items-center justify-between p-4 rounded-lg bg-pink-200/5 border border-pink-200/10">
                        <div>
                            <h3 class="text-pink-200 font-bold">山西农业大学</h3>
                            <p class="text-pink-200/70 text-sm">计算机科学与技术</p>
                        </div>
                        <span class="text-pink-200/50">2021 - 2025</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const skills = [
    { name: 'Golang', icon: ['fas', 'laptop-code'], level: 85 },
    { name: 'Vue.js', icon: '/icons/vue.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'Linux', icon: '/icons/linux.svg' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg' }
];

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/meowrain',
        icon: ['fab', 'github']
    },
    {
        name: 'Blog',
        url: 'https://blog.meowrain.cn',
        icon: ['fab', 'globe-asia']
    }
];
</script>

<style scoped>
.about-container {
    min-height: calc(100vh - 64px);
    background-color: black;
}

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

/* 确保所有过渡效果平滑 */
* {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* 优化移动端显示 */
@media (max-width: 640px) {
    .about-container {
        padding: 1rem;
    }
}
</style>