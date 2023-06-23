<template>
  <div>
    <v-container
      ><v-row
        ><v-col cols="12">
          <div v-if="isMounted">
            <div class="py-12"><strong>isMobile: </strong>{{ mobile }}</div>

            <v-card>
              <v-tabs v-model="tab" bg-color="grey-darken-2" grow center-active>
                <v-tab
                  :value="tab.attributes.slug"
                  v-for="tab in tabArray"
                  :key="`tabTitle-${tab.id}`"
                  style="font-size: 11px !important"
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
                    <div>{{ tab.attributes.body }}</div>
                  </v-window-item>
                </v-window>
              </v-card-text>
            </v-card>
            <div class="mt-12">
              {{ tabArray }}
            </div>
          </div>
          <div v-else class="mt-12 text-center">
            <ThePageLoader />
          </div> </v-col></v-row
    ></v-container>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";

const tabs = useState("tabs");
const tab = ref(null);
const isMounted = ref(false);
const _tabArray = tabs.value.filter((tab) => {
  if (tab.attributes.sectionID === "screenshots") {
    return tab;
  }
});
const tabArray = toRaw(_tabArray);

const { mobile } = useDisplay();

onMounted(() => {
  isMounted.value = true;
});
</script>

<style lang="scss" scoped></style>
