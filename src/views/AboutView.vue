<template>
  <RouterView></RouterView>
  <AboutHeader></AboutHeader>
  <div class="container mt-7 py-5 text-custom_btn-color">
    <div class="row justify-content-around" data-aos="fade-up">
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
          <router-link to="/about"
            ><button type="button" class="btn btn-custom_btn-color text-white mt-4">
              查看更多
            </button>
          </router-link>
        </ul>
      </div>
      <div class="col-md-5">
        <div
          style="
            position: relative;
            height: 342px;
            width: 612px;
            background: rgba(116, 125, 84, 0.8);
          "
        >
          <img
            :src="AboutUs"
            alt="關於我們"
            width="612"
            height="342"
            style="position: absolute; top: 24px; right: 24px"
          />
        </div>
      </div>
    </div>
    <div class="row mt-7 flex-row-reverse justify-content-around" data-aos="fade-up">
      <div class="col-md-5 align-self-end">
        <ul class="list-unstyled">
          <li>
            <p>
              從香煎鮭魚的誘人香氣到背景中咖啡豆研磨機的嗡嗡聲，再到每天準備的<br />西式風格輕食菜單的迷人香味，我們不僅僅是間普通的早午餐店。
            </p>
          </li>
          <router-link to="/about"
            ><button type="button" class="btn btn-custom_btn-color text-white mt-4">
              查看更多
            </button>
          </router-link>
        </ul>
      </div>
      <div class="col-md-5">
        <div
          style="
            position: relative;
            height: 342px;
            width: 612px;
            background: rgba(116, 125, 84, 0.8);
          "
        >
          <img
            src="../public/images/AboutUs_Banner_002.png"
            alt="關於我們"
            width="612"
            height="342"
            style="position: absolute; top: 24px; right: 24px"
          />
        </div>
      </div>
    </div>
    <div class="row mt-7 justify-content-around" data-aos="fade-up">
      <div class="col-md-5 align-self-end">
        <ul class="list-unstyled">
          <li>
            <p>
              我們在這裡尋找咖啡和烹飪愛好者。我們希望 Cedar Brunch & Cafe 成為<br />
              您的歸宿，您可以在這裡為自己充電，並在咖啡、美食和熟悉的面孔中尋<br />求安慰。
            </p>
          </li>
          <router-link to="/about"
            ><button type="button" class="btn btn-custom_btn-color text-white mt-4">
              查看更多
            </button>
          </router-link>
        </ul>
      </div>
      <div class="col-md-5">
        <div
          style="
            position: relative;
            height: 342px;
            width: 612px;
            background: rgba(116, 125, 84, 0.8);
          "
        >
          <img
            src="../public/images/AboutUs_Banner_003.png"
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
