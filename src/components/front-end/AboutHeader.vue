<template>
  <header
    class="container-fluid"
    style="
      width: 100%;
      height: 768px;
      background-image: url('./src/assets/images/AboutUs_Banner_001.png');
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover;
    "
  >
    <div class="row" style="height: 700px">
      <div class="col-5"></div>
      <div class="col-7 align-self-end">
        <router-link
          to="/products"
          v-scroll-to="{ el: 'body', duration: 500, easing: 'ease' }"
          class="text-decoration-none px-2"
          ><button type="button" class="btn btn-custom_btn-color btn-lg text-white">
            前往商品
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
