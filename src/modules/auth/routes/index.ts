const authRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },

  {
    path: "/unauthorized",
    name: "unauthorized",
    component: () => import("../pages/Unauthorized.vue"),
  },
];

export default authRoutes;
