<template>
  <div
    class="grid pt-sm pb-sm gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
    v-if="loading"
  >
    <v-card
      class="rounded-lg elevation-0 card"
      v-for="(item, index) in 8"
      :key="index"
    >
      <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>
