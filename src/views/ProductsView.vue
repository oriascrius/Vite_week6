<template>
  <div>
    <RouterView></RouterView>
    <ProductsHeader></ProductsHeader>
    <!-- 商品分類 -->
    <ul class="nav nav-tabs m-5 p-3 justify-content-center flex-nowrap">
      <li class="nav-item" v-for="tabItem in productsTab" :key="tabItem">
        <a
          href="#"
          class="nav-link"
          :class="{ active: isActive === tabItem }"
          @click.prevent="isActive = tabItem"
          >{{ tabItem }}</a
        >
      </li>
    </ul>
    <!-- 商品列表 -->
    <div class="container text-custom_medium-green">
      <div class="mt-4">
        <!-- 商品列表 -->
        <div>
          <div class="row">
            <div
              class="col-md-4 g-4"
              v-for="productsItem in productsFiltered"
              :key="productsItem.id"
            >
              <div class="card rounded-3">
                <router-link :to="`/product/${productsItem.id}`">
                  <img
                    :src="productsItem.imageUrl"
                    class="card-img-top rounded-3"
                    :alt="productsItem.title"
                    width="200"
                    height="300"
                  />
                </router-link>
                <div class="card-body">
                  <div>
                    <h5 class="card-title">
                      {{ productsItem.title }}
                      <span class="badge bg-custom_medium-green rounded-pill fs-8">{{
                        productsItem.category
                      }}</span>
                    </h5>
                    <!-- <span class="badge bg-custom_medium-green rounded-pill">{{
                      productsItem.category
                    }}</span> -->
                  </div>
                  <p class="card-text">NT$ {{ productsItem.price }}</p>
                </div>
                <div class="card-footer text-center">
                  <router-link :to="`/product/${productsItem.id}`"
                    ><button type="button" class="btn btn-outline-secondary mx-4">
                      查看更多
                    </button></router-link
                  >
                  <button
                    type="button"
                    class="btn btn-outline-custom_dark-green mx-4"
                    @click="addToCart(productsItem.id)"
                  >
                    加入商品
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分頁元件 -->
        <PaginationModal class="mt-5" :pages="page" @change-page="getProducts"></PaginationModal>
      </div>
    </div>
    <!-- 詳細商品 -->
    <!-- <UserProductModal
      :id="productId"
      :add-to-cart="addToCart"
      ref="productModal"
      :open-modal="openModal"
      :clear-qty="addToCart"
    >
    </UserProductModal> -->
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import LoadingStore from '@/stores/Loading';
import cartStore from '@/stores/cart';
import ProductsHeader from '@/components/front-end/ProductsHeader.vue';
import PaginationModal from '@/components/PaginationModal.vue';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  name: 'ProductsView',
  data() {
    return {
      // 取得 遠端 API 商品資料
      products: [],
      // 存放 詳細商品頁面 Modal 開啟用的 ID
      productId: '',
      // 分頁
      page: {},
      // 防止一直觸發請求 API，給予 loading 緩衝，判斷有 id 時，先禁止按鈕
      // loadingItem: '',
      // 商品品項種類
      productsTab: ['全部', '主食', '早午餐', '漢堡', '炸物', '甜點', '沙拉', '飲料'],
      // 預設頁籤在全部
      isActive: '全部',
    };
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'getCarts']),
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
    // 商品列表 - 取得商品列表 API
    getProducts(page = 1) {
      this.$http
        .get(`${VITE_API}api/${VITE_PATH}/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          this.page = res.data.pagination;
          this.hideLoading();
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.hideLoading();
        });
    },
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    // 篩選商品分類
    productsFiltered() {
      if (this.isActive === '全部') {
        return this.products;
      }
      return this.products.filter((item) => item.category === this.isActive);
    },
  },
  components: {
    RouterView,
    ProductsHeader,
    PaginationModal,
  },
  mounted() {
    this.showLoading();
    this.getProducts();
  },
};
</script>
