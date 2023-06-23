<template>
  <div>
    <v-container
      ><v-row
        ><v-col cols="12">
          <div v-if="isMounted">
            <!-- <div class="py-12"><strong>isMobile: </strong>{{ mobile }}</div> -->

            <v-card v-if="props.sectionID && props.sectionID.length > 0">
              <v-tabs v-model="tab" bg-color="grey-darken-2" grow center-active>
                <v-tab
                  :value="tab.attributes.slug"
                  v-for="tab in tabArray"
                  :key="`tabTitle-${tab.id}`"
                  style="font-size: 11px !important"
                  >{{ tab.attributes.title }}</v-tab
                >
              </v-tabs>

              <v-window v-model="tab">
                <v-window-item
                  v-for="tab in tabArray"
                  :key="`tabContent-${tab.id}`"
                  :value="tab.attributes.slug"
                  class="py-5 px-5"
                >
                  <span
                    class="markdown-body"
                    v-html="renderer.render(tab.attributes.body)"
                  ></span>
                </v-window-item>
              </v-window>
            </v-card>
            <div
              class="mt-12"
              v-if="props.sectionID && props.sectionID.length > 0"
            >
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
import md from "markdown-it";
import attrs from "markdown-it-attrs";
const renderer = new md({
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  quotes: "“”‘’",
}).use(attrs);

const props = defineProps({
  sectionID: {
    type: String,
    default: "",
  },
});
console.log(props.sectionID);
const tabs = useState("tabs");
const tab = ref(null);
const isMounted = ref(false);
const _tabArray = tabs.value.filter((tab) => {
  if (tab.attributes.sectionID === props.sectionID) {
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
