<template>
  <div>
    <div v-for="i in 5" :key="i" class="mb-4">
      <v-expansion-panels>
        <v-expansion-panel
          elevation="1"
          :title="`FAQ Item ${i}`"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
