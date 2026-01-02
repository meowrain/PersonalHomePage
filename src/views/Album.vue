<template>
    <div class="album-container p-4 md:p-8">
        <!-- 页面标题 -->
        <PageHeader title="我的相册" subtitle="记录生活中的美好瞬间" />

        <!-- 分类标签 -->
        <CategoryFilter v-model="activeCategory" :categories="categories" />

        <!-- Loading 状态 -->
        <LoadingSpinner v-if="loading" />

        <!-- 错误提示 -->
        <ErrorMessage v-if="error" :message="error" />

        <!-- 照片网格 -->
        <PhotoGrid v-if="!loading && !error && filteredPhotos.length > 0" :photos="paginatedPhotos"
            @imageError="handleImageError" />

        <!-- 分页控制 -->
        <Pagination v-if="!loading && !error && filteredPhotos.length > 0" :currentPage="currentPage"
            :totalPages="totalPages" @prev="prevPage" @next="nextPage" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import PageHeader from '@/components/common/PageHeader.vue';
import CategoryFilter from '@/components/album/CategoryFilter.vue';
import PhotoGrid from '@/components/album/PhotoGrid.vue';
import Pagination from '@/components/common/Pagination.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';
import { usePagination } from '@/composables';
import type { Photo } from '@/types';

// 状态管理
const loading = ref(false);
const error = ref<string | null>(null);
const photos = ref<Photo[]>([]);
const activeCategory = ref<string>('全部');

// 使用分页组合式函数
const { currentPage, resetPage } = usePagination(12);
const perPage = 12;

// 加载照片数据
async function loadPhotos() {
    try {
        loading.value = true;
        error.value = null;
        const response = await fetch('/src/assets/data/album.json');
        const data = await response.json();
        photos.value = data;
    } catch (err) {
        error.value = err instanceof Error ? err.message : '加载失败，请稍后重试';
    } finally {
        loading.value = false;
    }
}

// 计算属性
const categories = computed(() => {
    const cats = ['全部', ...new Set(photos.value.map(photo => photo.category))];
    return cats;
});

const filteredPhotos = computed(() => {
    if (activeCategory.value === '全部') {
        return photos.value;
    }
    return photos.value.filter(photo => photo.category === activeCategory.value);
});

const paginatedPhotos = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    const end = start + perPage;
    return filteredPhotos.value.slice(start, end);
});

const totalPages = computed(() => {
    return Math.ceil(filteredPhotos.value.length / perPage);
});

// 方法
function handleImageError(photo: Photo) {
    photo.url = '/images/placeholder.png';
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

// 监听分类变化，重置页码
watch(activeCategory, () => {
    resetPage();
});

// 生命周期钩子
onMounted(() => {
    loadPhotos();
});
</script>

<style scoped>
.album-container {
    min-height: calc(100vh - 64px);
    background-color: black;
}

/* 照片网格动画 */
.photo-grid-enter-active,
.photo-grid-leave-active {
    transition: all 0.5s ease;
}

.photo-grid-enter-from,
.photo-grid-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.photo-grid-move {
    transition: transform 0.5s ease;
}

/* 确保图片加载时保持布局 */
img {
    min-height: 200px;
    background: rgba(255, 192, 203, 0.1);
}

/* 响应式调整 */
@media (max-width: 640px) {
    .grid {
        gap: 1rem;
    }
}
</style>