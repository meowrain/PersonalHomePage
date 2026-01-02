<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(item, index) in items" :key="index"
            class="group relative overflow-hidden rounded-2xl bg-pink-200/5 border border-pink-200/10 hover:border-pink-200/30 transition-all duration-500"
            @mousemove="handleMouseMove($event, index)" @mouseleave="handleMouseLeave(index)">
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                :style="cardStyles[index]">
            </div>
            <RouterLink :to="item.url" class="block p-6 relative z-10">
                <div class="flex flex-col h-full">
                    <div class="flex items-center space-x-3 mb-4">
                        <component :is="item.icon" class="w-8 h-8 text-pink-200" />
                        <h3 class="text-xl font-bold text-pink-200">{{ item.name }}</h3>
                    </div>
                    <p class="text-pink-200/70 mb-6">{{ item.description }}</p>
                    <div
                        class="mt-auto flex items-center text-pink-200/70 group-hover:text-pink-200 transition-colors duration-300">
                        <span>了解更多</span>
                        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { NavigationItem } from '@/types';

interface Props {
    items: NavigationItem[];
}

const props = defineProps<Props>();

const cardStyles = ref(props.items.map(() => ({})));

const handleMouseMove = (event: MouseEvent, index: number) => {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    cardStyles.value[index] = {
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,192,203,0.06), transparent 40%)`
    };
};

const handleMouseLeave = (index: number) => {
    cardStyles.value[index] = {};
};
</script>
