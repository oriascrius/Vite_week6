<template>
  <div class="container">
    <Loading v-model:active="states.isLoading" :is-full-page="states.fullPage">
      <template v-slot:default>
        <img src="../assets/images/loading_icon.png" alt="loading圖" class="loadingIcon" />
      </template>
    </Loading>
    <UserNav></UserNav>
    <div class="row mt-3">
      <!-- 單一商品圖片 - 左 -->
      <div class="col-5">
        <img :src="product.imageUrl" :alt="product.title" class="w-100" height="400" />
      </div>
      <!-- 單一商品詳細資料 - 右 -->
      <div class="col-7">
        <ul class="row list-unstyled">
          <li class="col-md-6 mt-4">
            <h4 class="mt-3 text-custom_btn-color">{{ product.title }}</h4>
          </li>
          <li class="col-md-6">
            <!-- 商品分類麵包屑 -->
            <nav aria-label="breadcrumb">
              <ul class="breadcrumb list-unstyled py-3">
                <li class="breadcrumb-item text-muted"><a href="#">全部商品</a></li>
                <li class="breadcrumb-item text-muted active" aria-current="page">
                  <a href="#">{{ product.title }}</a>
                </li>
              </ul>
            </nav>
          </li>
          <li>
            <span class="badge bg-custom_dark-green rounded-pill">{{ product.category }}</span>
          </li>
          <li>
            <p class="mt-5">材料：{{ product.content }}</p>
          </li>
          <li>
            <p>內容：{{ product.content }}</p>
          </li>
          <li>
            <h5>$ {{ product.price }} 元</h5>
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
              加到購物車
            </button>
          </div>
        </ul>
      </div>
    </div>
  </div>
  <hr />
  <UserSubscribe></UserSubscribe>
  <UserFooter></UserFooter>
</template>

<script>
import UserNav from '@/components/front-end/UserNav.vue';
import UserFooter from '@/components/front-end/UserFooter.vue';
import UserSubscribe from '@/components/front-end/UserSubscribe.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  name: 'ProductView',
  data() {
    return {
      product: {},
      states: {
        isLoading: true,
        fullPage: true,
      },
      qty: 1,
    };
  },
  components: {
    UserNav,
    UserFooter,
    UserSubscribe,
  },
  methods: {
    getProducts() {
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_API}api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.states = { isLoading: false, fullPage: false };
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.states = { isLoading: false, fullPage: false };
        });
    },
    // eslint-disable-next-line camelcase
    addToCart(product_id, qty) {
      const data = {
        // eslint-disable-next-line camelcase
        product_id,
        qty,
      };
      this.$http
        .post(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`, { data })
        .then(() => {
          // 最後重置存放 id 為空
          // this.loadingItem = '';
          this.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: '加入商品成功',
            showConfirmButton: false,
            timer: 1500,
          });
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
