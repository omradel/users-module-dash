<template>
  <div
    class="main-card flex gap-3 items-start p-4 bg-[#fff] dark:bg-custom-dark rounded-lg border-b-3 border-gray-200 dark:border-custom-dark"
  >
    <div :class="`bg-${icon_bg}`" class="p-2 text-[#fff] rounded-lg">
      <slot name="card-icon"></slot>
    </div>

    <div class="w-full">
      <div class="flex justify-between items-center">
        <span class="text-2xl font-semibold text-[#333335] dark:text-white">
          <slot name="static-number"></slot>
        </span>
        <div class="flex items-center gap-1">
          <span v-if="card_ststus == 'down'">
            <img
              src="@/assets/images/arrow-down.svg"
              width="20"
              height="20"
              alt=""
            />
          </span>

          <span v-if="card_ststus == 'up'">
            <img
              src="@/assets/images/arrow-up.svg"
              width="20"
              height="20"
              alt=""
            />
          </span>

          <span
            :class="{
              'text-red': card_ststus == 'down',
              'text-green-500': card_ststus == 'up',
            }"
            class="font-bold"
          >
            <slot name="rate"></slot>
          </span>
        </div>
      </div>
      <p class="text-[12px] text-muted uppercase">
        <slot name="card-name"></slot>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon_bg: {
    type: String,
    required: true,
  },

  card_ststus: {
    type: String, // up || dowm
    required: true,
  },
});
</script>
