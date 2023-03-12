<template>
  <footer class="pt-5" style="height: 357px; background: #4e4d3c">
    <div class="container text-center pt-5">
      <div
        class="row border border-1 align-items-center justify-content-between text-white"
        style="height: 86px"
      >
        <div class="col-md-5 h6 text-white ms-3">
          <router-link to="/about" class="text-decoration-none">ABOUT</router-link>
          <router-link to="/products" class="text-decoration-none ms-4">MENU</router-link>
          <router-link to="/contact" class="text-decoration-none ms-4">CONTACT</router-link>
        </div>
        <div class="col-md-5">
          <a href="https://www.facebook.com/CedarBrunchCafe">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com/cedarbrunchcafe" class="ms-3">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/oriascrius/Vite_week6" class="ms-3">
            <i class="bi bi-github"></i>
          </a>
          <a href="http://line.me/ti/p/~@850amggy" class="ms-3">
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
