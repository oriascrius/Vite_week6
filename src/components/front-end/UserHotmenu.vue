<template>
  <div class="container text-custom_medium-green">
    <div class="row">
      <div class="col">
        <div class="p-5 ms-5 mt-6">
          <h4 class="h5 fw-bold">DISHES</h4>
          <h2 class="h3 fw-bold">熱門餐點</h2>
        </div>
        <swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :loop="true"
          :speed="1000"
          :navigation="navigation"
          :autoplay="{ delay: 6000, disableOnInteraction: true }"
          :modules="modules"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }"
          class="mySwiper ms-4"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <div class="card" style="width: 416px; height: 100%">
              <router-link
                :to="`/product/${product.id}`"
                style="width: 416px; height: 416px; overflow: hidden"
              >
                <img
                  :src="product.imageUrl"
                  :alt="product.title"
                  style="width: 416px; height: 416px; cursor: pointer"
                />
              </router-link>
              <ul class="mt-3 list-unstyled">
                <li class="ms-4">
                  <h5>{{ product.title }}</h5>
                </li>
                <li class="ms-4">
                  <p class="text-custom_medium-green">NT$ {{ product.price }}</p>
                </li>
                <li class="ms-4">
                  <router-link to="/products">
                    <button type="button" class="btn btn-custom_btn-color text-white">
                      探索更多
                    </button>
                  </router-link>
                </li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      modules: [Autoplay, Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    // 商品列表 - 取得商品列表 API
    getProducts() {
      this.$http
        .get(`${VITE_API}api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.mySwiper img {
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.mySwiper img:hover {
  transform: scale(1.2, 1.2);
}
</style>
