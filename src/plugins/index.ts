import { useVuetify } from "./vuetify";
import { useTostify } from "./vue-tostify";
import { type App } from "vue";

export const plugins = (app: App) => {
  useVuetify(app);
  useTostify(app);
};
