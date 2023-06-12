<template>
  <div style="background: #f2f2f2">
    <v-container
      fluid
      style="
        margin-top: -20px;
        margin-bottom: 30px;
        background: #f2f2f2;
        z-index: 1000;
      "
      v-if="isMounted"
    >
      <v-row style="">
        <v-col cols="12" md="5">
          <div class="headingHomeMain text-left mt-12 mb-10">INFONET</div>
          <p>
            Lorem markdownum et vocas medius, dabat Ilion amplexaque nuper
            pugnavimus portabat sanguine canendi, regaliter, fugerat terrae
            virum. Rebus iurares aethera cunctae et vix deicit at ureret
            moderatior.
          </p>
          <p>
            Regaliter, fugerat terrae virum. Rebus iurares aethera cunctae et
            vix deicit at ureret moderatior. Forma pharetratus exiguo aurem mole
            quarum retorserunt pauperque, semina ultra opacas ego opes.
          </p>
          <p>
            Lorem markdownum et vocas medius, dabat Ilion amplexaque nuper
            pugnavimus portabat sanguine canendi, regaliter, fugerat terrae
            virum.
          </p>
        </v-col>
        <v-col cols="12" md="7"
          ><v-img
            class="mt-12"
            cover
            max-height="550"
            src="/splash-grey.jpg"
          ></v-img>
          <div class="mt-8 homeContainer px-4">
            <v-btn variant="outlined" size="small" style="padding-right: 5px"
              >iurares aethera</v-btn
            >
            <v-btn variant="outlined" size="small" style="padding-right: 5px"
              >Exiguo Velociter</v-btn
            >
            <v-btn variant="outlined" size="small">Forma Iurares</v-btn>
          </div></v-col
        ></v-row
      >
    </v-container>

    <HomeBoxes v-if="isMounted"></HomeBoxes>

    <v-container fluid class="py-10" style="margin-top: -20px; background: #fff"
      ><v-row
        ><v-col>
          <div v-if="data && isMounted" style="" class="py-5">
            <h1>Infonet Home content here</h1>
            <ContentDoc :key="data?.title" :value="data" class="markdown-body">
              <template #empty>Document not found</template>
              <template #not-found>Document not found</template>
            </ContentDoc>
          </div>
        </v-col></v-row
      ></v-container
    >

    <div style="margin-top: -0px !important; background: #fff" class="py-10">
      <v-container fluid>
        <v-row
          ><v-col>
            <div v-if="!isMobile && isMounted">
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
                        <div style="max-width: 500px">
                          {{ article.abstract }}
                        </div>
                      </v-card>
                    </v-slide-group-item>
                  </v-slide-group>
                </v-sheet>
              </v-no-ssr>
            </div>
            <div v-if="isMobile && isMounted">
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
              </div>
            </div>
          </v-col></v-row
        ></v-container
      >
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

.headingHomeMain {
  font-size: 85px;
  font-weight: 700;
  line-height: 1.2em;
  font-family: "Oswald", sans-serif;
  color: #0b3a62;
}

.homeContainer {
  display: flex;
  justify-content: space-around;
}
</style>
