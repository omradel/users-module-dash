<template>
  <div class="table-container w-full overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th
            class="p-[8px] text-left border-[1px] border-[#ddd] bg-[#f4f4f4]"
            v-for="(col, index) in columns"
            :key="index"
          >
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedData" :key="index">
          <td
            class="p-[8px] text-left border-[1px] border-[#ddd]"
            v-for="(col, idx) in columns"
            :key="idx"
          >
            {{ item[col] }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination mt-[10px] flex items-center gap-[10px]">
      <button
        class="py-[5px] px-[10px] cursor-pointer border-[1px] border-[#ccc] bg-[#f8f8f8]"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        Prev
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        class="py-[5px] px-[10px] cursor-pointer border-[1px] border-[#ccc] bg-[#f8f8f8]"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  columns: Array,
  data: Array,
  perPage: Number,
});

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(props.data.length / props.perPage));

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * props.perPage;
  return props.data.slice(start, start + props.perPage);
});

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
