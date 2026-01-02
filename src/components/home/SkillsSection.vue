<template>
    <div class="mt-24">
        <h2 class="text-3xl font-bold text-pink-200 text-center mb-12">我的技能栈</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="skill in skills" :key="skill.name"
                class="group p-6 rounded-xl bg-pink-200/5 border border-pink-200/10 hover:border-pink-200/30 transition-all duration-300">
                <div class="flex flex-col items-center text-center">
                    <img v-if="typeof skill.icon === 'string'" :src="skill.icon" :alt="skill.name"
                        class="w-12 h-12 mb-4">
                    <h3 class="text-pink-200 font-bold mb-2">{{ skill.name }}</h3>
                    <div class="w-full bg-pink-200/10 rounded-full h-2 mb-2">
                        <div class="bg-pink-400 h-full rounded-full transition-all duration-1000"
                            :style="{ width: skill.level + '%' }">
                        </div>
                    </div>
                    <span class="text-pink-200/50 text-sm">{{ skill.level }}%</span>
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
