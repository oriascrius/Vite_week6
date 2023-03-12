<template>
  <footer
    class="pt-5 fw-boldF"
    style="height: 357px; background: #4e4d3c"
  >
    <div class="container text-center pt-5">
      <div
        class="row border border-1 align-items-center text-white"
        style="height: 86px"
      >
        <div class="col-6 h6">
          <router-link
            to="/about"
            class="text-decoration-none px-3"
          >ABOUT</router-link>
          <router-link
            to="/products"
            class="text-decoration-none px-3"
          >MENU</router-link>
          <router-link
            to="/contact"
            class="text-decoration-none px-3"
          >CONTACT</router-link>
        </div>
        <div class="col-6">
          <a href="https://www.facebook.com/CedarBrunchCafe">
            <i class="bi bi-facebook ms-4 p-3"></i>
          </a>
          <a href="https://instagram.com/cedarbrunchcafe">
            <i class="bi bi-instagram p-3"></i>
          </a>
          <a href="https://github.com/oriascrius/Vite_week6"><i class="bi bi-github p-3"></i></a>
          <a href="http://line.me/ti/p/~@850amggy">
            <i class="bi bi-line p-3"></i>
          </a>
        </div>
      </div>
      <div
        class="row border border-top-0 align-items-end"
        style="height: 86px"
      >
        <span
          class="fs-6"
          style="color: rgba(255, 255, 255, 0.87)"
        >Copyright © 2022 泊岸 版權所有</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
