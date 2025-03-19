<template>
  <v-layout>
    <Sidebar />
    <Header />

    <v-main :class="isDark ? 'bg-dark' : 'bg-light'" class="p-5 h-full">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import Header from "@/global/Header.vue";
import Sidebar from "@/global/Sidebar.vue";
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>
