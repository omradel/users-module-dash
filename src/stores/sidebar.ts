import { ref } from "vue";
import { defineStore } from "pinia";

export const useSidebar = defineStore("useSidebar", () => {
  const isOpen = ref<boolean>(true);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    toggle,
  };
});
