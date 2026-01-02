<template>
    <TransitionGroup name="photo-grid" tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="photo in photos" :key="photo.id"
            class="group relative aspect-square rounded-lg overflow-hidden bg-black/30 border border-pink-200/10 hover:border-pink-200/30 transition-all duration-300">
            <!-- 照片 -->
            <img :src="photo.url" :alt="photo.description"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy" @error="$emit('imageError', photo)" />

            <!-- 渐变遮罩 -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>

            <!-- 照片信息 -->
            <div
                class="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="text-lg font-bold text-pink-200 mb-2">{{ photo.title }}</h3>
                <p class="text-sm text-pink-200/70 mb-3">{{ photo.description }}</p>
                <!-- 标签 -->
                <div class="flex flex-wrap gap-2">
                    <span v-for="tag in photo.tags" :key="tag"
                        class="px-2 py-1 text-xs bg-pink-200/10 text-pink-200 rounded-full">
                        {{ tag }}
                    </span>
                </div>
            </div>
        </div>
    </TransitionGroup>
</template>

<script setup lang="ts">
import type { Photo } from '@/types';

interface Props {
    photos: Photo[];
}

defineProps<Props>();
defineEmits<{
    imageError: [photo: Photo];
}>();
</script>

<style scoped>
.photo-grid-enter-active,
.photo-grid-leave-active {
    transition: all 0.3s ease;
}

.photo-grid-enter-from,
.photo-grid-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
