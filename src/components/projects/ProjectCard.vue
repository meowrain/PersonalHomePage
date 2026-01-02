<template>
    <div
        class="project-card bg-black/30 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-200/20 transition-all duration-300 transform hover:-translate-y-1">
        <!-- 项目预览图 -->
        <div class="relative aspect-video">
            <img :src="project.image" :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <!-- 项目信息 -->
        <div class="p-6">
            <!-- 项目类型标签 -->
            <div class="flex items-center space-x-2 mb-4">
                <div class="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span class="text-sm text-pink-200/70">{{ project.category }}</span>
            </div>

            <h2 class="text-xl font-bold text-pink-200 mb-3">{{ project.title }}</h2>
            <p class="text-pink-200/70 text-sm mb-6">{{ project.description }}</p>

            <!-- 技术标签 -->
            <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in project.technologies" :key="tech"
                    class="px-2 py-1 text-xs bg-pink-200/10 text-pink-200 rounded-full">
                    {{ tech }}
                </span>
            </div>

            <!-- 项目链接 -->
            <div class="flex space-x-4">
                <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
                    class="flex-1 text-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200">
                    在线预览
                </a>
                <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank"
                    class="flex-1 text-center px-4 py-2 bg-gray-800 text-pink-200 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    查看代码
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types';

interface Props {
    project: Project;
}

defineProps<Props>();
</script>

<style scoped>
.project-card {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 192, 203, 0.1);
}

.project-card:hover {
    border-color: rgba(255, 192, 203, 0.3);
}
</style>
