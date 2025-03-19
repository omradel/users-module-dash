const adminRoutes = [
  {
    path: "/",
    name: "admin-dashboard",
    component: () => import("../pages/Dashboard.vue"),
    meta: {
      isAuthenticated: true,
      roles: ["admin", "manager", "viewer"],
    },
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../pages/Users.vue"),
    meta: {
      isAuthenticated: true,
      roles: ["admin", "manager", "viewer"],
    },
  },

  {
    path: "/users/edit-user/:id",
    name: "edit-user",
    component: () => import("../pages/EditUser.vue"),
    meta: {
      isAuthenticated: true,
      roles: ["admin", "manager"],
    },
  },

  {
    path: "/users/create-user",
    name: "create-user",
    component: () => import("../pages/CreateUser.vue"),
    meta: {
      isAuthenticated: true,
      roles: ["admin"],
    },
  },

  {
    path: "/users/profile/:id",
    name: "profile",
    component: () => import("../pages/Profile.vue"),
    meta: {
      isAuthenticated: true,
      roles: ["admin", "manager", "viewer"],
    },
  },
];

export default adminRoutes;
