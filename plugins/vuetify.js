import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as labs from "vuetify/labs/components";

import "@mdi/font/css/materialdesignicons.css";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // ssr: true,
    icons: {
      iconfont: ["mdiSvg", "fa", "mdi", "fa4"], // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    components: {
      ...components,
      ...labs,
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
