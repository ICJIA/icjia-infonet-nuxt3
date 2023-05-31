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
      <ContentDoc :key="data?.title" :value="data" class="markdown-body">
        <template #empty>Document not found</template>
        <template #not-found>Document not found</template>
      </ContentDoc>
    </div>
    <h2 class="mt-12">Latest Infonet ResearchHub articles (test query):</h2>
    <div v-for="article in articles" :key="article._id">
      <v-card elevation="5" class="mt-8 px-10 py-10">
        <div>{{ formatDate(article.date) }}</div>
        <h3>{{ article.title }}</h3>
        <h4>
          <span v-for="(author, index) in article.authors" :key="author.title">
            {{ author.title
            }}<span v-if="index < article.authors.length - 1">, </span>
          </span>
        </h4>
        <div>{{ article.abstract }}</div>
        <v-img width="100%" :src="article.splash"></v-img>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import hubArticles from "~/assets/json/hub.json";
// const { path } = useRoute();
// const router = useRouter();
const isMounted = ref(false);
const articles = ref(hubArticles);
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
