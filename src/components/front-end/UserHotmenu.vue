<template>
  <div class="container text-custom_btn-color mt-4 ps-5">
    <div class="p-5 ms-5">
      <h4 class="h5">DISHES</h4>
      <h2 class="h3">熱門餐點</h2>
    </div>
    <ul class="row g-5 list-unstyled">
      <li class="col-md-4">
        <div class="card" style="width: 416px">
          <img
            src="../public/images/HotMenu_001.jpg"
            height="416"
            class="card-img-top"
            alt="熱門餐點"
          />
          <div class="card-body">
            <h5 class="card-title">鮭魚班尼迪克蛋</h5>
            <p class="text-muted">NT $ 220</p>
            <router-link
              to="/products"
              v-scroll-to="{ el: 'body', duration: 500, easing: 'ease' }"
              class="text-decoration-none px-2"
            >
              <button type="button" class="btn btn-custom_btn-color text-white">查看更多</button>
            </router-link>
          </div>
        </div>
      </li>
      <li class="col-md-4">
        <div class="card" style="width: 416px">
          <img
            src="../public/images/HotMenu_002.jpg"
            height="416"
            class="card-img-top"
            alt="熱門餐點"
          />
          <div class="card-body">
            <h5 class="card-title">鮭魚班尼迪克蛋</h5>
            <p class="text-muted">NT $ 220</p>
            <router-link
              to="/products"
              v-scroll-to="{ el: 'body', duration: 500, easing: 'ease' }"
              class="text-decoration-none px-2"
            >
              <button type="button" class="btn btn-custom_btn-color text-white">查看更多</button>
            </router-link>
          </div>
        </div>
      </li>
      <li class="col-md-4">
        <div class="card" style="width: 416px">
          <img
            src="../public/images/HotMenu_003.jpg"
            height="416"
            class="card-img-top"
            alt="熱門餐點"
          />
          <div class="card-body">
            <h5 class="card-title">鮭魚班尼迪克蛋</h5>
            <p class="text-muted">NT $ 220</p>
            <router-link
              to="/products"
              v-scroll-to="{ el: 'body', duration: 500, easing: 'ease' }"
              class="text-decoration-none px-2"
            >
              <button type="button" class="btn btn-custom_btn-color text-white">探索更多</button>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
