<template>
    <div class="projects-container p-4 md:p-8">
        <!-- 页面标题 -->
        <PageHeader title="我的项目" subtitle="这里展示了我的一些个人项目作品" />

        <!-- 项目网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ProjectCard v-for="project in PROJECTS" :key="project.id" :project="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/common/PageHeader.vue';
import ProjectCard from '@/components/projects/ProjectCard.vue';
import { PROJECTS } from '@/utils/projectData';
</script>

<style scoped>
.projects-container {
    min-height: calc(100vh - 64px);
    /* 减去导航栏高度 */
    background-color: black;
}

.project-card {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 192, 203, 0.1);
}

.project-card:hover {
    border-color: rgba(255, 192, 203, 0.3);
}

/* 确保在移动设备上有合适的间距 */
@media (max-width: 640px) {
    .project-card {
        margin-bottom: 1.5rem;
    }
}
</style>