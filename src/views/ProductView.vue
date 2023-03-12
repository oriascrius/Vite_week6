<template>
  <!-- 單一商品 -->
  <div class="container text-custom_medium-green">
    <div class="row mt-3">
      <!-- 單一商品圖片 - 左 -->
      <div class="col-md-5">
        <img :src="product.imageUrl" :alt="product.title" class="w-100" height="400" />
      </div>
      <!-- 單一商品詳細資料 - 右 -->
      <div class="col-md-7">
        <ul class="row list-unstyled">
          <li class="col-md-6 mt-4">
            <h4 class="mt-3 fw-bold">{{ product.title }}</h4>
          </li>
          <li class="col-md-6">
            <!-- 商品分類麵包屑 -->
            <nav aria-label="breadcrumb">
              <ul class="breadcrumb list-unstyled py-3">
                <li class="breadcrumb-item"><router-link to="/products">全部商品</router-link></li>
                <li class="breadcrumb-item">
                  <router-link to="/products"> {{ product.category }}</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <router-link :to="`/product/${this.productItemId}`">{{
                    product.title
                  }}</router-link>
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
      <h3 class="mt-7">相關商品</h3>
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
                  min-height: 300p,                 background-size: cover;
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
      similarProducts: [],
      qty: 1,
      productItemId: '',
      modules: [Autoplay, Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
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
      const { id } = this.$route.params;
      this.productItemId = id;
      this.$http
        .get(`${VITE_API}api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.getCategoryProducts();
          this.hideLoading();
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.hideLoading();
        });
    },
    getCategoryProducts() {
      const { category } = this.product;
      this.$http
        .get(`${VITE_API}api/${VITE_PATH}/products?category=${category}`)
        .then((res) => {
          this.similarProducts = res.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    toggleId(id) {
      this.$router.push(`/product/${id}`);
      this.id = id;
      this.getProducts();
    },
    // eslint-disable-next-line camelcase
    // addToCart(product_id, qty) {
    //   const data = {
    //     // eslint-disable-next-line camelcase
    //     product_id,
    //     qty,
    //   };
    //   this.$http
    //     .post(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`, { data })
    //     .then(() => {
    //       // 最後重置存放 id 為空
    //       // this.loadingItem = '';
    //       this.$swal.fire({
    //         toast: true,
    //         position: 'top-end',
    //         icon: 'success',
    //         title: '加入商品成功',
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     })
    //     .catch((err) => {
    //       alert(err.response.data.message);
    //     });
    // },
  },
  computed: {
    ...mapState(cartStore, ['cart', 'total', 'final_total']),
  },
  mounted() {
    this.showLoading();
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
/* #app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
</style>
