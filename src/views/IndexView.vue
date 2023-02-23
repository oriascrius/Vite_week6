<template>
  <div>
    <Loading v-model:active="states.isLoading" :is-full-page="states.fullPage">
      <template v-slot:default>
        <img src="../assets/images/loading_icon.png" alt="loading圖" class="loadingIcon" />
      </template>
    </Loading>
    <!-- 1. nav -->
    <nav class="navbar navbar-expand-md">
      <div class="container">
        <!-- Logo -->
        <a href="#">
          <h1></h1>
        </a>
        <!-- 導覽 -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto me-5 h5">
            <li class="nav-item">
              <a class="nav-link" href="#">關於我們</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">美味餐點</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">聯絡我們</a>
            </li>
          </ul>
          <!-- 購物車 icon -->
          <a href="#" class="cart_icon">
            <i class="bi bi-cart2"></i>
          </a>
        </div>
      </div>
    </nav>
    <!-- 2. header -->
    <header class="banner_block text-center">
      <div class="banner-text">
        <h2 class="mt-4">“Light tomorrow with today.”</h2>
        <h3 class="mt-4">松柏食光</h3>
        <button type="button" class="btn btn-outline-light mt-4">Learn More</button>
      </div>
    </header>
    <!-- 3. 關於我們 -->
    <main class="container mt-5 py-5">
      <div class="row">
        <div class="col">
          <ul>
            <li>
              <h4>ABOUT US</h4>
            </li>
            <li class="pt-2">
              <h2>關於我們</h2>
            </li>
            <li class="pt-5">
              <h4>＂允許自己放慢步調，享受悠閒食光＂</h4>
            </li>
            <li class="pt-2">
              <p>
                晨曦的陽光淌進窗戶，向你送出我的祝福，打開手機查看，溫馨，一點點<br />
                爬上你的笑臉，你是快樂的，我就是幸福的，早安！與你相遇，在 Cedar<br />
                Brunch & Cafe。
              </p>
            </li>
            <button type="button" class="btn btn-success mt-4">查看更多</button>
          </ul>
        </div>
        <div class="col">
          <div class="aboutAs_card">
            <img
              src="../assets/images/AboutUs_Banner_001.png"
              alt="關於我們"
              width="612"
              height="342"
            />
          </div>
        </div>
      </div>
      <div class="row mt-5 flex-row-reverse align-items-end">
        <div class="col">
          <ul class="">
            <li>
              <p>
                從香煎鮭魚的誘人香氣到背景中咖啡豆研磨機的嗡嗡聲，再到每天準備的<br />西式風格輕食菜單的迷人香味，我們不僅僅是間普通的早午餐店。
              </p>
            </li>
            <button type="button" class="btn btn-success mt-4">查看更多</button>
          </ul>
        </div>
        <div class="col">
          <div class="aboutAs_card">
            <img
              src="../assets/images/AboutUs_Banner_002.png"
              alt="關於我們"
              width="612"
              height="342"
            />
          </div>
        </div>
      </div>
      <div class="row mt-5 align-items-end">
        <div class="col">
          <ul>
            <li>
              <p>
                我們在這裡尋找咖啡和烹飪愛好者。我們希望 Cedar Brunch & Cafe 成為<br />
                您的歸宿，您可以在這裡為自己充電，並在咖啡、美食和熟悉的面孔中尋<br />求安慰。
              </p>
            </li>
            <button type="button" class="btn btn-success mt-4">查看更多</button>
          </ul>
        </div>
        <div class="col">
          <div class="aboutAs_card">
            <img
              src="../assets/images/AboutUs_Banner_003.png"
              alt="關於我們"
              width="612"
              height="342"
            />
          </div>
        </div>
      </div>
    </main>
    <!-- 4. 主打推薦 -->
    <div class="container-fluid menu_recommend mt-5 pt-5">
      <h4 class="ms-5 ps-5">MENU</h4>
      <h2 class="h1 ms-5 ps-5">松柏主打推薦</h2>
      <ul class="row mt-5 pt-5">
        <li class="col menu_recommend_img">
          <img src="../assets/images/menu_001.png.png" alt="主打推薦" />
          <ul class="menu_recommend_card border border-2 border-success p-3">
            <li>
              <h4>＂鮭魚班尼迪克蛋＂</h4>
            </li>
            <p>每一個早睡早起的日子都值得吃班尼迪克蛋！</p>
            <button type="button" class="btn btn-outline-success">餐點詳情</button>
          </ul>
        </li>
        <li class="col menu_recommend_img">
          <img src="../assets/images/menu_002.png.png" alt="主打推薦" />
          <ul class="menu_recommend_card border border-2 border-success p-3">
            <li>
              <h4>＂鮭魚班尼迪克蛋＂</h4>
            </li>
            <p>每一個早睡早起的日子都值得吃班尼迪克蛋！</p>
            <button type="button" class="btn btn-outline-success">餐點詳情</button>
          </ul>
        </li>
      </ul>
    </div>
    <!-- 5. 熱門餐點 -->
    <div class="container mt-5 py-5 hot_menu">
      <h4 class="ms-5 ps-5">DISHES</h4>
      <h2 class="h1 ms-5 ps-5">熱門餐點</h2>
      <ul class="row mt-5 pt-5">
        <li class="col border border-1 border-succsss">
          <img src="../assets/images/menu_001.png.png" class="" alt="熱門餐點" />
          <div class="card-body">
            <h5 class="card-title">鮭魚班尼迪克蛋</h5>
            <button type="button" class="btn btn-success">查看更多</button>
          </div>
        </li>
        <li class="col border border-1 border-succsss">
          <img src="../assets/images/menu_002.png.png" class="" alt="熱門餐點" />
          <div class="card-body">
            <h5 class="card-title">水果鮮奶油鬆餅</h5>
            <button type="button" class="btn btn-success">查看更多</button>
          </div>
        </li>
        <li class="col border border-1 border-succsss">
          <img src="../assets/images/menu_003.png.png" class="" alt="熱門餐點" />
          <div class="card-body">
            <h5 class="card-title">香烤酪梨蛋</h5>
            <button type="button" class="btn btn-success">查看更多</button>
          </div>
        </li>
      </ul>
    </div>
    <!-- 6. 訂閱 -->
    <div class="subscribe_image mt-5 pt-5">
      <div class="subscribe_block">
        <ul>
          <li class="mt-4">
            <h4>訂閱優惠訊息</h4>
          </li>
          <li>
            <p>
              我們會時常推出活動，告知最新消息<br />
              按下訂閱，就可以取得折扣優惠碼唷
            </p>
          </li>
          <li>
            <nav class="navbar navbar-light">
              <form class="d-flex mb-5">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="請輸入信箱取得信箱"
                  aria-label="Search"
                />
                <button class="btn btn-success" type="button">Subscribe</button>
              </form>
            </nav>
          </li>
        </ul>
      </div>
    </div>
    <!-- 7. footer -->
    <footer class="pt-5">
      <div class="container text-center pt-5">
        <div class="row border border-1 footer_top align-items-center">
          <div class="col-md-4">
            <a href="#" class="p-2">關於我們</a>
            <a href="#" class="p-2">美味餐點</a>
            <a href="#" class="p-2">聯絡我們</a>
          </div>
          <div class="col-md-4 ms-auto">
            <a href="#"><i class="bi bi-facebook ms-4 p-3"></i></a>
            <a href="#"><i class="bi bi-instagram p-3"></i></a>
            <a href="#"><i class="bi bi-twitter p-3"></i></a>
            <a href="#"><i class="bi bi-github p-3"></i></a>
          </div>
        </div>
        <div class="row border border-top-0 footer_bottom align-items-end pt-2">
          <span>Copyright © 2022 泊岸 版權所有</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexView',
  data() {
    return {
      // loading 圖示判斷
      states: {
        isLoading: true,
        fullPage: true,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.states = { isLoading: false, fullPage: false };
    }, 500);
  },
};
</script>
