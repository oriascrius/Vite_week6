<template>
  <div class="HotMenuBg" style="background: rgba(116, 125, 84, 0.8);">
    <div class="container mt-4">
      <div class="row justify-content-around mt-7">
        <div class="p-5 text-white">
          <h4 class="h5 fw-bold text-center">MENU</h4>
          <h2 class="h3 fw-bold text-center">松柏主打推薦</h2>
        </div>
        <div class="col-lg-6 col-md-12 g-0" data-aos="flip-up">
          <div
            style="
              width: 648px;
              height: 648px;
              background-image: url(./images/HotMenu_001.jpg);
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              position: relative;
            "
            class="HotMenuImages"
          >
            <div class="HotMenuCard border border-2 p-3">
              <h5>＂鮭魚班尼迪克蛋＂</h5>
              <p>每一天的早起都值得吃個班尼迪克蛋！</p>
              <router-link to="/product/-NQMwp2XllOm2B1b51Wp">
                <button type="button" class="btn btn-outline-custom_btn-color">餐點詳情</button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="HotMenuBottom col-lg-6 col-md-12 g-0" data-aos="flip-down">
          <div
            style="
              width: 648px;
              height: 648px;
              background-image: url(./images/HotMenu_002.jpg);
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              position: relative;
            "
            class="HotMenuImages"
          >
            <div class="HotMenuCard border border-2 p-3">
              <h5>＂水果鮮奶油鬆餅＂</h5>
              <p>充滿活力的周末，從精緻的點心開始。</p>
              <router-link to="/product/-NQMxd5Ep1pxqDTv0Gw0">
                <button type="button" class="btn btn-outline-custom_btn-color">
                  餐點詳情
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.HotMenuBg {
  height: 954px;
  max-width: 100%;
}
.HotMenuCard {
  top: 580px;
  left: 260px;
  width: 368px;
  height: 150px;
  background-color: #ffffff;
  position: absolute;
  color: #747d54;
}
/* @media (max-width: 991.98px) {
  .HotMenuImages {
    max-width: 100%;
  }
  .HotMenuBg {
    height: 1700px;
    width: 100%;
  }
  .HotMenuCard {
    left: 300px;
  }
  .HotMenuBottom {
    padding-top: 100px;
  }
} */
@media (max-width: 991px) {
  .HotMenuImages {
    max-width: 100%;
  }
  .HotMenuBg {
    height: 1700px;
    width: 100%;
  }
  .HotMenuCard {
    left: 150px;
  }
  .HotMenuBottom {
    padding-top: 100px;
  }
}
@media (max-width: 770px) {
  .HotMenuImages {
    max-width: 100%;
  }
  .HotMenuBg {
    height: 1700px;
    width: 100%;
  }
  .HotMenuCard {
    left: 90px;
  }
  .HotMenuBottom {
    padding-top: 100px;
  }
}
</style>
