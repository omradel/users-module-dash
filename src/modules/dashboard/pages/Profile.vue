<template>
  <div class="profile p-xl">
    <BreadCrumb :isDashboard="false">
      <template #page-title> Profile </template>
      <template #first-page> Dashboard </template>
      <template #second-page> Profile </template>
    </BreadCrumb>

    <GlobalCard card_title="Profile" class="mt-5" v-if="isLoaded">
      <template #catr-body>
        <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <div
            class="flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-700"
          >
            <img
              class="w-24 h-24 rounded-full border-4 border-white dark:border-gray-500"
              src="../../../assets/images/user.jpg"
              alt="Profile Picture"
            />
          </div>
          <div class="p-6 text-center">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ userData.name }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300">{{ userData.email }}</p>
            <p
              class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              {{ userData.role }}
            </p>

            <v-btn
              :ripple="false"
              :disabled="authStore?.user?.role == 'viewer'"
              type="submit"
              class="text-capitalize rounded-lg w-full mt-5"
              variant="flat"
              size="large"
              color="#845adf"
              @click="$router.push(`/users/edit-user/${userData.id}`)"
            >
              Edit Profile
            </v-btn>
          </div>
        </div>
      </template>
    </GlobalCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BreadCrumb from "@/global/BreadCrumb.vue";
import GlobalCard from "@/global/cards/GlobalCard.vue";
import { useUsers } from "../services/users";
import { useAuthStore } from "@/modules/auth/services/auth";
import { useRoute } from "vue-router";

const { getUser } = useUsers();
const route = useRoute();
const authStore = useAuthStore();

const isLoaded = ref(false);
const userData = ref({
  name: "",
  email: "",
  password: "",
  role: "",
});

onMounted(async () => {
  userData.value = await getUser(route.params.id);
  isLoaded.value = true;
});

const editProfile = () => {
  console.log("Edit Profile Clicked");
};
</script>
