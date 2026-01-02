<template>
    <div class="masonry-grid">
        <div v-for="(photo, index) in photos" :key="photo.id"
            class="masonry-item group relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-gray-800/40 border border-pink-200/20 hover:border-pink-400/50 transition-all duration-300 cursor-pointer mb-6"
            @click="$emit('photoClick', index)"
            @mousemove="handleMouseMove($event, index)"
            @mouseleave="handleMouseLeave(index)"
            :style="{ animationDelay: `${index * 0.05}s` }">

            <!-- 鼠标跟随发光 -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                :style="cardStyles[index]">
            </div>

            <!-- 背景网格 -->
            <div class="absolute inset-0 opacity-5 pointer-events-none">
                <div class="w-full h-full" style="background-image: linear-gradient(rgba(244,114,182,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.15) 1px, transparent 1px); background-size: 20px 20px;"></div>
            </div>

            <!-- 扫描线效果 -->
            <div class="scanline absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition duration-700 pointer-events-none"></div>

            <!-- 发光边框层 -->
            <div class="absolute -inset-[1px] bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <!-- 二次元装饰 -->
            <div class="absolute top-2 right-2 text-lg opacity-0 group-hover:opacity-100 transition duration-300 animate-bounce pointer-events-none">📸</div>

            <!-- 照片 -->
            <img :src="photo.url" :alt="photo.description"
                class="w-full object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
                loading="lazy" @error="$emit('imageError', photo)" />

            <!-- 渐变遮罩 -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            </div>

            <!-- 点击提示图标 -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                <div class="relative">
                    <div class="absolute inset-0 bg-pink-500/30 rounded-full blur-lg"></div>
                    <font-awesome-icon :icon="['fas', 'expand']" class="relative text-4xl text-white/80 transform group-hover:scale-125 transition-transform duration-300" />
                </div>
            </div>

            <!-- 照片信息 -->
            <div
                class="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30">
                <div class="relative">
                    <div class="absolute -inset-2 bg-pink-500/10 rounded-lg blur-lg"></div>
                    <div class="relative">
                        <h3 class="text-lg font-bold text-pink-200 mb-2">{{ photo.title }}</h3>
                        <p class="text-sm text-pink-200/70 mb-3">{{ photo.description || photo.date }}</p>
                        <!-- 标签 -->
                        <div v-if="photo.tags && photo.tags.length > 0" class="flex flex-wrap gap-2">
                            <span v-for="tag in photo.tags" :key="tag"
                                class="px-2 py-1 text-xs bg-pink-500/10 text-pink-200 rounded-full border border-pink-400/30">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 角落装饰 -->
            <div class="absolute top-0 left-0 w-1 h-1 border-t-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 z-20"></div>
            <div class="absolute top-0 right-0 w-1 h-1 border-t-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-75 z-20"></div>
            <div class="absolute bottom-0 left-0 w-1 h-1 border-b-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-75 z-20"></div>
            <div class="absolute bottom-0 right-0 w-1 h-1 border-b-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition duration-300 delay-100 z-20"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Photo } from '@/types';

interface Props {
    photos: Photo[];
}

const props = defineProps<Props>();
const cardStyles = ref(props.photos.map(() => ({})));

defineEmits<{
    imageError: [photo: Photo];
    photoClick: [index: number];
}>();

const handleMouseMove = (event: MouseEvent, index: number) => {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    cardStyles.value[index] = {
        background: `radial-gradient(400px circle at ${x}px ${y}px, rgba(236, 72, 153, 0.08), transparent 40%)`
    };
};

const handleMouseLeave = (index: number) => {
    cardStyles.value[index] = {};
};
</script>

<style scoped>
/* 瀑布流网格布局 */
.masonry-grid {
    column-count: 1;
    column-gap: 1.5rem;
}

@media (min-width: 640px) {
    .masonry-grid {
        column-count: 2;
    }
}

@media (min-width: 1024px) {
    .masonry-grid {
        column-count: 3;
    }
}

@media (min-width: 1280px) {
    .masonry-grid {
        column-count: 4;
    }
}

/* 防止卡片在列之间断开 */
.masonry-item {
    break-inside: avoid;
    page-break-inside: avoid;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.1);
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.masonry-item:hover {
    box-shadow: 0 0 25px rgba(236, 72, 153, 0.2);
}

/* 扫描线动画 */
.scanline {
    background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(244, 114, 182, 0.1) 50%,
        transparent 100%
    );
    animation: scan 2s linear infinite;
}

@keyframes scan {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100%);
    }
}
</style>
