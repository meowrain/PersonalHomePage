<template>
    <div class="album-container p-4 md:p-8">
        <!-- 页面标题 -->
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-pink-200 mb-4">我的相册</h1>
            <p class="text-pink-200/70">记录生活中的美好瞬间</p>
        </div>

        <!-- 分类标签 -->
        <div class="flex justify-center flex-wrap gap-4 mb-8">
            <button v-for="category in categories" :key="category"
                class="px-4 py-2 rounded-full text-sm transition-all duration-200" :class="{
                    'bg-pink-500 text-white': activeCategory === category,
                    'bg-pink-200/10 text-pink-200 hover:bg-pink-200/20': activeCategory !== category
                }" @click="activeCategory = category">
                {{ category }}
            </button>
        </div>

        <!-- Loading 状态 -->
        <div v-if="loading" class="flex justify-center items-center h-64">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-200"></div>
        </div>

        <!-- 错误提示 -->
        <div v-if="error" class="bg-red-500/10 border border-red-500/20 text-pink-200 p-4 rounded-lg mb-8">
            <p>{{ error }}</p>
        </div>

        <!-- 照片网格 -->
        <TransitionGroup name="photo-grid" tag="div"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            v-if="!loading && !error && filteredPhotos.length > 0">
            <div v-for="photo in paginatedPhotos" :key="photo.id"
                class="group relative aspect-square rounded-lg overflow-hidden bg-black/30 border border-pink-200/10 hover:border-pink-200/30 transition-all duration-300">
                <!-- 照片 -->
                <img :src="photo.url" :alt="photo.description"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy" @error="handleImageError(photo)" />

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

        <!-- 分页控制 -->
        <div v-if="!loading && !error && photos.length > 0" class="flex justify-center items-center space-x-4 mt-12">
            <button @click="prevPage"
                class="px-4 py-2 rounded-lg bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="currentPage === 1">
                上一页
            </button>
            <span class="text-pink-200">第 {{ currentPage }} 页</span>
            <button @click="nextPage"
                class="px-4 py-2 rounded-lg bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-colors duration-200">
                下一页
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Photo {
    id: number;
    title: string;
    url: string;
    description?: string;
    category: string;
    tags: string[];
}

// 状态管理
const loading = ref(false);
const error = ref<string | null>(null);
const photos = ref<Photo[]>([]);
const activeCategory = ref<string>('全部');
const currentPage = ref(1);
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
    const maxPage = Math.ceil(filteredPhotos.value.length / perPage);
    if (currentPage.value < maxPage) {
        currentPage.value++;
    }
}

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