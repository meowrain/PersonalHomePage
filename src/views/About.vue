<template>
    <div class="about-container p-4 md:p-8 relative overflow-hidden">
        <!-- 背景装饰 -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <!-- 二次元装饰 - 飘浮的星星和爱心 -->
        <div class="floating-star absolute top-20 left-10 text-4xl opacity-20 pointer-events-none" style="animation-delay: 0s;">⭐</div>
        <div class="floating-star absolute top-40 right-20 text-3xl opacity-20 pointer-events-none" style="animation-delay: 1s;">✨</div>
        <div class="floating-star absolute bottom-40 left-20 text-3xl opacity-20 pointer-events-none" style="animation-delay: 2s;">💖</div>
        <div class="floating-star absolute top-60 left-1/4 text-2xl opacity-20 pointer-events-none" style="animation-delay: 0.5s;">⭐</div>
        <div class="floating-star absolute bottom-60 right-1/4 text-2xl opacity-20 pointer-events-none" style="animation-delay: 1.5s;">✨</div>
        <div class="floating-star absolute top-1/3 right-10 text-3xl opacity-20 pointer-events-none" style="animation-delay: 2.5s;">💫</div>
        <div class="floating-star absolute bottom-20 right-40 text-2xl opacity-20 pointer-events-none" style="animation-delay: 3s;">💖</div>

        <!-- 个人信息卡片 -->
        <div class="card-container max-w-4xl mx-auto relative">
            <!-- 渐变边框层 -->
            <div class="absolute -inset-[1px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-sm"></div>

            <!-- 主内容层 -->
            <div
                class="relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 rounded-3xl border border-pink-200/20 p-8 backdrop-blur-xl shadow-2xl animate-fade-in transform-gpu"
                :style="cardStyle"
                @mousemove="handleMouseMove"
                @mouseleave="handleMouseLeave"
                style="transition: transform 0.6s ease-out, background 0.3s ease;"
            >
                <!-- 内容区域 -->
                <div class="relative z-10">
                    <!-- 头像和个人信息 -->
                    <ProfileCard name="MeowRain" title="Golang Developer & Open Source Enthusiast"
                        bio="热爱编程和开源社区，专注于 Golang 开发。喜欢探索新技术，享受解决问题的过程。目前在学习分布式系统和云原生技术。"
                        avatarUrl="https://avatars.githubusercontent.com/u/107172084?v=4" />

                    <!-- 技能标签 -->
                    <SkillTags :skills="SKILLS" />

                    <!-- 社交链接 -->
                    <SocialLinks :links="socialLinks" />

                    <!-- 教育经历 -->
                    <Education university="山西农业大学" major="计算机科学与技术" period="2021 - 2025" />
                </div>

                <!-- 闪光效果 -->
                <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-pink-500/5 to-transparent
                    shimmer-effect pointer-events-none"></div>

                <!-- 二次元角标装饰 -->
                <div class="absolute -top-3 -right-3 text-5xl animate-bounce opacity-60 pointer-events-none drop-shadow-lg">✨</div>
                <div class="absolute -bottom-3 -left-3 text-4xl animate-pulse opacity-60 pointer-events-none drop-shadow-lg">💖</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProfileCard from '@/components/about/ProfileCard.vue';
import SkillTags from '@/components/about/SkillTags.vue';
import SocialLinks from '@/components/about/SocialLinks.vue';
import Education from '@/components/about/Education.vue';
import { SKILLS } from '@/utils/constants';

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

// 鼠标跟随发光效果
const cardStyle = ref({});

// 3D 倾斜效果
const cardTransform = ref({
    rotateX: 0,
    rotateY: 0
});

const handleMouseMove = (event: MouseEvent) => {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // 发光效果
    cardStyle.value = {
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,192,203,0.08), transparent 40%)`
    };

    // 3D 倾斜效果
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 40; // 绕 X 轴旋转（上下倾斜），增大分母减小幅度
    const rotateY = (centerX - x) / 40; // 绕 Y 轴旋转（左右倾斜），增大分母减小幅度

    cardTransform.value = {
        rotateX: Math.max(-2, Math.min(2, rotateX)), // 限制最大旋转角度为 2 度
        rotateY: Math.max(-2, Math.min(2, rotateY))
    };

    card.style.transform = `perspective(1000px) rotateX(${cardTransform.value.rotateX}deg) rotateY(${cardTransform.value.rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
};

const handleMouseLeave = (event: MouseEvent) => {
    const card = event.currentTarget as HTMLElement;

    cardStyle.value = {};
    cardTransform.value = { rotateX: 0, rotateY: 0 };
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
};
</script>

<style scoped>
.about-container {
    min-height: calc(100vh - 64px);
    background-color: black;
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
@keyframes fade-in {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.6s ease-out;
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

/* 3D 变换使用 GPU 加速 */
.transform-gpu {
    transform-style: preserve-3d;
    will-change: transform;
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

    /* 移动端隐藏部分装饰 */
    .floating-star {
        display: none;
    }
}
</style>