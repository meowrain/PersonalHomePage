<template>
    <div class="flex justify-center flex-wrap gap-4 mb-8">
        <button v-for="category in categories" :key="category"
            class="px-4 py-2 rounded-full text-sm transition-all duration-200" :class="{
                'bg-pink-500 text-white': modelValue === category,
                'bg-pink-200/10 text-pink-200 hover:bg-pink-200/20': modelValue !== category
            }" @click="$emit('update:modelValue', category)">
            {{ category }}
        </button>
    </div>
</template>

<script setup lang="ts">
interface Props {
    categories: string[];
    modelValue: string;
}

defineProps<Props>();
defineEmits<{
    'update:modelValue': [value: string];
}>();
</script>
