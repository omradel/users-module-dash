<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <div
        v-bind="props"
        class="options_user flex gap-x-2 items-center cursor-pointer"
        label="Toggle"
        aria-haspopup="true"
        aria-controls="overlay_tmenu"
      >
        <img
          src="../assets/images/user.jpg"
          width="30"
          height="30"
          class="rounded-full"
          alt=""
        />

        <div class="user_name">
          <p class="text-xs text-textprime mb-0 font-semibold dark:text-white">
            {{ user?.name }}
          </p>
          <span
            class="text-xs text-textprime opacity-45 dark:text-subtextdark"
            >{{ user?.role }}</span
          >
        </div>
      </div>
    </template>
    <v-list class="cursor-pointer">
      <v-list-item>
        <div class="flex gap-x-1 items-center">
          <Icon icon="solar:user-broken" width="20" height="20" />
          <span>Profile</span>
        </div>
      </v-list-item>

      <hr style="color: #ccc" />

      <v-list-item @click="logout">
        <div class="flex gap-x-1 items-center">
          <Icon
            icon="material-symbols:logout"
            width="20"
            height="20"
            color="red"
          />
          <span>Logout</span>
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/modules/auth/services/auth";

const { user, logout } = useAuthStore();
</script>
