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
                  v-for="tab in tabContent"
                  :key="`tabTitle-${tab.id}`"
                  style="font-size: 11px !important"
                >
                  {{ getTitle(tab.attributes) }}
                </v-tab>
              </v-tabs>

              <v-window v-model="tab">
                <v-window-item
                  v-for="tab in tabContent"
                  :key="`tabContent-${tab.id}`"
                  :value="tab.attributes.slug"
                  class="py-5 px-5"
                >
                  <span
                    class="markdown-body"
                    v-html="renderer.render(tab.attributes.body)"
                  ></span>
                  <div
                    v-if="
                      tab.attributes &&
                      tab.attributes.images &&
                      tab.attributes.images.data.length > 0
                    "
                  >
                    <h3>Screenshots:</h3>

                    <ul class="image-gallery">
                      <li
                        v-for="(image, index) in tab.attributes.images.data"
                        :key="`images-${index}`"
                        class="mt-5"
                      >
                        <img
                          :src="
                            getImageURL(image.attributes.formats.thumbnail.url)
                          "
                        />
                        <div style="font-size: 11px" class="">Caption Here</div>
                        <!-- <div class="overlay"><span>Image title</span></div> -->
                      </li>
                    </ul>
                  </div>
                </v-window-item>
              </v-window>
            </v-card>

            <div
              class="mt-12"
              v-if="props.sectionID && props.sectionID.length > 0"
            ></div>
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
const _tabContent = tabs.value.filter((tab) => {
  if (tab.attributes.sectionID === props.sectionID) {
    return tab;
  }
});
const tabContent = toRaw(_tabContent);

const { mobile } = useDisplay();

const getTitle = (attributes) => {
  let title;
  if (mobile.value === true) {
    title = attributes.agency;
  } else {
    title = attributes.title;
  }
  return title;
};

const getImageURL = (url) => {
  return `https://infonet.icjia-api.cloud${url}`;
};

const getImageCaption = (caption) => {
  if (caption) {
    return `<div class="" style="font-size: 10px !important">${caption}</div>`;
  }
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<style scoped>
ul {
  list-style: none;
}

.image-gallery {
  text-align: center;
}

.image-gallery > li {
  /* fallback */
  display: inline-block;
  width: 100%;
  margin: 0 0px 0px 0px;
  /* end fallback */
  position: relative;
  cursor: pointer;
}

@supports (display: flex) {
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5px;
  }

  .image-gallery > li {
    flex-basis: 250px; /*width: 350px;*/
    margin: 0;
  }

  .image-gallery::after {
    content: "";
    flex-basis: 250px;
  }
}

.image-gallery li img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-radius: 5px;
}
</style>
