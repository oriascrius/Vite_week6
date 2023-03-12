<template>
  <header
    style="
      width: 100%;
      background-image: url(./images/404_error.jpg);
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: cover;
    "
  >
    <div
      class="d-flex align-items-center justify-content-center"
      style="height: 100vh; weight=100vh;"
    >
      <h1 class="h3 text-dark fw-bold p-5">這裡是錯誤網址，請點擊下方按鈕回到首頁</h1>
      <router-link to="/products"
        ><button type="button" class="btn btn-custom_btn-color btn-lg text-white">
          Back To Home
        </button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ErrorView',
  data() {
    return {};
  },
};
</script>
