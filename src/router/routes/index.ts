import dashboard from "@/layouts/dashboard.vue";
import adminRoutes from "@/modules/dashboard/routes";
import authRoutes from "@/modules/auth/routes";
import { h } from "vue";

export default [
  {
    path: "/",
    name: "dashboard-layout",
    component: dashboard,
    children: [...adminRoutes],
  },

  // without layout
  ...authRoutes,

  {
    path: "/:catchAll(.*)*",
    name: "404",
    component: h(
      "h1",
      { style: "color: red; padding: 10px; font-size: 30px" },
      "404 Not Founded"
    ),
  },
];
