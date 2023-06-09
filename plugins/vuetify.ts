import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    // icons: {
    //   defaultSet: "mdi",
    //   aliases,
    //   sets: {
    //     mdi,
    //   },
    // },
    // theme: {
    //   themes: {
    //     light: {
    //       colors: {
    //         landingPrimary: "#025777",
    //         landingSecondary: "#2C7DA0",
    //         accent: "#012A4A",
    //         info: "#61A5C2",
    //         success: "#caf0f8",
    //         background: "#151F32",
    //         fourth: "#18273F",
    //         tertiary: "#F0F5F9",
    //         trial: "#F0FBFF",
    //         trial2: "#7AC3E7",
    //         hover: "#E8EAF6",
    //         highlight: "#40C4FF",
    //       },
    //     },
    //   },
    // },
  });
  nuxt.vueApp.use(vuetify);
});
