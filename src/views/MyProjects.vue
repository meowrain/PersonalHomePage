<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <NavBar />

        <!-- 调整 main 的上边距 -->
        <main class="container mx-auto px-4 py-8"> <!-- 将 py-16 改为 py-8 -->
            <div class="max-w-4xl mx-auto text-center mb-12"> <!-- 调整 mb-16 为 mb-12 -->
                <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    My Projects
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-300">
                    A collection of my recent work and experiments
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                <div v-for="project in projects" :key="project.id"
                    class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col">
                    <div class="relative aspect-[4/3]">
                        <img :src="project.image" :alt="project.title"
                            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-center space-x-2 mb-4">
                            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.category }}</span>
                        </div>

                        <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            {{ project.title }}
                        </h2>
                        <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 flex-1">
                            {{ project.description }}
                        </p>

                        <div class="flex space-x-4">
                            <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
                                class="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                                Live Demo
                            </a>
                            <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank"
                                class="flex-1 text-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
                                View Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
interface Project {
    id: number
    title: string
    description: string
    image: string
    category: string
    demoUrl?: string
    codeUrl?: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Project One',
        description: 'A modern web application with cutting-edge features',
        image: '/images/placeholder.png',
        category: 'Web Development',
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'An innovative mobile app solution',
        image: '/images/placeholder.png',
        category: 'Mobile Development',
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'A powerful backend system with microservices',
        image: '/images/placeholder.png',
        category: 'Backend Development',
        demoUrl: '#',
        codeUrl: '#'
    }
]
</script>

<style scoped>
/* Custom animations */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}

/* Smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>