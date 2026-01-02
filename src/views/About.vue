<template>
    <div class="about-container p-4 md:p-8">
        <!-- 个人信息卡片 -->
        <div class="max-w-4xl mx-auto bg-black/30 rounded-2xl border border-pink-200/10 p-8 backdrop-blur-sm">
            <!-- 头像和个人信息 -->
            <ProfileCard name="MeowRain" title="Golang Developer & Open Source Enthusiast"
                bio="热爱编程和开源社区，专注于 Golang 开发。喜欢探索新技术，享受解决问题的过程。目前在学习分布式系统和云原生技术。"
                avatarUrl="https://avatars.githubusercontent.com/u/107172084?v=4" />

            <!-- 技能标签 -->
            <SkillTags :skills="skills" />

            <!-- 社交链接 -->
            <SocialLinks :links="socialLinks" />

            <!-- 教育经历 -->
            <Education university="山西农业大学" major="计算机科学与技术" period="2021 - 2025" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ProfileCard from '@/components/about/ProfileCard.vue';
import SkillTags from '@/components/about/SkillTags.vue';
import SocialLinks from '@/components/about/SocialLinks.vue';
import Education from '@/components/about/Education.vue';

const skills = [
    { name: 'Golang', icon: ['fas', 'laptop-code'], level: 85 },
    { name: 'Vue.js', icon: '/icons/vue.svg', level: 80 },
    { name: 'TypeScript', icon: '/icons/typescript.svg', level: 70 },
    { name: 'Docker', icon: '/icons/docker.svg', level: 75 },
    { name: 'Kubernetes', icon: '/icons/kubernetes.svg', level: 65 },
    { name: 'Git', icon: '/icons/git.svg', level: 85 },
    { name: 'Linux', icon: '/icons/linux.svg', level: 80 },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg', level: 70 }
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