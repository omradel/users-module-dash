<template>
  <div class="cretae-role p-xl h-screen">
    <BreadCrumb :isDashboard="false">
      <template #page-title> Create User </template>
      <template #first-page> Dashboard </template>
      <template #second-page> Cretae User </template>
    </BreadCrumb>

    <div class="content">
      <GlobalCard card_title="Create New User" class="mt-5">
        <template #catr-body>
          <Form @submit="onSubmit" class="mt-1">
            <div class="grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
              <!-- user name -->
              <BaseInput
                lable="Name"
                v-model="newUser.name"
                type="text"
                name="user name"
              />

              <!-- email -->
              <BaseInput
                lable="Email"
                v-model="newUser.email"
                type="email"
                name="email"
                rules="required|email"
              />

              <!-- password -->
              <BaseInput
                lable="Password"
                v-model="newUser.password"
                type="password"
                name="password"
                rules="required|min:6"
              />

              <!-- role -->
              <BaseInput
                lable="Role"
                v-model="newUser.role"
                type="select"
                name="role"
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
import { ref } from "vue";
import { useUsers } from "../services/users";

const { createUser, isLoading } = useUsers();

const newUser = ref({
  name: "",
  email: "",
  password: "",
  role: "",
});

const onSubmit = () => {
  createUser(newUser.value);
};
</script>
