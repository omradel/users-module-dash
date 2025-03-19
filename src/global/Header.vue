<template>
  <v-app-bar
    elevation="0"
    class=""
    :color="isDark ? '#1a1c1e' : '#fff'"
    aria-label="button to oppen and close the sidebar"
  >
    <div class="w-full flex justify-between items-center pe-3">
      <div class="ps-xl">
        <v-btn
          icon=""
          :color="isDark ? '#a3a4a5' : '#000'"
          class="app-bar-icon"
          @click="sideBar.toggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M2 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 10a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5M2.5 9a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"
            />
          </svg>
        </v-btn>
      </div>

      <div class="options_group flex gap-x-3 items-center">
        <SwitchMode />

        <Notifications />

        <Expand />

        <UserMenue />
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { useSidebar } from "@/stores/sidebar";
import SwitchMode from "./SwitchMode.vue";
import Notifications from "./Notifications.vue";
import Expand from "./Expand.vue";
import UserMenue from "./UserMenue.vue";

const sideBar = useSidebar();
const isDark = useDark();
</script>
