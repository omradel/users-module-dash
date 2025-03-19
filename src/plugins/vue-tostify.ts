import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { type App } from "vue";

export const useTostify = (app: App) => {
  app.use(Vue3Toastify, {
    autoClose: 3000,
    position: "top-right",
    theme: "light",
  } as ToastContainerOptions);
};
