<template>
  <div>
    <v-container
      fluid
      style="background: #f2f2f2; z-index: 1000; min-height: 100vh !important"
      v-if="isMounted"
    >
      <v-row
        ><v-col cols="12" md="12"
          ><h2>Frequently Asked Questions (FAQs)</h2>
          <v-lazy
            :min-height="500"
            :options="{ threshold: 0.5 }"
            transition="fade-transition"
          >
            <Faqs></Faqs>
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<style lang="scss" scoped></style>
