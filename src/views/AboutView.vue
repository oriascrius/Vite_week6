<template>
  <RouterView></RouterView>
  <AboutHeader></AboutHeader>
  <!-- <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="accordion accordion-flush" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <div class="d-flex flex-column align-items-start">
                  <h4 class="text-dark fs-6 fs-lg-4 mb-0">餐廳是否有提供訂位服務？</h4>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                    style=""
                  >
                    <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                      <h6 class="text-gray-dark lh-base">
                        目前僅提供一個禮拜前訂位，訂位專線：06-2345678
                      </h6>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                <div class="d-flex flex-column align-items-start">
                  <h4 class="text-dark fs-6 fs-lg-4 mb-0">請問消費有提供刷卡服務嗎？</h4>
                  <div
                    id="collapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                      <h6 class="text-gray-dark lh-base">
                        在店內用餐僅能以現金付費，線上訂購有提供刷卡服務。
                      </h6>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading3">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                <div class="d-flex flex-column align-items-start">
                  <h4 class="text-dark fs-6 fs-lg-4 mb-0">請問餐廳可以攜帶寵物嗎？</h4>
                  <div
                    id="collapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                      <h6 class="text-gray-dark lh-base">
                        我們是寵物友善餐廳，歡迎攜帶寵物入內用餐。
                      </h6>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse"
              >
                <div class="d-flex flex-column align-items-start">
                  <h4 class="text-dark fs-6 fs-lg-4 mb-0">餐廳附近是否有停車格或停車場？</h4>
                  <div
                    id="collapse4"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                      <h6 class="text-gray-dark lh-base">
                        餐廳正後方有附設停車場，在店內用餐即可免費停車。
                      </h6>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                <div class="d-flex flex-column align-items-start">
                  <h4 class="text-dark fs-6 fs-lg-4 mb-0">線上訂購的運費如何計算？</h4>
                  <div
                    id="collapse5"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                      <h6 class="text-gray-dark lh-base">
                        我們提供外送的地區是台南市東區、中西區、永康區、安平區、南區、北區、仁德區、安南區，運費是
                        100 元，消費滿 500 元免運費。
                      </h6>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                <div class="d-flex flex-column align-items-start">
                  <h4 class="text-dark fs-6 fs-lg-4 mb-0">可以到店取餐嗎？</h4>
                  <div
                    id="collapse6"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                      <h6 class="text-gray-dark lh-base">
                        可以，我們的地址是：台南市東區樂活路 59 號，餐點都是現點現做，建議提前 60~90
                        分鐘預訂餐點，以免久候。
                      </h6>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div
    class="container mt-7 py-5 text-custom_btn-color"
    data-aos="fade-up"
  >
    <div
      class="row justify-content-around"
      data-aos="fade-up"
    >
      <div class="col-md-5">
        <ul class="list-unstyled">
          <li>
            <h4 class="h5">ABOUT US</h4>
          </li>
          <li class="">
            <h2 class="h3 fw-bold">關於我們</h2>
          </li>
          <li class="pt-7">
            <h4 class="h5">＂允許自己放慢步調，享受悠閒食光＂</h4>
          </li>
          <li class="pt-2">
            <p>
              晨曦的陽光淌進窗戶，向你送出我的祝福，打開手機查看，溫馨，一點點<br />
              爬上你的笑臉，你是快樂的，我就是幸福的，早安！與你相遇，在 Cedar<br />
              Brunch & Cafe。
            </p>
          </li>
          <router-link to="/about"><button
              type="button"
              class="btn btn-custom_btn-color text-white mt-4"
            >
              查看更多
            </button>
          </router-link>
        </ul>
      </div>
      <div class="col-md-5">
        <div style="
              position: relative;
              height: 342px;
              width: 612px;
              background: rgba(116, 125, 84, 0.8);
            ">
          <img
            src="/images/AboutUs_Banner_001.jpg"
            alt="關於我們"
            width="612"
            height="342"
            style="position: absolute; top: 24px; right: 24px"
          />
        </div>
      </div>
    </div>
    <div
      class="row mt-7 flex-row-reverse justify-content-around"
      data-aos="fade-up"
    >
      <div class="col-md-5 align-self-end">
        <ul class="list-unstyled">
          <li>
            <p>
              從香煎鮭魚的誘人香氣到背景中咖啡豆研磨機的嗡嗡聲，再到每天準備的<br />西式風格輕食菜單的迷人香味，我們不僅僅是間普通的早午餐店。
            </p>
          </li>
          <router-link to="/about"><button
              type="button"
              class="btn btn-custom_btn-color text-white mt-4"
            >
              查看更多
            </button>
          </router-link>
        </ul>
      </div>
      <div class="col-md-5">
        <div style="
              position: relative;
              height: 342px;
              width: 612px;
              background: rgba(116, 125, 84, 0.8);
            ">
          <img
            src="/images/AboutUs_Banner_002.jpg"
            alt="關於我們"
            width="612"
            height="342"
            style="position: absolute; top: 24px; right: 24px"
          />
        </div>
      </div>
    </div>
    <div
      class="row mt-7 justify-content-around"
      data-aos="fade-up"
    >
      <div class="col-md-5 align-self-end">
        <ul class="list-unstyled">
          <li>
            <p>
              我們在這裡尋找咖啡和烹飪愛好者。我們希望 Cedar Brunch & Cafe 成為<br />
              您的歸宿，您可以在這裡為自己充電，並在咖啡、美食和熟悉的面孔中尋<br />求安慰。
            </p>
          </li>
          <router-link to="/about"><button
              type="button"
              class="btn btn-custom_btn-color text-white mt-4"
            >
              查看更多
            </button>
          </router-link>
        </ul>
      </div>
      <div class="col-md-5">
        <div style="
              position: relative;
              height: 342px;
              width: 612px;
              background: rgba(116, 125, 84, 0.8);
            ">
          <img
            src="/images/AboutUs_Banner_003.jpg"
            alt="關於我們"
            width="612"
            height="342"
            style="position: absolute; top: 24px; right: 24px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import { mapActions } from 'pinia';
import LoadingStore from '@/stores/Loading';
import AboutHeader from '@/components/front-end/AboutHeader.vue';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
  },
  components: { RouterView, AboutHeader },
  mounted() {
    this.showLoading();
    setTimeout(() => {
      this.hideLoading();
    }, 500);
  },
};
</script>
