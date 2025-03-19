<template>
  <div class="edit-user p-xl h-screen">
    <BreadCrumb :isDashboard="false">
      <template #page-title> Edit User </template>
      <template #first-page> Dashboard </template>
      <template #second-page> Edit User </template>
    </BreadCrumb>

    <div class="content">
      <GlobalCard card_title="Edit User" class="mt-5">
        <template #catr-body>
          <div v-if="!isLoaded" class="mb-xl">
            <div class="grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
              <div class="mb-4">
                <v-skeleton-loader type="text" width="30%" class="mb-2" />
                <v-skeleton-loader type="text" height="20px" />
              </div>

              <div class="mb-4">
                <v-skeleton-loader type="text" width="30%" class="mb-2" />
                <v-skeleton-loader type="text" height="20px" />
              </div>

              <div class="mb-4">
                <v-skeleton-loader type="text" width="30%" class="mb-2" />
                <v-skeleton-loader type="text" height="20px" />
              </div>

              <div class="mb-4">
                <v-skeleton-loader type="text" width="30%" class="mb-2" />
                <v-skeleton-loader type="text" height="20px" />
              </div>
            </div>

            <div class="flex justify-end">
              <v-skeleton-loader type="button" width="100px" height="36px" />
            </div>
          </div>

          <Form @submit="onSubmit" class="mt-1" v-if="isLoaded">
            <div class="grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
              <!-- user name -->
              <BaseInput
                lable="Name"
                v-model="userData.name"
                type="text"
                name="user name"
                rules="required"
              />

              <!-- email -->
              <BaseInput
                lable="Email"
                v-model="userData.email"
                type="email"
                name="email"
                rules="required|email"
              />

              <!-- password -->
              <BaseInput
                lable="Password"
                v-model="userData.password"
                type="password"
                name="password"
                rules="required|min:6"
              />

              <!-- role -->
              <BaseInput
                lable="Role"
                v-model="userData.role"
                type="select"
                name="role"
                rules="required"
                :options="['admin', 'manager', 'viewer']"
              />
            </div>

            <div class="flex justify-end">
              <v-btn
                :ripple="false"
                :loading="isLoading"
                type="submit"
                class="text-capitalize rounded-lg w-[10%] mt-5"
                variant="flat"
                size="large"
                color="#845adf"
              >
                Submit
              </v-btn>
            </div>
          </Form>
        </template>
      </GlobalCard>
    </div>
  </div>
</template>

<script setup>
import BreadCrumb from "@/global/BreadCrumb.vue";
import GlobalCard from "@/global/cards/GlobalCard.vue";
import { Form } from "vee-validate";
import BaseInput from "@/global/BaseInput.vue";
import { ref, onMounted } from "vue";
import { useUsers } from "../services/users";
import { useRoute } from "vue-router";

const route = useRoute();
const isLoaded = ref(false);
const { editUser, isLoading, getUser } = useUsers();
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

const onSubmit = () => {
  editUser(route.params.id, userData);
};
</script>
