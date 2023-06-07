<template>
  <div>
    <!-- <HomeSplash></HomeSplash> -->
    <!-- <HomeText style="margin-bottom: -50px !important"></HomeText> -->
    <!-- <HomeBoxes></HomeBoxes> -->
    <div
      v-if="data && isMounted"
      style="margin-bottom: -45px !important; margin-top: -20px"
      class="py-5"
    >
      <h1>Infonet Home content here</h1>
      <ContentDoc :key="data?.title" :value="data" class="markdown-body">
        <template #empty>Document not found</template>
        <template #not-found>Document not found</template>
      </ContentDoc>
    </div>
    <div v-if="!isMobile && isMounted">
      <h2 class="mt-12 px-10">Latest Infonet ResearchHub articles (test):</h2>
      <!-- isMobile: {{ isMobile }}<br />
      isServer: {{ isServer }}<br /> -->
      <v-no-ssr>
        <v-sheet class="mx-auto mt-12" elevation="8" v-if="!mobile">
          <v-slide-group
            v-model="model"
            class="pa-4"
            selected-class="bg-primary"
            show-arrows
          >
            <v-slide-group-item
              v-for="article in articles"
              :key="article._id"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <v-card
                elevation="2"
                class="mx-3 px-5 py-5 info-card"
                outlined
                min-height="200"
                style="width: 100%"
                @click="gotoArticle(article.slug)"
              >
                <div>
                  {{ formatDate(article.date) }}
                </div>
                <div class="my-6" style="font-weight: 900">
                  {{ article.title }}
                </div>
                <v-img
                  :src="article.splash"
                  cover
                  height="200"
                  class="mb-5"
                  :ref="'img_' + article._id"
                  style="border: 1px solid #fafafa"
                  alt="ICJIA News image"
                  ><template #placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="blue darken-3"
                        aria-label="progress"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <div style="max-width: 500px">{{ article.abstract }}</div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-no-ssr>
    </div>
    <div v-if="isMobile && isMounted">
      <h2>Hub articles for mobile here</h2>
      <div v-for="article in articles" :key="article._id">
        <v-card
          elevation="2"
          class="px-3 py-5 info-card"
          outlined
          style="width: 100%"
          @click="gotoArticle(article.slug)"
        >
          <div>
            {{ formatDate(article.date) }}
          </div>
          <div class="my-6" style="font-weight: 900">
            {{ article.title }}
          </div>
          <v-img
            :src="article.splash"
            cover
            height="200"
            class="mb-5"
            :ref="'img_' + article._id"
            style="border: 1px solid #fafafa"
            alt="ICJIA News image"
            ><template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="blue darken-3"
                  aria-label="progress"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <div style="max-width: 500px">{{ article.abstract }}</div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import hubArticles from "~/assets/json/hub.json";
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
const isMobile = ref(mobile);
// const router = useRouter();
const isMounted = ref(false);
const articles = ref(hubArticles);
let model = ref(null);
const displayAuthors = (arr) => {
  console.log(arr);
};

let isServer = ref(process.server);

// const error = useError();
const { data } = await useAsyncData(`content-home`, async () => {
  const post = await queryContent().where({ _path: "/" }).findOne();
  return post;
});

onMounted(() => {
  isMounted.value = true;
});

const gotoArticle = (slug) => {
  let hubArticle = `https://icjia.illinois.gov/researchhub/articles/${slug}`;
  return window.open(hubArticle, "_blank");
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<style>
.white-heading {
  color: #fff !important;
}
.dark-rule {
  border-bottom: 1px solid #000 !important;
}
</style>
