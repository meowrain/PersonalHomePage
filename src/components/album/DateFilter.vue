<template>
    <div class="flex flex-col items-center gap-4 mb-8">
        <!-- 年份选择器 -->
        <div class="flex justify-center flex-wrap gap-3">
            <button
                v-for="year in years"
                :key="year"
                class="px-4 py-2 rounded-full text-sm transition-all duration-200"
                :class="{
                    'bg-pink-500 text-white': selectedYear === year,
                    'bg-pink-200/10 text-pink-200 hover:bg-pink-200/20': selectedYear !== year
                }"
                @click="selectYear(year)"
            >
                {{ year }}
            </button>
        </div>

        <!-- 月份选择器 (仅在选择了年份时显示) -->
        <div v-if="selectedYear !== '全部'" class="flex justify-center flex-wrap gap-2">
            <button
                v-for="month in availableMonths"
                :key="month.value"
                class="px-3 py-1.5 rounded-full text-xs transition-all duration-200"
                :class="{
                    'bg-pink-400 text-white': selectedMonth === month.value,
                    'bg-pink-200/10 text-pink-200 hover:bg-pink-200/20': selectedMonth !== month.value
                }"
                @click="selectMonth(month.value)"
            >
                {{ month.label }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface Props {
    years: string[];
    modelValue: { year: string; month: string };
}

const props = defineProps<Props>();

const emit = defineEmits<{
    'update:modelValue': [value: { year: string; month: string }];
}>();

const selectedYear = ref(props.modelValue.year);
const selectedMonth = ref(props.modelValue.month);

// 月份列表
const allMonths = [
    { value: '全部', label: '全部月份' },
    { value: '01', label: '1月' },
    { value: '02', label: '2月' },
    { value: '03', label: '3月' },
    { value: '04', label: '4月' },
    { value: '05', label: '5月' },
    { value: '06', label: '6月' },
    { value: '07', label: '7月' },
    { value: '08', label: '8月' },
    { value: '09', label: '9月' },
    { value: '10', label: '10月' },
    { value: '11', label: '11月' },
    { value: '12', label: '12月' }
];

// 计算可用的月份（基于该年有数据的月份）
const availableMonths = computed(() => {
    // 这里先返回全部月份，父组件可以根据实际数据过滤
    return allMonths;
});

function selectYear(year: string) {
    selectedYear.value = year;
    selectedMonth.value = '全部';
    emit('update:modelValue', { year: selectedYear.value, month: selectedMonth.value });
}

function selectMonth(month: string) {
    selectedMonth.value = month;
    emit('update:modelValue', { year: selectedYear.value, month: selectedMonth.value });
}

// 监听外部变化
watch(() => props.modelValue, (newValue) => {
    selectedYear.value = newValue.year;
    selectedMonth.value = newValue.month;
}, { deep: true });
</script>
