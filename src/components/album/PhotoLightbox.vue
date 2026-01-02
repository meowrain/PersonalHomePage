<template>
    <Transition name="lightbox">
        <div v-if="visible" class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            @click="handleBackdropClick">
            <!-- 关闭按钮 -->
            <button
                class="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-all duration-200"
                @click="close"
                title="关闭 (ESC)">
                <font-awesome-icon :icon="['fas', 'times']" class="text-xl" />
            </button>

            <!-- 上一张按钮 -->
            <button
                v-if="hasPrevious"
                class="absolute left-4 md:left-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-all duration-200"
                @click.stop="previous"
                title="上一张 (←)">
                <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-xl" />
            </button>

            <!-- 下一张按钮 -->
            <button
                v-if="hasNext"
                class="absolute right-4 md:right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-all duration-200"
                @click.stop="next"
                title="下一张 (→)">
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-xl" />
            </button>

            <!-- 工具栏 -->
            <div class="absolute top-4 left-4 md:top-8 md:left-8 z-50 flex gap-2">
                <!-- 放大按钮 -->
                <button
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-all duration-200"
                    @click.stop="zoomIn"
                    title="放大 (+)">
                    <font-awesome-icon :icon="['fas', 'search-plus']" class="text-xl" />
                </button>

                <!-- 缩小按钮 -->
                <button
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-all duration-200"
                    @click.stop="zoomOut"
                    title="缩小 (-)">
                    <font-awesome-icon :icon="['fas', 'search-minus']" class="text-xl" />
                </button>

                <!-- 重置缩放按钮 -->
                <button
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-all duration-200"
                    @click.stop="resetZoom"
                    title="重置 (0)">
                    <font-awesome-icon :icon="['fas', 'search']" class="text-xl" />
                </button>

                <!-- 下载按钮 -->
                <button
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-all duration-200"
                    @click.stop="downloadImage"
                    title="下载图片">
                    <font-awesome-icon :icon="['fas', 'download']" class="text-xl" />
                </button>
            </div>

            <!-- 图片容器 -->
            <div class="relative max-w-full max-h-full p-4 overflow-hidden" @click.stop>
                <img
                    :src="currentPhoto.url"
                    :alt="currentPhoto.title"
                    class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform duration-200"
                    :style="{ transform: `scale(${zoomLevel})` }"
                    @error="handleImageError"
                />

                <!-- 图片信息 -->
                <div v-if="currentPhoto.title || currentPhoto.description"
                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                    <h3 v-if="currentPhoto.title" class="text-xl font-bold text-pink-200 mb-2">
                        {{ currentPhoto.title }}
                    </h3>
                    <p v-if="currentPhoto.description" class="text-sm text-pink-200/70 mb-3">
                        {{ currentPhoto.description }}
                    </p>
                    <div v-if="currentPhoto.tags && currentPhoto.tags.length > 0" class="flex flex-wrap gap-2">
                        <span v-for="tag in currentPhoto.tags" :key="tag"
                            class="px-2 py-1 text-xs bg-pink-200/10 text-pink-200 rounded-full">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- 缩放指示器 -->
            <div v-if="zoomLevel !== 1" class="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-sm text-pink-200/70 bg-black/50 px-3 py-1 rounded-full">
                {{ Math.round(zoomLevel * 100) }}%
            </div>

            <!-- 图片计数 -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-pink-200/50">
                {{ currentIndex + 1 }} / {{ photos.length }}
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import type { Photo } from '@/types';

interface Props {
    visible: boolean;
    photos: Photo[];
    initialIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {
    initialIndex: 0
});

const emit = defineEmits<{
    'update:visible': [value: boolean];
    'update:index': [value: number];
}>();

const currentIndex = ref(props.initialIndex);
const zoomLevel = ref(1);

const currentPhoto = computed(() => props.photos[currentIndex.value]);

const hasPrevious = computed(() => currentIndex.value > 0);
const hasNext = computed(() => currentIndex.value < props.photos.length - 1);

function close() {
    emit('update:visible', false);
}

function previous() {
    if (hasPrevious.value) {
        currentIndex.value--;
        emit('update:index', currentIndex.value);
        resetZoom();
    }
}

function next() {
    if (hasNext.value) {
        currentIndex.value++;
        emit('update:index', currentIndex.value);
        resetZoom();
    }
}

function zoomIn() {
    zoomLevel.value = Math.min(zoomLevel.value + 0.25, 3);
}

function zoomOut() {
    zoomLevel.value = Math.max(zoomLevel.value - 0.25, 0.5);
}

function resetZoom() {
    zoomLevel.value = 1;
}

async function downloadImage() {
    try {
        const response = await fetch(currentPhoto.value.url);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = currentPhoto.value.filename || currentPhoto.value.title || 'photo.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('下载失败:', error);
        // 降级方案：直接打开图片
        window.open(currentPhoto.value.url, '_blank');
    }
}

function handleBackdropClick() {
    close();
}

function handleImageError() {
    // 可以处理图片加载错误
}

function handleKeydown(event: KeyboardEvent) {
    if (!props.visible) return;

    switch (event.key) {
        case 'Escape':
            close();
            break;
        case 'ArrowLeft':
            previous();
            break;
        case 'ArrowRight':
            next();
            break;
        case '+':
        case '=':
            zoomIn();
            break;
        case '-':
        case '_':
            zoomOut();
            break;
        case '0':
            resetZoom();
            break;
    }
}

// 监听 visible 变化，重置索引和缩放
watch(() => props.visible, (newVisible) => {
    if (newVisible) {
        currentIndex.value = props.initialIndex;
        resetZoom();
    }
});

// 监听 initialIndex 变化
watch(() => props.initialIndex, (newIndex) => {
    currentIndex.value = newIndex;
});

// 键盘事件
onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* 灯箱动画 */
.lightbox-enter-active,
.lightbox-leave-active {
    transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
    opacity: 0;
}

.lightbox-enter-active img,
.lightbox-leave-active img {
    transition: transform 0.3s ease;
}

.lightbox-enter-from img,
.lightbox-leave-to img {
    transform: scale(0.9);
}
</style>
