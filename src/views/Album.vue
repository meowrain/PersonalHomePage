<template>
    <div class="album-container p-4 md:p-8 relative overflow-hidden">
        <!-- 背景装饰光晕 -->
        <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <!-- 二次元装饰 - 飘浮的星星和爱心 -->
        <div class="floating-star absolute top-20 left-10 text-4xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 0s;">📸</div>
        <div class="floating-star absolute top-40 right-20 text-3xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 1s;">✨</div>
        <div class="floating-star absolute bottom-40 left-20 text-3xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 2s;">💖</div>
        <div class="floating-star absolute top-60 left-1/3 text-2xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 0.5s;">🌸</div>
        <div class="floating-star absolute bottom-60 right-1/3 text-2xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 1.5s;">✨</div>
        <div class="floating-star absolute top-1/2 right-10 text-3xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 2.5s;">💫</div>
        <div class="floating-star absolute bottom-20 right-40 text-2xl opacity-20 pointer-events-none hidden md:block" style="animation-delay: 3s;">🎀</div>

        <div class="relative z-10">
            <!-- 页面标题 -->
            <PageHeader title="我的相册 📷" subtitle="记录生活中的美好瞬间" />

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

        // 根据选择的分类决定 API 端点
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/';
        let apiUrl = `${apiBaseUrl}/api/i/images.json`;
        if (activeCategory.value === '二次元') {
            apiUrl = `${apiBaseUrl}/api/i/acg.json`;
        } else if (activeCategory.value === '生活') {
            apiUrl = `${apiBaseUrl}/api/i/life.json`;
        }

        const response = await fetch(apiUrl);
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
    const years = new Set(
        photos.value
            .map(photo => photo.year)
            .filter((year): year is string => Boolean(year))
    );
    return ['全部', ...Array.from(years).sort((a, b) => b.localeCompare(a))];
});

// 计算分类
const categories = computed(() => {
    // 固定的二次元和生活分类
    const fixedCategories = ['二次元', '生活'];
    // 从当前照片中提取的分类
    const cats = new Set(photos.value.map(photo => photo.category || '默认分类'));
    return ['全部', ...fixedCategories, ...Array.from(cats).sort()];
});

// 筛选照片
const filteredPhotos = computed(() => {
    let result = photos.value;

    // 如果是二次元或生活分类，不需要再按 category 筛选（因为已经从专门的 API 加载）
    // 其他分类需要按 category 字段筛选
    if (activeCategory.value !== '全部' && activeCategory.value !== '二次元' && activeCategory.value !== '生活') {
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

// 监听分类变化，当切换到二次元或生活时重新加载数据
watch(activeCategory, (newCategory, oldCategory) => {
    // 只在切换到二次元或生活，或从它们切换出来时重新加载
    if (['二次元', '生活'].includes(newCategory) || ['二次元', '生活'].includes(oldCategory)) {
        // 重置日期筛选
        selectedDate.value = { year: '全部', month: '全部' };
        loadPhotos();
    }
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
</style>
