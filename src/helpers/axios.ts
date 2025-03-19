import axios from "axios";
import { useAuthStore } from "@/modules/auth/services/auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const authStore = useAuthStore();

  if (authStore?.user?.token) {
    config.headers.Authorization = `Bearer ${authStore.user.token}`;
  }
  return config;
});
