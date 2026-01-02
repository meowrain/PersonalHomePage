<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a v-for="link in links" :key="link.name" :href="link.url" target="_blank"
            class="flex items-center justify-center space-x-3 px-6 py-3 rounded-lg bg-pink-200/5 border border-pink-200/10 hover:border-pink-200/30 hover:bg-pink-200/10 transition-all duration-300 group">
            <font-awesome-icon :icon="link.icon" class="w-5 h-5 text-pink-200/70 group-hover:text-pink-200" />
            <span class="text-pink-200/70 group-hover:text-pink-200">{{ link.name }}</span>
        </a>
    </div>
</template>

<script setup lang="ts">
import type { SocialLink } from '@/types';

interface Props {
    links: SocialLink[];
}

defineProps<Props>();
</script>
