<template>
  <div class="notification-btn relative">
    <v-badge color="info" content="4">
      <v-btn
        icon=""
        size="small"
        :color="isDark ? '#a3a4a5' : '#000'"
        @click="showNotifications"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57M320 384v16a64 64 0 0 1-128 0v-16"
          />
        </svg>
      </v-btn>
    </v-badge>

    <div v-if="isShow" class="notifications absolute top-[56px] right-[-36px]">
      <div class="card p-3 rounded-lg bg-white dark:bg-black">
        <span>Notifications</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { ref } from "vue";

const isShow = ref<boolean>(false);
const isDark = useDark();
const showNotifications = () => {
  isShow.value = !isShow.value;
};
</script>
