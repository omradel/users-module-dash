import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import { type App } from "vue";

export const useVuetify = (app: App) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme: {
          dark: false,
          colors: {
            primary: "#000",
            secondary: "rgb(132, 90, 223)",
          },
        },
      },
    },

    defaults: {
      VBtn: {
        color: "primary",
      },
    },
  });

  app.use(vuetify);
};
