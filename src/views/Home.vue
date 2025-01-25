<template>
    <div class="video-banner-container">
        <video autoplay="true" loop muted playsinline src="../assets/background.mp4"></video>
        <div class="video-text">
            <h1>MeoRain's Personal Page</h1>
            <p>Explore more about me</p>
        </div>
    </div>
    <div style="height: 3vw;"></div>
    <div class="grid-container">
        <div class="grid-content">
            <div class="grid-item" v-for="(item, index) in items" :key="index"
                @mousemove="handleMouseMove($event, index)" @mouseleave="handleMouseLeave(index)">
                <div class="card" :style="cardStyles[index]">
                    <a :href="item.url">
                        <img :src="item.image" alt="Project Image">
                        <div class="project-name">{{ item.name }}</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const items = [
    { name: '我的博客', image: 'images/blog.png', url: "https://meowrain.cn" },
    { name: 'Project 2', image: 'https://blog.meowrain.cn/api/i/2025/01/14/kSvDxj1736867642848367434.avif', url: "" },

];

const cardStyles = ref(items.map(() => ({})));

const handleMouseMove = (event: MouseEvent, index: number) => {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left; // 鼠标相对于卡片左侧的位置
    const y = event.clientY - rect.top; // 鼠标相对于卡片顶部的位置

    // 设置光影效果
    cardStyles.value[index] = {
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 80%)`,
    };
};

const handleMouseLeave = (index: number) => {
    // 移除光影效果
    cardStyles.value[index] = {};
};
</script>

<style lang="css" scoped>
.video-banner-container {
    position: relative;
    width: 100%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.video-banner-container video {
    width: 100%;
    height: auto;
    max-height: 500px;
    display: block;
    object-fit: cover;
}

/* 视频文字样式 */
.video-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 1;
}

.video-text h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.video-text p {
    font-size: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* 响应式设计：调整文字大小 */
@media (max-width: 768px) {
    .video-text h1 {
        font-size: 2rem;
    }

    .video-text p {
        font-size: 1rem;
    }
}

.grid-container {
    display: flex;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
}

.grid-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* 自适应列数 */
    gap: 20px;
    width: 100%;
    max-width: 90%;
    /* 最大宽度 */
}

.grid-item {
    display: flex;
    justify-content: center;
}

.card {
    background: black;
    border-radius: 8px;
    box-shadow: 0 1px 10px rgba(255, 255, 255, 0.3);
    overflow: hidden;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
    width: 100%;
    height: 100%;
    position: relative;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.3);
}

.card img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    display: block;
}

.project-name {
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: pink;
    border-radius: 6px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

/* 响应式设计：调整卡片布局 */
@media (max-width: 768px) {
    .grid-content {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        /* 小屏幕列数 */
        gap: 10px;
    }

    .card img {
        height: 70%;
        /* 调整图片高度 */
    }

    .project-name {
        font-size: 14px;
        /* 调整文字大小 */
    }
}
</style>