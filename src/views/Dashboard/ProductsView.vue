<template>
  <!-- 主要畫面 -->
  <div class="container">
    <Loading v-model:active="states.isLoading" :is-full-page="states.fullPage">
      <template v-slot:default>
        <img src="@/assets/images/loading_icon.png" alt="loading圖" class="loadingIcon" />
      </template>
    </Loading>
    <div class="text-end mt-4 me-5">
      <button type="button" class="btn btn-custom_btn-color text-white" @click="openModal('new')">
        增加新商品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>分類</th>
          <th>商品名稱</th>
          <th class="text-center">商品圖片</th>
          <th>原價</th>
          <th>售價</th>
          <th>是否啟用</th>
          <th class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="align-middle">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-center">
            <button type="button" class="btn btn-light" @click="openModal('lightbox', product)">
              <img
                :src="product.imageUrl"
                alt="商品圖"
                class="rounded"
                style="width: 100px; height: 100px; object-fit: cover"
              />
            </button>
          </td>
          <td>{{ product.origin_price }}</td>
          <td>{{ product.price }}</td>
          <td>
            <span v-if="product.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td class="text-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-custom_dark-green"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-custom_red ms-md-2"
                @click="openModal('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁元件 -->
    <!-- props 寫法 -> :get-data="getData" -->
    <!-- emit 寫法 -> @change-page="getData" -->
    <pagination :pages="page" @change-page="getData"></pagination>
  </div>
  <!-- 新增、編輯 Modal -->
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <!-- 新增、編輯商品 Modal 元件 -->
    <!-- :temp-product="tempProduct" -> 讀取 modal 內資料 -->
    <!--  :upload-images="updateProduct" -> 上傳本地圖片 -->
    <MealModal
      :temp-product="tempProduct"
      :is-new="isNew"
      @create-images="createImages"
      @update-meals="updateProduct"
    ></MealModal>
  </div>
  <!-- 刪除 Modal -->
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <DelmealModal :temp-product="tempProduct" @del-meals="delProduct"></DelmealModal>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import Pagination from '@/components/PaginationModal.vue';
// 引入 新增、編輯商品 Modal 元件
import MealModal from '@/components/MealModal.vue';
// 引入 刪除商品 Modal 元件
import DelmealModal from '@/components/DelmealModal.vue';

export default {
  name: 'ProductsView',
  props: ['token'],
  data() {
    return {
      modal: {},
      // 裝 API 傳來的資料
      products: [],
      // 裝 modal 視窗的資料
      tempProduct: {
        imagesUrl: [],
      },
      productId: '',
      // 方便判斷是 新增 or 編輯 -> 可以根據 true、false 動態變更 API 動作，post or put
      isNew: false,
      // 商品分頁
      page: {},
      // loading 圖示判斷
      states: {
        isLoading: false,
        fullPage: false,
      },
    };
  },
  components: {
    Pagination,
    MealModal,
    DelmealModal,
  },
  methods: {
    // 使用管理者的 API -> 取得商品列表
    // 參數放分頁 -> page = 1 可先預設第一分頁，如果參數只有 page，會得到 undefined
    getData(page = 1) {
      this.states = { isLoading: true, fullPage: true };
      const url = `${import.meta.env.VITE_API}api/${
        import.meta.env.VITE_PATH
      }/admin/products?page=${page}`;
      this.$http
        .get(url)
        .then((response) => {
          this.states = { isLoading: false, fullPage: false };
          this.products = response.data.products;
          this.page = response.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.states = { isLoading: false, fullPage: false };
        });
    },
    // 按下按鈕後的動作（渲染，不是 API 動作）
    // isNew -> 在 HTML 標籤寫上判斷 新增、編輯、刪除
    // item -> 編輯的話根據 item 帶入舊資料、刪除的話根據該 item 刪除該筆資料
    openModal(isNew, item) {
      if (isNew === 'new') {
        // 新增時重置裝 modal 的容器 -> 重置 modal 輸入框
        this.tempProduct = {
          imagesUrl: [],
        };
        // 方便 API 動態判斷
        this.isNew = true;
        // 跳出視窗
        this.modal = new Modal(this.$refs.productModal, {
          keyboard: false,
          backdrop: 'static',
        });
        this.modal.show();
      } else if (isNew === 'edit') {
        // 編輯時 -> 拿到參數 item -> 代表拿到原有資料
        this.tempProduct = { ...item };
        // 方便 API 動態判斷
        this.isNew = false;
        // 跳出視窗
        this.modal = new Modal(this.$refs.productModal, {
          keyboard: false,
          backdrop: 'static',
        });
        this.modal.show();
      } else if (isNew === 'delete') {
        // 刪除時 -> 拿到參數 item -> 代表拿到原有資料 -> 開啟刪除 modal 視窗
        this.tempProduct = { ...item };
        // 跳出視窗
        this.modal = new Modal(this.$refs.delProductModal, {
          keyboard: false,
          backdrop: 'static',
        });
        this.modal.show();
      } else if (isNew === 'lightbox') {
        this.tempProduct = { ...item };
        // 跳出視窗
        this.modal = new Modal(this.$refs.productModal, {
          keyboard: false,
          backdrop: 'static',
        });
        this.modal.show();
      }
    },
    // 新建、編輯 API 動作
    updateProduct() {
      // 新建 API
      let url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product`;
      let http = 'post';

      //  編輯 API
      // !this.isNew -> 判斷邏輯 -> 因為 if(這裡要true) 後續才會執行，而裡面要做編輯動作
      // 所以 if(!false) -> 可以接下去執行也可以接續 -> false = 做編輯動作
      if (!this.isNew) {
        url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product/${
          this.tempProduct.id
        }`;
        http = 'put';
      }
      // 要夾帶更改的資料
      this.$http[http](url, { data: this.tempProduct })
        // 成功
        .then(() => {
          if (!this.isNew) {
            this.$swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: '修改商品成功',
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            this.$swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: '新建一個新商品成功',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          // 關閉視窗
          this.modal.hide();
          // 重新取得資料
          this.getData();
        })
        // 失敗
        .catch((err) => {
          // 跳出提醒視窗
          alert(err.response.data.message);
        });
    },
    // 刪除 API 動作
    delProduct() {
      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product/${
        this.tempProduct.id
      }`;
      this.$http
        .delete(url)
        // 成功
        .then(() => {
          this.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: '刪除商品成功',
            showConfirmButton: false,
            timer: 1500,
          });
          // 關閉 modal 視窗
          this.modal.hide();
          // 重新取得 資料
          this.getData();
        })
        // 失敗
        .catch((err) => {
          // 跳出 response.data.message 提醒框
          alert(err.data.message);
        });
    },
    // 圖片
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
