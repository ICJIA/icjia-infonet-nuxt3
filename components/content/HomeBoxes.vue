<template>
  <div>
    <v-container fluid style="margin: 0 !important; padding: 0 !important">
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <v-card
            color="#0D4474"
            style="height: 300px"
            class="py-5 px-2 text-center info-card hover"
            :class="{ boxGutter: gutter }"
            @click="routeTo('/contact?subject=InfoNet%20Information%20Request')"
          >
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-col>
                  <v-icon
                    icon="mdi-menu"
                    style="font-size: 50px; color: #fff"
                    dark
                    >mdi-account-group</v-icon
                  >
                  <h2 id="cohorts" class="boxHeader">
                    Interested in using InfoNet?
                  </h2>
                  <p style="font-size: 20px" class="boxLight">
                    Click to request more infomation
                  </p></v-col
                >
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card
            color="#2e618c"
            style="height: 300px"
            class="py-5 px-2 text-center info-card hover"
            :class="{ boxGutter: gutter }"
            @click="routeTo('/contact?subject=InfoNet%20Data%20Request')"
          >
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-col>
                  <v-icon
                    icon="mdi-menu"
                    style="font-size: 50px; color: #fff"
                    dark
                    >mdi-pencil-ruler</v-icon
                  >
                  <h2 id="our-approach" class="boxHeader boxLight">
                    Request InfoNet Data
                  </h2>
                  <p style="font-size: 20px" class="boxLight">
                    Request InfoNet data
                  </p></v-col
                >
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            color="#6184a0"
            style="height: 300px"
            class="py-5 px-2 text-center info-card hover"
            :class="{ boxGutter: gutter }"
            @click="
              routeTo(
                '/contact?subject=InfoNet%20Technical%20Assistance%20Request'
              )
            "
          >
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-col>
                  <v-icon
                    icon="mdi-menu"
                    style="font-size: 50px; color: #fff"
                    dark
                    >mdi-home</v-icon
                  >
                  <h2 id="aboutUs" class="boxHeader boxLight">
                    Request Technical Assistance
                  </h2>
                  <p style="font-size: 20px" class="boxLight">
                    For current InfoNet users
                  </p></v-col
                >
              </v-row>
            </v-container>
          </v-card></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    boxes: {
      type: Number,
      default: 3,
    },
    secondRow: {
      type: Boolean,
      default: false,
    },
    gutter: {
      type: Boolean,
      default: true,
    },
    showTeaser: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      colors: ["#333", "#555"],
      icons: ["fact_check", "leaderboard", "map", "contact_mail"],
    };
  },
  computed: {
    boxColumns() {
      return 12 / this.boxes;
    },
  },
  methods: {
    routeTo(path) {
      this.$router.push(path);
    },
    getColor() {
      return this.colors[1];
    },
    click({ id, type }) {
      const offset = 100;
      const el = document.getElementById(id);
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      console.log("scrollTo: ", y);
      if (type === "scrollIntoView") {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scroll({
          top: y,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
/* .boxGutter {
  margin-right: 2px;
  margin-left: 2px;
} */

.boxHeader {
  color: #fff;
  font-weight: 900;
  margin-bottom: 10px;
  font-size: 24px;
}

.boxDark {
  color: #000;
}

.boxLight {
  color: #fff;
}
</style>
