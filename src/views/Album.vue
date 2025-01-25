<template>
    <div class="album-container p-4">
        <!-- Loading state with animation -->
        <Transition name="fade">
            <div v-if="loading" class="flex justify-center items-center h-64">
                <span class="loading loading-spinner loading-lg"></span>
            </div>
        </Transition>

        <!-- Error state with animation -->
        <Transition name="slide-down">
            <div v-if="error" class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Error: {{ error }}</span>
            </div>
        </Transition>

        <!-- Category tabs -->
        <div class="tabs tabs-boxed bg-base-200 p-2 mb-8">
            <button v-for="category in categories" :key="category" class="tab"
                :class="{ 'tab-active': activeCategory === category }" @click="activeCategory = category">
                {{ category }}
            </button>
        </div>

        <!-- Photo grid with staggered animations -->
        <TransitionGroup name="staggered-fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            v-if="!loading && !error && filteredPhotos.length > 0">
            <div v-for="(photo, index) in paginatedPhotos" :key="photo.id"
                class="card shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                :style="{ 'transition-delay': `${index * 50}ms` }">
                <figure class="relative aspect-square bg-black">
                    <img :src="photo.url" :alt="photo.description || 'Photo'" class="w-full h-full object-cover"
                        loading="lazy" @error="handleImageError(photo)">
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ photo.title }}</h2>
                    <p>{{ photo.description }}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">View</button>
                    </div>
                </div>
            </div>
        </TransitionGroup>

        <!-- Pagination controls -->
        <div v-if="!loading && !error && photos.length > 0" class="flex justify-center mt-8">
            <button @click="prevPage" :disabled="currentPage === 1" class="btn btn-ghost mr-2">Previous</button>
            <span class="mx-4 self-center">Page {{ currentPage }}</span>
            <button @click="nextPage" class="btn btn-ghost ml-2">Next</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'

interface Photo {
    id: number
    title: string
    url: string
    description?: string
    category: string
}

// Category tabs
const categories = ref<string[]>([])
const activeCategory = ref<string>('全部')

// Fetch image data from JSON
async function loadPhotos() {
    try {
        loading.value = true
        error.value = null
        const response = await fetch('/src/assets/data/album.json')
        const data = await response.json()

        // Extract categories
        categories.value = ['全部', ...data.categories.map((c: any) => c.name)]

        // Flatten photos with category
        photos.value = data.categories.flatMap((category: any) =>
            category.photos.map((photo: any) => ({
                ...photo,
                category: category.name
            }))
        )
    } catch (err) {
        error.value = err instanceof Error ? err.message : 'Unknown error occurred'
    } finally {
        loading.value = false
    }
}

// Reactive state
const photos = ref<Photo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const currentPage = ref(1)
const perPage = 12

// Computed properties
const filteredPhotos = computed(() => {
    if (activeCategory.value === '全部') {
        return photos.value
    }
    return photos.value.filter(photo => photo.category === activeCategory.value)
})

const paginatedPhotos = computed(() => {
    const start = (currentPage.value - 1) * perPage
    const end = start + perPage
    return filteredPhotos.value.slice(start, end)
})

// Methods
function nextPage() {
    currentPage.value++
}

function prevPage() {
    currentPage.value--
}

function handleImageError(photo: Photo) {
    // Fallback to placeholder image
    photo.url = '/images/placeholder.png'
}

onMounted(() => {
    loadPhotos()
})
</script>

<style scoped>
.album-container {
    max-width: 1600px;
    margin: 0 auto;
}

/* Animation styles */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
    transform: translateY(0);
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.staggered-fade-move,
.staggered-fade-enter-active,
.staggered-fade-leave-active {
    transition: all 0.5s ease;
}

.staggered-fade-enter-from,
.staggered-fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.staggered-fade-leave-active {
    position: absolute;
}
</style>