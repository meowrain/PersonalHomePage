import { ref } from 'vue';

/**
 * 鼠标悬停效果的组合式函数
 * 用于创建跟随鼠标的光晕效果
 */
export function useMouseGlow(itemCount: number) {
  const cardStyles = ref(Array(itemCount).fill({}));

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

  return {
    cardStyles,
    handleMouseMove,
    handleMouseLeave
  };
}
