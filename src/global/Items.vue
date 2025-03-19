<template>
  <ul class="p-2 list-none pt-6 px-4 flex flex-col gap-y-3">
    <li>
      <router-link to="/" class="flex gap-x-2 py-2 px-3 link">
        <div class="prepend-icon">
          <svg
            class="text-lightgray"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#a3aed1"
          >
            <g fill="none" stroke="currentColor" stroke-width="1.5">
              <path
                d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"
              />
              <path stroke-linecap="round" d="M12 15v3" />
            </g>
          </svg>
        </div>

        <span class="text-lightgray text-[16px]"> Dashboard </span>
      </router-link>
    </li>

    <li>
      <router-link to="/users" class="flex gap-x-2 py-2 px-3">
        <div class="prepend-icon">
          <img
            src="../assets/images/all-users.svg"
            width="25"
            height="25"
            alt="..."
          />
        </div>

        <span class="text-lightgray text-[16px]"> Users </span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  /* background-color: red; */
  background-color: #ffffff0d;
  border-radius: 8px;
}
</style>
