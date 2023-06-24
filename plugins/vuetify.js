import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as labs from "vuetify/labs/components";

// import "@mdi/font/css/materialdesignicons.css";
// import "font-awesome/css/font-awesome.min.css";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // ssr: true,
    // icons: {
    //   iconfont: ["mdiSvg", "fa", "mdi", "fa4"], // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    // },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
        fa,
      },
    },
    components: {
      ...components,
      ...labs,
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
