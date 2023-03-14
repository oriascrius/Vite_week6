<template>
  <!-- 單一商品 -->
  <div class="container text-custom_medium-green">
    <div class="row mt-3">
      <!-- 單一商品圖片 - 左 -->
      <div class="col-lg-5">
        <img :src="product.imageUrl" :alt="product.title" class="w-100" height="400" />
      </div>
      <!-- 單一商品詳細資料 - 右 -->
      <div class="col-lg-7">
        <ul class="row list-unstyled">
          <li class="col-md-6 mt-4">
            <h4 class="mt-3 fw-bold">{{ product.title }}</h4>
          </li>
          <li class="col-md-6">
            <!-- 商品分類麵包屑 -->
            <nav aria-label="breadcrumb">
              <ul class="breadcrumb list-unstyled py-3">
                <li class="breadcrumb-item"><router-link to="/products">全部商品</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">
                  {{ product.title }}
                </li>
              </ul>
            </nav>
          </li>
          <li>
            <span class="badge bg-custom_dark-green rounded-pill">{{ product.category }}</span>
          </li>
          <li>
            <p class="mt-5">描述：{{ product.description }}</p>
          </li>
          <li>
            <p>內容：{{ product.content }}</p>
          </li>
          <li>
            <h5>NT$ {{ product.price }}</h5>
          </li>
          <div class="input-group mt-5 w-75">
            <select class="form-select" v-model="qty">
              <option :value="i" v-for="i in 20" :key="i + '1233'">
                {{ i }}
              </option>
            </select>
            <button
              type="button"
              class="btn btn-custom_btn-color text-white"
              @click="addToCart(product.id, qty)"
            >
              加入商品
            </button>
          </div>
        </ul>
      </div>
    </div>
    <hr />
    <!-- 相似商品 -->
    <template v-if="similarProducts.length">
      <h3 class="mt-7">類似商品</h3>
      <div>
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :navigation="navigation"
          :breakpoints="{
            425: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="productItem in similarProducts" :key="productItem.id">
            <div class="card">
              <div
                style="
                  height: 300px;
                  background-size: cover;
                  background-position: center;
                  cursor: pointer;
                  position: relative;
                "
                :style="{ backgroundImage: `url(${productItem.imageUrl})` }"
                @click.prevent="toggleId(productItem.id)"
              >
                <div class="overlay"></div>
              </div>
              <div class="card-body">
                <h6 class="card-title">
                  {{ productItem.title }}
                </h6>
                <div class="text-right pr-2">NT$ {{ productItem.price }}</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </template>
  </div>
  <router-view></router-view>
</template>

<script>
import { RouterView } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';
import LoadingStore from '@/stores/Loading';
import cartStore from '@/stores/cart';
import 'swiper/css';
import 'swiper/css/navigation';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  name: 'ProductView',
  data() {
    return {
      product: {},
      products: [],
      similarProducts: [],
      qty: 1,
      modules: [Autoplay, Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      id: '',
    };
  },
  components: {
    RouterView,
    Swiper,
    SwiperSlide,
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'getCarts']),
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
    getProducts() {
      this.showLoading();
      this.$http
        .get(`${VITE_API}api/${VITE_PATH}/product/${this.id}`)
        .then((res) => {
          this.product = res.data.product;
          // const { product } = res.data;
          // this.product = product;
          this.getCategoryProducts();
          this.hideLoading();
        })
        .catch((err) => {
          // alert(err.response.data.message);
          const errMessage = err.response?.data?.message || '資料錯誤';
          this.hideLoading();
          this.$swal.fire({
            toast: true,
            position: 'top',
            icon: 'error',
            title: `${errMessage}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    getCategoryProducts() {
      const { category, id } = this.product;
      this.$http
        .get(`${VITE_API}api/${VITE_PATH}/products/all`)
        .then((res) => {
          const { products } = res.data;
          this.products = products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
      this.similarProducts = this.products.filter(
        (item) => item.category === category && item.id !== id,
      );
    },
    toggleId(id) {
      this.$router.push(`/product/${id}`);
      this.id = id;
      this.getProducts();
    },
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  created() {
    const { id } = this.$route.params;
    this.id = id;
    this.getProducts();
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半遮蓋陰影的顏色和透明度 */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.swiper-slide:hover .overlay {
  opacity: 1;
}
</style>
