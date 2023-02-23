<template>
  <footer class="pt-5">
    <div class="container text-center pt-5">
      <div class="row border border-1 footer_top align-items-center">
        <div class="col-6 h5">
          <router-link to="/products" class="text-decoration-none p-2">關於我們</router-link>
          <router-link to="/products" class="text-decoration-none p-2">美味餐點</router-link>
          <router-link to="/products" class="text-decoration-none p-2">聯絡我們</router-link>
        </div>
        <div class="col-6">
          <router-link to="/products" class="text-decoration-none"
            ><i class="bi bi-facebook ms-4 p-3"></i
          ></router-link>
          <router-link to="/products" class="text-decoration-none"
            ><i class="bi bi-instagram p-3"></i
          ></router-link>
          <router-link to="/products" class="text-decoration-none"
            ><i class="bi bi-twitter p-3"></i
          ></router-link>
          <router-link to="/products" class="text-decoration-none"
            ><i class="bi bi-github p-3"></i
          ></router-link>
        </div>
      </div>
      <div class="row border border-top-0 footer_bottom align-items-end">
        <span class="fs-6">Copyright © 2022 泊岸 版權所有</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
