<template>
  <div class="global-card rounded-lg dark:bg-custom-dark bg-[#fff]">
    <div class="card-header px-5 py-4">
      <div class="title flex justify-between items-center">
        <h4 class="dark:text-white font-bold text-xl ps-4">
          {{ card_title }}
        </h4>

        <div class="flex gap-x-2 items-center">
          <div
            v-if="isSearch"
            class="flex items-center border border-gray-300 rounded-lg overflow-hidden w-80"
          >
            <input
              type="text"
              placeholder="Search..."
              class="w-full px-4 py-2 focus:outline-none"
            />
            <button @click="performSearch" class="px-4 py-2 transition">
              <Icon icon="famicons:search-outline" width="20" height="20" />
            </button>
          </div>

          <v-btn
            v-if="isButton"
            size="default"
            prepend-icon="mdi-plus"
            elevation="0"
            color="green"
            class="rounded-3xl"
            style="text-transform: capitalize"
            @click="$router.push(`${button_link}`)"
          >
            {{ button_name }}
          </v-btn>
        </div>
      </div>
    </div>

    <hr class="text-[#00000014] dark:text-[#ffffff18]" />

    <div class="card-body px-5 py-4">
      <slot name="catr-body"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  card_title: {
    type: String,
    required: true,
  },

  isButton: {
    type: Boolean,
    default: false,
  },

  isSearch: {
    type: Boolean,
    default: false,
  },

  search: {
    type: String,
    default: "",
  },

  button_name: {
    type: String,
    default: "",
  },

  button_link: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.title {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      #23b7e580 0%,
      #23b7e580 50%,
      #845adf80 50%,
      #845adf80 100%
    );
    border-radius: 10px;
  }
}
</style>
