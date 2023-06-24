<template>
  <div>
    <h2>Screenshot Gallery Test 1</h2>
    <div class="gallery text-center">
      <div class="gallery-panel hover" v-for="n in 25" :key="n">
        <img
          src="https://infonet.icjia-api.cloud/uploads/thumbnail_test_splash_abd78c7c4f.jpg"
        />
      </div>
    </div>
    <h2>Screenshot Gallery Test 2</h2>
    <ul class="image-gallery">
      <li>
        <img src="https://source.unsplash.com/VWcPlbHglYc/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>
      <li>
        <img src="https://source.unsplash.com/e6FMMambeO4/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>
      <li>
        <img src="https://source.unsplash.com/klCiPmzUw0Y/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>
      <li>
        <img src="https://source.unsplash.com/IdNOTjPeHrE/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>
      <li>
        <img src="https://source.unsplash.com/O0N9MF--hK4/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>
      <li>
        <img src="https://source.unsplash.com/FV3GConVSss/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>
      <li>
        <img src="https://source.unsplash.com/0ESjL-Nw22Y/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>
      <li>
        <img src="https://source.unsplash.com/KTVn62x6fFw/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>

      <li>
        <img src="https://source.unsplash.com/VSeVhmW4_JQ/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>
      <li>
        <img src="https://source.unsplash.com/07aFaTf24Kg/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>
      <li>
        <img src="https://source.unsplash.com/DqyYTM7pR2o/640x416" alt="" />
        <div class="overlay"><span>Image title</span></div>
      </li>
    </ul>
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

/* Responsive image gallery rules begin*/

ul {
  list-style: none;
}

.image-gallery {
  text-align: center;
}

.image-gallery > li {
  /* fallback */
  display: inline-block;
  width: 350px;
  margin: 0 5px 10px 5px;
  /* end fallback */
  position: relative;
  cursor: pointer;
}

@supports (display: flex) {
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .image-gallery > li {
    flex-basis: 350px; /*width: 350px;*/
    margin: 0;
  }

  .image-gallery::after {
    content: "";
    flex-basis: 350px;
  }
}

.image-gallery li img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-radius: 5px;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(57, 57, 57, 0.502);
  top: 0;
  left: 0;
  transform: scale(0);
  transition: all 0.2s 0.1s ease-in-out;
  color: #fff;
  border-radius: 5px;
  /* center overlay text */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* hover */
.image-gallery li:hover .overlay {
  transform: scale(1);
}
</style>
