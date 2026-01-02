import { ref, computed } from 'vue';

/**
 * 分页功能的组合式函数
 * @param itemsPerPage 每页显示的项目数量
 */
export function usePagination<T>(itemsPerPage: number = 12) {
  const currentPage = ref(1);

  const paginatedItems = computed(() => {
    return (items: T[]) => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return items.slice(start, end);
    };
  });

  const totalPages = computed(() => {
    return (totalItems: number) => Math.ceil(totalItems / itemsPerPage);
  });

  const nextPage = (maxPage: number) => {
    if (currentPage.value < maxPage) {
      currentPage.value++;
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  const resetPage = () => {
    currentPage.value = 1;
  };

  return {
    currentPage,
    paginatedItems,
    totalPages,
    nextPage,
    prevPage,
    resetPage
  };
}
