import { ref } from 'vue';

/**
 * 数据加载的组合式函数
 * @param fetchFn 数据获取函数
 */
export function useDataFetch<T>(fetchFn: () => Promise<T>) {
  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchData = async () => {
    try {
      loading.value = true;
      error.value = null;
      data.value = await fetchFn();
    } catch (err) {
      error.value = err instanceof Error ? err.message : '加载失败，请稍后重试';
    } finally {
      loading.value = false;
    }
  };

  const refetch = () => {
    return fetchData();
  };

  return {
    data,
    loading,
    error,
    fetchData,
    refetch
  };
}
