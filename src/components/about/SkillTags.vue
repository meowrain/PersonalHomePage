<template>
    <div class="mb-12">
        <h2 class="text-xl font-bold text-pink-200 mb-6 text-center">技术栈</h2>
        <div class="flex flex-wrap justify-center gap-3">
            <div v-for="skill in skills" :key="skill.name"
                class="group relative px-4 py-2 rounded-full bg-pink-200/5 border border-pink-200/10 hover:border-pink-200/30 transition-all duration-300">
                <div class="flex items-center space-x-2">
                    <font-awesome-icon v-if="Array.isArray(skill.icon)" :icon="skill.icon"
                        class="w-5 h-5 text-pink-200/70 group-hover:text-pink-200" />
                    <img v-else :src="skill.icon" :alt="skill.name" class="w-5 h-5" />
                    <span class="text-pink-200/70 group-hover:text-pink-200">{{ skill.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Skill } from '@/types';

interface Props {
    skills: Skill[];
}

defineProps<Props>();
</script>
