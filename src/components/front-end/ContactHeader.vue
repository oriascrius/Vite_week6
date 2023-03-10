<template>
  <header
    class="container-fluid"
    style="
      width: 100%;
      height: 768px;
      background-image: url(./images/Contact_header.png);
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover;
      position: relative;
    "
  >
    <router-link
      to="/products"
      style="
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(50%);
        bottom: 60px;
      "
      v-scroll-to="{ el: 'body', duration: 500, easing: 'ease' }"
      class="text-decoration-none"
      ><button type="button" class="btn btn-custom_btn-color btn-lg text-white">享用時光</button>
    </router-link>
  </header>
</template>

<script>
export default {};
</script>
