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

    <v-container
      ><v-row
        ><v-col cols="12">
          <h2 class="mt-12">
            Latest Infonet ResearchHub articles (this is a only a test -- do not
            be alarmed):
          </h2>

          <div v-for="article in articles" :key="article._id">
            <v-card
              elevation="5"
              class="mt-8 px-10 py-10 info-card"
              @click="gotoArticle(article.slug)"
            >
              <div>{{ formatDate(article.date) }}</div>
              <h3>{{ article.title }}</h3>
              <h4>
                <span
                  v-for="(author, index) in article.authors"
                  :key="author.title"
                >
                  {{ author.title
                  }}<span v-if="index < article.authors.length - 1">, </span>
                </span>
              </h4>
              <div>{{ article.abstract }}</div>
              <h5 class="text-center">Tags:</h5>

              <div class="text-center">
                {{ article.tags }}
              </div>
              <h5 class="text-center">Splash image:</h5>

              <div class="mt-8">
                <v-img :src="article.splash" width="50%" class="mx-auto" />
              </div>
            </v-card>
          </div> </v-col></v-row
    ></v-container>
    <v-sheet class="mx-auto" elevation="8">
      <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-primary"
        show-arrows
      >
        <v-slide-group-item
          v-for="n in 3"
          :key="n"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            color="grey-lighten-1"
            :class="['ma-4', selectedClass]"
            height="500"
            width="800"
            @click="toggle"
          >
            <div
              class="text-center mt-8"
              style="font-weight: 900; font-size: 20px"
            >
              Hub Article info here
            </div>
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  size="80"
                  icon="mdi-close-circle-outline"
                ></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>

      <v-expand-transition>
        <v-sheet v-if="model != null" height="200">
          <div class="d-flex fill-height align-center justify-center">
            <h3 class="text-h6">Selected {{ model }}</h3>
          </div>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </div>
</template>

<script setup>
import hubArticles from "~/assets/json/hub.json";
// const { path } = useRoute();
// const router = useRouter();
const isMounted = ref(false);
const articles = ref(hubArticles);
let model = ref(null);
const displayAuthors = (arr) => {
  console.log(arr);
};

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
