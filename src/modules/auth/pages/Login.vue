<template>
  <div class="login p-xl flex justify-center bg-light dark:bg-dark h-screen">
    <div class="w-[40%]">
      <div
        class="logo flex justify-center cursor-pointer"
        @click="$router.push('/')"
      >
        <img src="@/assets/images/desktop-dark.png" alt="" />
      </div>

      <div
        class="login-card mt-[3rem] text-center text-xl font-semibold bg-[#fff] rounded-lg px-[2rem] py-[2rem]"
      >
        <span>Sign In</span>

        <Form @submit="onsubmit" v-slot="{ meta }" class="mt-5">
          <!-- email -->
          <BaseInput
            lable="Email"
            v-model="event.email"
            name="email"
            rules="required|email"
            type="email"
            class="mb-3"
          />

          <!-- password -->
          <BaseInput
            lable="Password"
            v-model="event.password"
            name="password"
            rules="required|min:6"
            type="password"
          />

          <!-- submition button -->
          <v-btn
            :ripple="false"
            :disabled="!meta.valid"
            :loading="isLoading"
            type="submit"
            class="text-capitalize rounded-lg w-full mt-5"
            variant="flat"
            size="large"
            color="#845adf"
          >
            Sigin in
          </v-btn>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Form } from "vee-validate";
import { useAuthStore } from "../services/auth";
import { storeToRefs } from "pinia";
import BaseInput from "@/global/BaseInput.vue";
import type { User } from "@/types/interfaces";

const authStore = useAuthStore();
const event: Ref<User> = ref({
  email: "",
  password: "",
});

const { isLoading } = storeToRefs(useAuthStore());

const onsubmit = () => {
  authStore.login(event.value);
};
</script>
