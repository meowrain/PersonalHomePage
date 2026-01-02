<template>
    <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-pink-200 mb-4">{{ title }}</h1>
        <p v-if="subtitle" class="text-pink-200/70">{{ subtitle }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    subtitle?: string;
}

defineProps<Props>();
</script>
