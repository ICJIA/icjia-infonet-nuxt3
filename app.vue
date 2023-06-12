<template>
  <v-app id="appTop">
    <TheNav></TheNav>

    <TheSidebar></TheSidebar>

    <NuxtLoadingIndicator color="blue" />

    <v-main class="markdown-body" style="min-height: 90vh !important">
      <TheBreadcrumbBar v-if="!isHome"></TheBreadcrumbBar>
      <NuxtPage></NuxtPage>
    </v-main>
    <!-- <div style="height: 75px"></div> -->
    <the-context-footer></the-context-footer>

    <TheFooter></TheFooter>
  </v-app>
</template>

<script setup>
import { is } from "@babel/types";

const { isTranslationEnabled } = useAppConfig();
const isHome = ref(true);
const route = useRoute();
const isMounted = ref(false);
watchEffect(() => {
  console.log("route.path: ", route.path);
  if (route.path === "/") {
    isHome.value = true;
  } else {
    isHome.value = false;
  }
});
useHead({
  htmlAttrs: {
    lang: "en",
  },
});

const handleMounted = () => {
  console.log("mounted");
  isMounted.value = true;
};

const page = useCurrentPage({ slug: "slug-here" });
// console.log(page);
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
