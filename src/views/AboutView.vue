<template>
  <RouterView></RouterView>
  <AboutHeader></AboutHeader>
  <div class="container text-custom_medium-green">
    <div class="row justify-content-center align-items-center">
      <h5 class="mt-7 fw-bold text-center">STORY OF US</h5>
      <h1 class="h2 fw-bold text-center">品牌故事</h1>
      <hr class="mt-4" />
      <p class="fs-4" style="line-height: 2">
        我和女友一開始就發現我們的名字中都有 「松」 和「柏」
        這兩個字，這令我們感到驚訝和開心。我們總是會在每個重要的節日和紀念日裡慶祝彼此的愛情。
        在一個特別的年份，我們決定一起創建一個餐廳，並把它取名為「CEDAR」。這個名字代表了我們從開始就共享的
        「松」 和 「柏」
        這兩個字詞，也象徵了我們一起成長和緊密連接的經歷。我們希望這個餐廳能成為一個溫馨而浪漫的場所，讓每一對情侶都能夠在這裡享受美食和愛情，就像我們一樣。
      </p>
    </div>
  </div>
  <div class="container text-custom_btn-color">
    <h4 class="h5 mt-7">ABOUT US</h4>
    <h2 class="h3 fw-bold">關於我們</h2>
    <div class="row justify-content-between" data-aos="fade-up">
      <div class="col-lg-5 mb-5 mb-md-0">
        <ul class="list-unstyled h-100 d-flex flex-column justify-content-center">
          <li class="mt-5">
            <p>歡迎來到我們的餐廳！我們以輕食和早午餐為主題，並以美味的酪梨作為主要食材。</p>
          </li>
          <li>
            <p>我們採用新鮮的食材和高品質的配料，讓您享受到一種與眾不同的用餐體驗。</p>
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
          src="/images/About_001.jpg"
          alt="關於我們"
          class="img-fluid rounded-3"
          style="height: 100%; object-fit: cover"
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
              我們的菜單提供健康的輕食和早午餐選擇，結合環保和可持續性理念，為您帶來健康、美味的用餐體驗。快來我們的餐廳，品嚐一份獨特的美味！
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
          src="/images/About_002.jpg"
          alt="關於我們"
          class="img-fluid rounded-3"
          style="height: 100%; object-fit: cover"
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
              無論您是在早上享用一份豐盛的早餐，還是在午後來一杯營養豐富的飲料，我們都能滿足您的需要。請來到我們的餐廳，讓我們為您帶來一個健康、美味、舒適的用餐體驗。
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
          src="/images/About_003.jpg"
          alt="關於我們"
          class="img-fluid rounded-3"
          style="height: 100%; object-fit: cover"
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
