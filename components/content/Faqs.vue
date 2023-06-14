<template>
  <div>
    <div v-for="i in 10" :key="i" class="mb-4">
      <v-expansion-panels>
        <v-expansion-panel
          title="Item"
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
