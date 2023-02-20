<template>
  <div>
    <Loading
      v-model:active="isLoading"
      :is-full-page="fullPage"
    >
      <template v-slot:default>
        <img
          src="../assets/images/loading_icon.png"
          alt=""
        />
      </template>
    </Loading>
    <!-- <Loading :active="isLoading"></Loading>-->
    <!-- 1. Nav -->
    <CommonNav></CommonNav>
    <!-- 2. header -->
    <header class="banner_block"></header>
    <!-- 3. 商品分類 -->
    <ul class="nav nav-tabs m-5 p-5 justify-content-center flex-nowrap text-nowrap">
      <li
        class="nav-item"
        v-for="tabItem in productsTab"
        :key="tabItem"
      >
        <a
          href="#"
          class="nav-link"
          :class="{ active: isActive === tabItem }"
          @click.prevent="isActive = tabItem"
        >{{ tabItem }}</a>
      </li>
    </ul>
    <!-- 4. 商品列表 -->
    <div class="container">
      <div class="mt-4">
        <!-- 商品列表 -->
        <div class="container">
          <div class="row">
            <div
              class="col-md-4 g-5"
              v-for="productsItem in productsFiltered"
              :key="productsItem.id"
            >
              <div class="card">
                <img
                  :src="productsItem.imageUrl"
                  class="card-img-top"
                  :alt="productsItem.title"
                  width="500"
                  height="300"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ productsItem.title }}</h5>
                  <p class="card-text">{{ productsItem.price }}</p>
                </div>
                <div class="card-footer text-center">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="openModal(productsItem.id)"
                  >
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="addToCart(productsItem.id)"
                    :disabled="productsItem.id === loadingItem"
                  >
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分頁元件 -->
        <PaginationModal
          :pages="page"
          @change-page="getProducts"
        ></PaginationModal>
      </div>
      <CommonFooter></CommonFooter>
    </div>
    <!-- 詳細商品 -->
    <UserProductModal
      :id="productId"
      :add-to-cart="addToCart"
      ref="productModal"
      :open-modal="openModal"
      :clear-qty="addToCart"
    >
    </UserProductModal>
  </div>
</template>

<script>
import UserProductModal from '@/components/UserProductModal.vue';
// import PaginationModal from '@/components/PaginationModal.vue';
import CommonNav from '@/components/CommonNav.vue';
import CommonFooter from '@/components/CommonFooter.vue';

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
      loadingItem: '',
      // loading 圖示判斷
      isLoading: false,
      // 商品品項種類
      productsTab: ['全部', '主食', '早午餐', '漢堡', '炸物', '甜點', '沙拉', '飲料'],
      // 預設頁籤在全部
      isActive: '全部',
    };
  },
  methods: {
    // 商品列表 - 取得商品列表 API
    getProducts(page = 1) {
      // VueLoading
      // const loader = this.$loading.show();
      this.isLoading = true;
      this.$http
        .get(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          this.page = res.data.pagination;
          // loader.hide();
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
          // loader.hide();
          this.isLoading = false;
        });
    },
    // 單一商品細節 - HTML 上 拿到 id，從這接收後在 props 到 modal 子元件裡面 :id = productId
    openModal(id) {
      this.productId = id;
    },
    // 加入購物車 - 將 商品 ID、數量 加入到購物車
    // eslint-disable-next-line camelcase
    addToCart(product_id, qty = 1) {
      const data = {
        // eslint-disable-next-line camelcase
        product_id,
        qty,
      };
      // 按下加入購物車時取得 id -> 先禁用按鈕點擊 -> 等待下方請求 API 完成
      // 對應 商品列表中，:disabled="product.id === loadingItem"
      // eslint-disable-next-line camelcase
      this.loadingItem = product_id;
      this.$http
        .post(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`, { data })
        .then(() => {
          // 最後重置存放 id 為空
          this.loadingItem = '';
          // 控制 當進入詳細商品頁面，按下加入購物車後，關閉 Modal（從內層拿到方法關閉）
          this.$refs.productModal.hideModal();
          this.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: '加入商品成功',
            showConfirmButton: false,
            timer: 1500,
          });
          // 按下加入購物車後 -> 取得購物車資料呈現
          // this.getCarts();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  computed: {
    // 篩選商品分類
    productsFiltered() {
      if (this.isActive === '全部') {
        return this.products;
      }
      return this.products.filter((item) => item.category === this.isActive);
    },
  },
  components: {
    // 詳細商品 modal
    UserProductModal,
    // 分頁 元件
    // PaginationModal,
    // Nav 元件
    CommonNav,
    // Footer 元件
    CommonFooter,
  },
  mounted() {
    this.getProducts();
  },
};
</script>
