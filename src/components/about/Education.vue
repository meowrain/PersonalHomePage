<template>
    <div class="mt-12 border-t border-pink-200/10 pt-8">
        <h2 class="text-xl font-bold text-pink-200 mb-6 text-center">教育经历</h2>
        <div class="space-y-4">
            <div class="flex items-center justify-between p-4 rounded-lg bg-pink-200/5 border border-pink-200/10">
                <div>
                    <h3 class="text-pink-200 font-bold">{{ university }}</h3>
                    <p class="text-pink-200/70 text-sm">{{ major }}</p>
                </div>
                <span class="text-pink-200/50">{{ period }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    university: string;
    major: string;
    period: string;
}

defineProps<Props>();
</script>
