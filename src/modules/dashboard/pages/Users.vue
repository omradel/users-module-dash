<template>
  <div class="users p-xl">
    <BreadCrumb :isDashboard="false">
      <template #page-title> Users </template>
      <template #first-page> Dashboard </template>
      <template #second-page> Users </template>
    </BreadCrumb>

    <div class="flex justify-between items-center mt-5">
      <v-btn
        v-if="user?.role == 'admin'"
        :ripple="false"
        type="submit"
        class="text-capitalize rounded-lg"
        variant="tonal"
        size="default"
        color="secondary"
        prepend-icon="mdi-plus"
        @click="$router.push('/users/create-user')"
      >
        Create new user
      </v-btn>

      <input
        type="text"
        class="border border-gray-300 !important rounded-lg px-3 py-0 h-[2.5rem] text-gray-900 focus:outline-none"
        v-model="filterRole"
        placeholder="Search by role"
        @input="getAllUsers(filterRole)"
      />
    </div>

    <div
      class="image no-data mt-[5rem] text-center"
      v-if="!isLoading && !allUsers?.data.length"
    >
      <div class="flex justify-center">
        <img
          src="../../../assets/images/no-data.jpg"
          width="150"
          height="150"
          alt="no-data"
        />
      </div>
      <p class="mt-5 dark:text-white">No result for this search !</p>
    </div>

    <SkeletonLoader :loading="isLoading" />

    <div
      class="content mt-5 grid gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-2"
      v-if="isLoading == false"
    >
      <UserCard
        v-for="(user, index) in allUsers?.data"
        :key="index"
        :user_name="user.name"
        :user_role="user.role"
        :id="user?.id"
      >
        <template #user_image>
          <img
            src="@/assets/images/user.jpg"
            width="70"
            height="70"
            class="rounded-full"
            alt=""
          />
        </template>

        <template #controle_btns>
          <div
            class="flex justify-between items-center w-full pr-4 left-2 absolute top-2"
          >
            <v-btn
              v-if="authStore?.user?.role == 'admin'"
              class=""
              variant="tonal"
              rounded="lg"
              :ripple="false"
              icon=""
              size="x-small"
              color="red"
              :loading="isLoading"
              @click="deleteUser(user?.id)"
            >
              <Icon icon="mdi-light:delete" width="20" height="20" />
            </v-btn>

            <v-btn
              v-if="
                authStore?.user?.role == 'admin' ||
                authStore?.user?.role == 'manager'
              "
              class=""
              variant="tonal"
              rounded="lg"
              :ripple="false"
              icon=""
              size="x-small"
              color="secondary"
              @click="$router.push(`/users/edit-user/${user?.id}`)"
            >
              <Icon icon="basil:edit-outline" width="20" height="20" />
            </v-btn>
          </div>
        </template>
      </UserCard>
    </div>

    <div class="pagination w-full items-center justify-center mt-7">
      <v-pagination
        :length="allUsers?.pages"
        :total-visible="5"
        v-model="currentPage"
      ></v-pagination>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import Swal from "sweetalert2";
import SkeletonLoader from "@/global/SkeletonLoader.vue";
import BreadCrumb from "@/global/BreadCrumb.vue";
import UserCard from "@/global/cards/UserCard.vue";
import { useUsers } from "../services/users";
import { useAuthStore } from "@/modules/auth/services/auth";

const { user } = useAuthStore();
let timeout = null;
const authStore = useAuthStore();
const filterRole = ref("");
const { getAllUsers, allUsers, isLoading, currentPage, delteUserTest } =
  useUsers();

getAllUsers();

// delete user
const deleteUser = (id) => {
  Swal.fire({
    title: "Do you want to delete user?",
    showCancelButton: true,
    confirmButtonText: "Delete",
    customClass: {
      confirmButton: "swal-confirm-btn",
      cancelButton: "swal-cancel-btn",
    },
  }).then(async (result) => {
    if (result.isConfirmed) {
      delteUserTest(id);
    }
  });
};

watch(currentPage, (newPage) => {
  getAllUsers(filterRole.value);
});
</script>
