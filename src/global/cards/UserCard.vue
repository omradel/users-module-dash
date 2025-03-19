<template>
  <div class="user_card bg-[#fff] dark:bg-custom-dark rounded-lg p-lg relative">
    <div class="image flex justify-center">
      <slot name="user_image"></slot>
    </div>

    <div class="text-center">
      <h3 class="font-bold text-lg pt-3 dark:text-white">{{ user_name }}</h3>
      <span class="text-sm text-gray-400 dark:text-white">{{ user_role }}</span>
    </div>

    <div class="show_profile_btn">
      <v-btn
        :ripple="false"
        class="text-capitalize rounded-lg w-full mt-5"
        variant="flat"
        size="default"
        color="#845adf"
        @click="$router.push(`/users/profile/${id}`)"
      >
        Show Profile
      </v-btn>
    </div>

    <slot name="controle_btns"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  user_name: {
    type: String,
    reqired: true,
  },

  user_role: {
    type: String,
    reqired: true,
  },

  id: {
    type: Number,
    reqired: true,
  },
});
</script>
