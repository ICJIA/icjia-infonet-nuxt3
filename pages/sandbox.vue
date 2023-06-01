<template>
  <div>
    <v-carousel>
      <v-carousel-item :key="i" v-for="i in 5">
        <v-layout row>
          <v-flex xs4 :key="j" v-for="j in 3">
            <img
              :src="'https://placehold.it/380x500/?text=' + i + '-' + j"
              alt=""
              class="pl-1"
            />
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1,
    items: Array.from({ length: 15 }, (k, v) => ({
      title: "Item " + v + 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
    })),
  }),
};
</script>

<style lang="scss" scoped></style>
