<template>
  <v-sheet class="mx-auto" max-width="600">
    <v-slide-group show-arrows>
      <v-slide-group-item
        v-for="n in 25"
        :key="n"
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          class="ma-2"
          rounded
          :color="isSelected ? 'primary' : undefined"
          @click="toggle"
        >
          Options {{ n }}
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>

  <v-sheet class="mx-auto" elevation="8">
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-primary"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 7"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="300"
          width="350"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="80"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet v-if="model != null" height="200">
        <div class="d-flex fill-height align-center justify-center">
          <h3 class="text-h6">Selected {{ model }}</h3>
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>
