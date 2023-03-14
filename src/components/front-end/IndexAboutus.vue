<template>
  <div class="container text-custom_btn-color">
    <h4 class="h5 mt-7">ABOUT US</h4>
    <h2 class="h3 fw-bold">關於我們</h2>
    <div class="row justify-content-between" data-aos="fade-up">
      <div class="col-lg-5 mb-5 mb-md-0">
        <ul class="list-unstyled h-100 d-flex flex-column justify-content-center">
          <li class="mt-5">
            <h5>「允許自己放慢步調，享受悠閒食光」</h5>
          </li>
          <li class="mt-2">
            <p>
              晨曦的陽光淌進窗戶，向你送出我的祝福，打開手機查看，溫馨，一點點
              爬上你的笑臉，你是快樂的，我就是幸福的，早安！與你相遇，在 Cedar Brunch & Cafe。
            </p>
          </li>
          <li class="mt-5">
            <router-link to="/about"
              ><button type="button" class="btn btn-custom_btn-color w-25 text-white">
                查看更多
              </button>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-lg-6 position-relative">
        <img
          src="/images/Index_AboutUs_001.jpg"
          alt="關於我們"
          class="img-fluid rounded-3"
          style="height: 100%;"
        />
        <div
          class="rounded-3"
          style="
            position: absolute;
            content: '';
            width: 96%;
            height: 100%;
            top: -20px;
            right: -8px;
            background: rgba(116, 125, 84, 0.8);
            z-index: -1;
          "
        ></div>
      </div>
    </div>
    <div class="row mt-7 flex-row-reverse justify-content-between" data-aos="fade-up">
      <div class="col-lg-5 mb-5 mb-md-0">
        <ul class="list-unstyled h-100 d-flex flex-column justify-content-end">
          <li class="py-5">
            <p>
              從香煎鮭魚的誘人香氣到背景中咖啡豆研磨機的嗡嗡聲，再到每天準備的<br />
              西式風格輕食菜單的迷人香味，我們不僅僅是間普通的早午餐店。
            </p>
          </li>
          <li>
            <router-link to="/about"
              ><button type="button" class="btn btn-custom_btn-color w-25 text-white">
                查看更多
              </button>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-lg-6 position-relative">
        <img
          src="/images/Index_AboutUs_002.jpg"
          alt="關於我們"
          class="img-fluid rounded-3"
          style="height: 100%;"
        />
        <div
          class="rounded-3"
          style="
            position: absolute;
            content: '';
            width: 96%;
            height: 100%;
            top: -20px;
            right: -8px;
            background: rgba(116, 125, 84, 0.8);
            z-index: -1;
          "
        ></div>
      </div>
    </div>
    <div class="row mt-7 justify-content-between" data-aos="fade-up">
      <div class="col-lg-5 mb-5 mb-md-0">
        <ul class="list-unstyled h-100 d-flex flex-column justify-content-end">
          <li class="py-5">
            <p>
              我們在這裡尋找咖啡和烹飪愛好者。我們希望 Cedar Brunch & Cafe 成為
              您的歸宿，您可以在這裡為自己充電，並在咖啡、美食和熟悉的面孔中尋 求安慰。
            </p>
          </li>
          <li>
            <router-link to="/about"
              ><button type="button" class="btn btn-custom_btn-color w-25 text-white">
                查看更多
              </button>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-lg-6 position-relative">
        <img
          src="/images/Index_AboutUs_003.jpg"
          alt="關於我們"
          class="img-fluid rounded-3"
          style="height: 100%;"
        />
        <div
          class="rounded-3"
          style="
            position: absolute;
            content: '';
            width: 96%;
            height: 100%;
            top: -20px;
            right: -8px;
            background: rgba(116, 125, 84, 0.8);
            z-index: -1;
          "
        ></div>
      </div>
    </div>
  </div>
  <!-- <div class="container mt-7 text-custom_medium-green">
    <div class="row mt-7 justify-content-between" data-aos="fade-down">
      <h4 class="h5 fw-bold">ABOUT US</h4>
      <h2 class="h3 fw-bold">關於我們</h2>

      <div class="col-lg-6 align-self-end">
        <ul class="list-unstyled">
          <li class="pt-7">
            <h4 class="h5">＂允許自己放慢步調，享受悠閒食光＂</h4>
          </li>
          <li class="pt-3">
            <p>
              晨曦的陽光淌進窗戶，向你送出我的祝福，打開手機查看，溫馨，一點點<br />
              爬上你的笑臉，你是快樂的，我就是幸福的，早安！與你相遇，在 Cedar Brunch & Cafe。
            </p>
          </li>
          <router-link to="/about">
            <button type="button" class="btn btn-custom_btn-color w-25 text-white mt-4">
              探索更多
            </button>
          </router-link>
        </ul>
      </div>
      <div class="col-lg-6  mt-5">
        <img src="/images/AboutUs_Banner_001.jpg" alt="關於我們" class="img-fluid rounded-3" />
      </div>
    </div>
    <div class="row mt-7 justify-content-between flex-row-reverse" data-aos="fade-down">
      <div class="col-lg-6 align-self-end">
        <ul class="list-unstyled">
          <li>
            <p>
              從香煎鮭魚的誘人香氣到背景中咖啡豆研磨機的嗡嗡聲，再到每天準備的<br />西式風格輕食菜單的迷人香味，我們不僅僅是間普通的早午餐店。
            </p>
          </li>
          <router-link to="/about">
            <button type="button" class="btn btn-custom_btn-color w-25 text-white mt-4">
              探索更多
            </button>
          </router-link>
        </ul>
      </div>
      <div class="col-lg-6 mt-5">
        <img src="/images/AboutUs_Banner_002.jpg" alt="關於我們" class="img-fluid rounded-3" />
      </div>
    </div>
    <div class="row mt-7 justify-content-between" data-aos="fade-down">
      <div class="col-lg-6 align-self-end">
        <ul class="list-unstyled">
          <li>
            <p>
              我們在這裡尋找咖啡和烹飪愛好者。我們希望 Cedar Brunch & Cafe 成為<br />
              您的歸宿，您可以在這裡為自己充電，並在咖啡、美食和熟悉的面孔中尋<br />求安慰。
            </p>
          </li>
          <router-link to="/about">
            <button type="button" class="btn btn-custom_btn-color w-25 text-white mt-4">
              探索更多
            </button>
          </router-link>
        </ul>
      </div>
      <div class="col-lg-6 mt-5">
        <img src="/images/AboutUs_Banner_003.jpg" alt="關於我們" class="img-fluid rounded-3" />
      </div>
    </div>
  </div> -->
</template>

<script>
export default {};
</script>
