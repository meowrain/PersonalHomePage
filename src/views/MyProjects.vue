<template>
    <div class="projects-container p-4 md:p-8">
        <!-- 页面标题 -->
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-pink-200 mb-4">我的项目</h1>
            <p class="text-pink-200/70">这里展示了我的一些个人项目作品</p>
        </div>

        <!-- 项目网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div v-for="project in projects" :key="project.id"
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
        </div>
    </div>
</template>

<script setup lang="ts">
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    demoUrl?: string;
    codeUrl?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "个人博客系统",
        description: "使用 Vue3 + TypeScript 开发的个人博客系统，支持 Markdown 写作",
        image: "/images/projects/blog.png",
        category: "Web 全栈开发",
        technologies: ["Vue3", "TypeScript", "Node.js", "MongoDB"],
        demoUrl: "https://blog.meowrain.cn",
        codeUrl: "https://github.com/meowrain/blog"
    },
    {
        id: 2,
        title: "Notebook",
        description: "一个简洁的在线笔记本应用，支持实时保存和 Markdown 格式",
        image: "/images/projects/notebook.png",
        category: "前端开发",
        technologies: ["Vue3", "Vite", "TailwindCSS"],
        demoUrl: "https://notebook.meowrain.cn",
        codeUrl: "https://github.com/meowrain/notebook"
    },
    {
        id: 3,
        title: "TodoList",
        description: "基于 Vue3 的待办事项管理应用，支持任务分类和提醒",
        image: "/images/projects/todo.png",
        category: "前端开发",
        technologies: ["Vue3", "Pinia", "TailwindCSS"],
        codeUrl: "https://github.com/meowrain/TodoList"
    }
];
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