<template>
  <footer class="pt-5" style="height: 357px; background: #4e4d3c">
    <div class="container text-center pt-5">
      <div
        class="row border border-1 align-items-center justify-content-between text-white"
        style="height: 86px"
      >
        <div class="col-lg-6  h6 text-white py-4">
          <router-link to="/about" class="text-decoration-none p-2 p-lg-3">ABOUT</router-link>
          <router-link to="/products" class="text-decoration-none p-2 p-lg-3">MENU</router-link>
          <router-link to="/contact" class="text-decoration-none p-2 p-lg-3">CONTACT</router-link>
          <router-link to="/question" class="text-decoration-none p-2 p-lg-3">FAQ</router-link>
        </div>
        <div class="col-lg-5 py-4">
          <a href="https://www.facebook.com/CedarBrunchCafe" class="p-4">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com/cedarbrunchcafe" class="p-4">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/oriascrius/Vite_week6" class="p-4">
            <i class="bi bi-github"></i>
          </a>
          <a href="http://line.me/ti/p/~@850amggy" class="p-4">
            <i class="bi bi-line"></i>
          </a>
        </div>
      </div>
      <div class="row border border-top-0 align-items-end" style="height: 86px">
        <span class="fs-6" style="color: rgba(255, 255, 255, 0.87)"
          >Copyright © 2022 泊岸 版權所有</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
