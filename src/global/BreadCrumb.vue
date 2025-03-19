<template>
  <div class="bread-crumb flex justify-between items-center">
    <h1 class="text-2xl font-bold dark:text-white">
      <slot name="page-title"></slot>
    </h1>

    <div class="pages flex gap-x-3 items-center">
      <router-link to="/" class="text-[#845adf]">
        <slot name="first-page"></slot>
      </router-link>

      <span class="arrow-icon dark:text-white" v-if="!isDashboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="24"
          viewBox="0 0 12 24"
        >
          <defs>
            <path
              id="weuiArrowOutlined0"
              fill="currentColor"
              d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
            />
          </defs>
          <use
            fill-rule="evenodd"
            href="#weuiArrowOutlined0"
            transform="rotate(-180 5.02 9.505)"
          />
        </svg>
      </span>

      <router-link v-if="!isDashboard" to="/" class="dark:text-white"
        ><slot name="second-page"></slot
      ></router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isDashboard: {
    type: Boolean,
    required: true,
  },
});
</script>
