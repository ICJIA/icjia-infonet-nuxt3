<template>
  <div>
    <div v-for="tab in tabArray" :key="tab.id">
      <div v-if="tab.attributes.sectionID === 'screenshots'">
        <h2>{{ tab.attributes.title }}</h2>

        <div v-html="tab.attributes.body"></div>
      </div>
    </div>
  </div>

  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab
        :value="tab.attributes.slug"
        v-for="tab in tabArray"
        :key="`tabTitle-${tab.id}`"
        >{{ tab.attributes.title }}</v-tab
      >
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item
          v-for="tab in tabArray"
          :key="`tabContent-${tab.id}`"
          :value="tab.attributes.slug"
        >
          {{ tab.attributes.body }}
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  {{ tab }}
</template>

<script setup>
const tabs = useState("tabs");
const tab = ref(null);
const _tabArray = tabs.value.filter((tab) => {
  if (tab.attributes.sectionID === "screenshots") {
    return tab;
  }
});
const tabArray = toRaw(_tabArray);
</script>

<style lang="scss" scoped></style>
