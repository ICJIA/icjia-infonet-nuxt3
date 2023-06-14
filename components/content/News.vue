<template>
  <div>
    <div v-for="i in 3" :key="i" class="mb-4 info-card">
      <v-card height="200px" class="px-5 py-5" elevation="0">
        <b>News item {{ i }} here</b></v-card
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
