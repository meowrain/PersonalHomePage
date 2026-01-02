<template>
    <div class="bg-red-500/10 border border-red-500/20 text-pink-200 p-4 rounded-lg mb-8">
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    message: string;
}

defineProps<Props>();
</script>
