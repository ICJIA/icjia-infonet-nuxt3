<template>
  <div>
    <h2>Screenshot Gallery Test</h2>
    <div class="gallery text-center">
      <div class="gallery-panel hover" v-for="n in 25" :key="n">
        <img
          src="https://infonet.icjia-api.cloud/uploads/thumbnail_test_splash_abd78c7c4f.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;
  max-width: 100rem;
  margin: 3rem auto;
  padding: 0 3rem;
}

.gallery-panel img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>
