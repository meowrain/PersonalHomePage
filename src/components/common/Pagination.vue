<template>
    <div class="flex justify-center items-center space-x-4 mt-12">
        <button @click="$emit('prev')"
            class="px-4 py-2 rounded-lg bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="currentPage === 1">
            上一页
        </button>
        <span class="text-pink-200">第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
        <button @click="$emit('next')"
            class="px-4 py-2 rounded-lg bg-pink-200/10 text-pink-200 hover:bg-pink-200/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="currentPage >= totalPages">
            下一页
        </button>
    </div>
</template>

<script setup lang="ts">
interface Props {
    currentPage: number;
    totalPages: number;
}

defineProps<Props>();
defineEmits<{
    prev: [];
    next: [];
}>();
</script>
