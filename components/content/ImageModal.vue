<template>
  <div class="text-center">
    <div id="myModal" class="modal" @click="closeModal">
      <!-- Modal content -->
      <div class="modal-content">
        <img :src="url.url" />
        <div class="text-center">Caption here</div>
      </div>
    </div>
  </div>
</template>

<script setup>
let url = ref("");
let dialog = ref(false);
let modal = ref(null);
console.log("ImageModal.vue loaded.");
useListen("modal:gallery", (e) => {
  console.log("Event data: ", e);
  url.value = e;
  dialog.value = true;
});
onUnmounted(() => {
  console.log("Unmounted");
  dialog.value = false;
  url = null;
});
onMounted(() => {
  console.log("Mounted");
  dialog.value = true;
  modal = document.getElementById("myModal");
  //modal.style.display = "block";
  console.log("myModal: ", modal);
});

const closeModal = () => {
  console.log("closeModal");
  modal.style.display = "none";
  dialog.value = false;
  url.value = "";
};

watchEffect(() => {
  //console.log("url: ", url.value);
  if (url.value) {
    modal.style.display = "block";
  }
});

const constructURL = (f) => {
  let temp = toRaw(f);
  console.log("temp: ", temp);
  return `https://infonet.icjia-api.cloud/uploads/medium_benjamin_rascoe_a_CF_Yb_Y_Tyji_Q_unsplash_589892737c.jpg`;
};
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: none;
  position: fixed; /* Stay in place */
  z-index: 9999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.modal-content img {
  width: 100%;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
