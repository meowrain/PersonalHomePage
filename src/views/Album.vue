<template>
    <div class="album-container p-4 md:p-8">
        <!-- 页面标题 -->
        <PageHeader title="我的相册" subtitle="记录生活中的美好瞬间" />

        <!-- 日期筛选器 -->
        <DateFilter v-model="selectedDate" :years="availableYears" />

        <!-- 分类标签 -->
        <CategoryFilter v-model="activeCategory" :categories="categories" />

        <!-- Loading 状态 -->
        <LoadingSpinner v-if="loading" />

        <!-- 错误提示 -->
        <ErrorMessage v-if="error" :message="error" />

        <!-- 照片网格 -->
        <PhotoGrid v-if="!loading && !error && filteredPhotos.length > 0" :photos="paginatedPhotos"
            @imageError="handleImageError" @photoClick="handlePhotoClick" />

        <!-- 分页控制 -->
        <Pagination v-if="!loading && !error && filteredPhotos.length > 0" :currentPage="currentPage"
            :totalPages="totalPages" @prev="prevPage" @next="nextPage" />

        <!-- 图片灯箱预览 -->
        <PhotoLightbox
            v-model:visible="lightboxVisible"
            :photos="filteredPhotos"
            :initialIndex="lightboxIndex"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import PageHeader from '@/components/common/PageHeader.vue';
import CategoryFilter from '@/components/album/CategoryFilter.vue';
import DateFilter from '@/components/album/DateFilter.vue';
import PhotoGrid from '@/components/album/PhotoGrid.vue';
import PhotoLightbox from '@/components/album/PhotoLightbox.vue';
import Pagination from '@/components/common/Pagination.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';
import { usePagination } from '@/composables';
import type { Photo } from '@/types';

// 状态管理
const loading = ref(false);
const error = ref<string | null>(null);
const rawPhotos = ref<Photo[]>([]); // 原始数据
const photos = ref<Photo[]>([]); // 处理后的数据（添加默认分类）
const activeCategory = ref<string>('全部');
const selectedDate = ref<{ year: string; month: string }>({ year: '全部', month: '全部' });

// 灯箱状态
const lightboxVisible = ref(false);
const lightboxIndex = ref(0);

// 使用分页组合式函数
const { currentPage, resetPage } = usePagination(12);
const perPage = 12;

// 加载照片数据
async function loadPhotos() {
    try {
        loading.value = true;
        error.value = null;
        const response = await fetch('/api/i/images.json');
        const data: Photo[] = await response.json();

        // 处理数据：添加 URL 前缀和默认分类
        rawPhotos.value = data;
        photos.value = data.map((photo, index) => ({
            ...photo,
            id: index,
            url: `https://blog.meowrain.cn${photo.url}`,
            title: photo.filename || photo.date,
            description: photo.date,
            category: photo.category || '默认分类',
            tags: photo.tags || []
        }));
    } catch (err) {
        error.value = err instanceof Error ? err.message : '加载失败，请稍后重试';
    } finally {
        loading.value = false;
    }
}

// 计算可用的年份
const availableYears = computed(() => {
    const years = new Set(photos.value.map(photo => photo.year).filter(Boolean));
    return ['全部', ...Array.from(years).sort((a, b) => b.localeCompare(a))];
});

// 计算分类
const categories = computed(() => {
    const cats = new Set(photos.value.map(photo => photo.category || '默认分类'));
    return ['全部', ...Array.from(cats).sort()];
});

// 筛选照片
const filteredPhotos = computed(() => {
    let result = photos.value;

    // 按分类筛选
    if (activeCategory.value !== '全部') {
        result = result.filter(photo => (photo.category || '默认分类') === activeCategory.value);
    }

    // 按年份筛选
    if (selectedDate.value.year !== '全部') {
        result = result.filter(photo => photo.year === selectedDate.value.year);

        // 按月份筛选
        if (selectedDate.value.month !== '全部') {
            result = result.filter(photo => photo.month === selectedDate.value.month);
        }
    }

    return result;
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

function handlePhotoClick(index: number) {
    // 计算在全部筛选结果中的索引
    const actualIndex = (currentPage.value - 1) * perPage + index;
    lightboxIndex.value = actualIndex;
    lightboxVisible.value = true;
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

// 监听筛选条件变化，重置页码
watch([activeCategory, selectedDate], () => {
    resetPage();
}, { deep: true });

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
</style>