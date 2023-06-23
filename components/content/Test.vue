<template>
  <div>
    {{ tabs }}
  </div>
</template>

<script setup>
const tabs = await useState("tabs");
console.log(tabs);
</script>

<style lang="scss" scoped></style>
