import { createRouter, createWebHistory } from "vue-router";
import { authMidlleware } from "@/middleware/auth";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(authMidlleware);

export default router;
