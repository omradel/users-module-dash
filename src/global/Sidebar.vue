<template>
  <v-navigation-drawer
    elevation="1"
    :color="isDark ? '#1a1c1e' : '#111c43'"
    v-model="sideBar.isOpen"
    width="240"
  >
    <div class="logo flex justify-center p-[14px]" aria-label="logo of website">
      <img src="../assets/images/desktop-dark.png" alt="" />
    </div>

    <v-divider></v-divider>

    <Items />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Items from "./Items.vue";
import { useSidebar } from "@/stores/sidebar";
import { useDark } from "@vueuse/core";

const sideBar = useSidebar();
const isDark = useDark();
const isOpen = ref<boolean>(true);
</script>
