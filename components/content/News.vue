<template>
  <div>
    <div v-for="i in 2" :key="i" class="mb-4 info-card">
      <v-card
        color="#fff"
        elevation="0"
        theme="dark"
        class="px-5 py-3"
        max-height="350"
        @click="$router.push(`/news/${i}`)"
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <!-- <v-avatar class="hidden-sm-and-down" size="150" rounded="0">
            <v-img
              src="/news-square.jpg"
              style="min-height: 100% !important; min-width: 100% !important"
              cover
            ></v-img>
          </v-avatar> -->
          <div class="px-5" style="color: #000; margin-top: -20px">
            <h3>Lorem markdownum peragant</h3>
            <div
              style="
                margin-top: -15px;
                margin-bottom: 20px;
                color: #222;
                font-size: 14px;
              "
            >
              {{ formatDate(new Date()) }}
            </div>
            Lorem markdownum nigraque peragant mentis. Ascaniumque bella
            excussis horrida concurrere est qua Romane magnorum ursos equa
            cuspis binominis fuit. Quod modo, quod tenax: raro evinctus
            superando color annos dicta, Cephalus more, est? Letalem quamvis
            puer gruem, ante leniat nisi collige membra, sic timemus resonant in
            pacem ad tibi illa.
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<style lang="scss" scoped></style>
