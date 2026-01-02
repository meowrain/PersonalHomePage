<template>
    <div class="masonry-grid">
        <div v-for="(photo, index) in photos" :key="photo.id"
            class="masonry-item group relative rounded-lg overflow-hidden bg-black/30 border border-pink-200/10 hover:border-pink-200/30 transition-all duration-300 cursor-pointer mb-6"
            @click="$emit('photoClick', index)">
            <!-- 照片 -->
            <img :src="photo.url" :alt="photo.description"
                class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy" @error="$emit('imageError', photo)" />

            <!-- 渐变遮罩 -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>

            <!-- 点击提示图标 -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <font-awesome-icon :icon="['fas', 'expand']" class="text-4xl text-white/80" />
            </div>

            <!-- 照片信息 -->
            <div
                class="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="text-lg font-bold text-pink-200 mb-2">{{ photo.title }}</h3>
                <p class="text-sm text-pink-200/70 mb-3">{{ photo.description || photo.date }}</p>
                <!-- 标签 -->
                <div v-if="photo.tags && photo.tags.length > 0" class="flex flex-wrap gap-2">
                    <span v-for="tag in photo.tags" :key="tag"
                        class="px-2 py-1 text-xs bg-pink-200/10 text-pink-200 rounded-full">
                        {{ tag }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types';

interface Props {
    photos: Photo[];
}

defineProps<Props>();
defineEmits<{
    imageError: [photo: Photo];
    photoClick: [index: number];
}>();
</script>

<style scoped>
/* 瀑布流布局 */
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

.masonry-item {
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: 1.5rem;
}

/* 确保图片加载时保持布局 */
img {
    min-height: 200px;
    background: rgba(255, 192, 203, 0.1);
}

/* 淡入动画 */
.masonry-item {
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
