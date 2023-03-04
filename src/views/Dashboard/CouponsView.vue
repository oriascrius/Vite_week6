<template>
  <div class="container-fluid">
    <div class="text-end mt-4 me-5">
      <button type="button" class="btn btn-custom_btn-color text-white" @click="openModal('new')">
        增加新優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>優惠券名稱</th>
          <th>優惠卷碼</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in coupons" :key="coupon.id">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.code }}</td>
          <td>{{ coupon.percent }} %</td>
          <td>
            {{ new Date(coupon.due_date * 1000).toLocaleDateString() }}
          </td>
          <td>
            <span v-if="coupon.is_enabled" class="text-success">已啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td class="text-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-custom_dark-green"
                @click="openModal('edit', coupon)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-custom_red ms-md-2"
                @click="openModal('delete', coupon)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 優惠券分頁 -->
    <Pagination :pages="page" @change-page="getData"></Pagination>
    <!-- 新增、編輯 Modal -->
    <div
      id="couponsModal"
      ref="couponsModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="couponsModalLabel"
      aria-hidden="true"
    >
      <!-- 新建、編輯優惠券 Modal 元件  -->
      <MealModal
        :temp-coupons="tempCoupons"
        :is-new="isNew"
        @update-coupons="updateCoupons"
      ></MealModal>
    </div>
    <!-- 刪除 Modal -->
    <div
      id="delCouponsModal"
      ref="delCouponsModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="delCouponsModalLabel"
      aria-hidden="true"
    >
      <!-- 刪除優惠券 Modal 元件 -->
      <DelmealModal :temp-coupons="tempCoupons" @del-coupons="delCoupons"></DelmealModal>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import { mapActions } from 'pinia';
import Pagination from '@/components/PaginationModal.vue';
// 引入 新增、編輯商品 Modal 元件
import MealModal from '@/components/CouponModal.vue';
// 引入 刪除商品 Modal 元件
import DelmealModal from '@/components/DelCouponModal.vue';
import LoadingStore from '@/stores/Loading';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  name: 'CouponView',
  props: ['token'],
  data() {
    return {
      // 裝 API 傳來的資料
      coupons: [],
      // 裝 modal 視窗的資料
      tempCoupons: {},
      // 方便判斷是 新增 or 編輯 -> 可以根據 true、false 動態變更 API 動作，post or put
      isNew: false,
      // 優惠券分頁
      page: {},
    };
  },
  components: {
    // 分頁元件
    Pagination,
    MealModal,
    DelmealModal,
  },
  methods: {
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
    // 使用管理者的 API -> 取得商品列表
    // 參數放分頁 -> page = 1 可先預設第一分頁，如果參數只有 page，會得到 undefined
    getData(page = 1) {
      const url = `${VITE_API}api/${VITE_PATH}/admin/coupons?page=${page}`;
      this.$http
        .get(url)
        .then((response) => {
          this.coupons = response.data.coupons;
          this.page = response.data.pagination;
          this.hideLoading();
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.hideLoading();
        });
    },
    // 按下按鈕後的動作（渲染，不是 API 動作）
    // isNew -> 在 HTML 標籤寫上判斷 新增、編輯、刪除
    // item -> 編輯的話根據 item 帶入舊資料、刪除的話根據該 item 刪除該筆資料
    openModal(isNew, item) {
      if (isNew === 'new') {
        // 新增時重置裝 modal 的容器 -> 重置 modal 輸入框
        this.tempCoupons = {
          due_date: new Date().getTime() / 1000,
          is_enabled: 0,
        };
        // 方便 API 動態判斷
        this.isNew = true;
        // 跳出視窗
        this.modal = new Modal(this.$refs.couponsModal, {
          keyboard: true,
          backdrop: 'true',
        });
        this.modal.show();
      } else if (isNew === 'edit') {
        // 編輯時 -> 拿到參數 item -> 代表拿到原有資料
        this.tempCoupons = { ...item };
        // 方便 API 動態判斷
        this.isNew = false;
        // 跳出視窗
        this.modal = new Modal(this.$refs.couponsModal, {
          keyboard: true,
          backdrop: 'true',
        });
        this.modal.show();
      } else if (isNew === 'delete') {
        // 刪除時 -> 拿到參數 item -> 代表拿到原有資料 -> 開啟刪除 modal 視窗
        this.tempCoupons = { ...item };
        // 跳出視窗
        this.modal = new Modal(this.$refs.delCouponsModal, {
          keyboard: true,
          backdrop: 'true',
        });
        this.modal.show();
      }
    },
    // 新建、編輯 API 動作
    updateCoupons() {
      // 新建 API
      let url = `${VITE_API}api/${VITE_PATH}/admin/coupon`;
      let http = 'post';

      //  編輯 API
      // !this.isNew -> 判斷邏輯 -> 因為 if(這裡要true) 後續才會執行，而裡面要做編輯動作
      // 所以 if(!false) -> 可以接下去執行也可以接續 -> false = 做編輯動作
      if (!this.isNew) {
        url = `${VITE_API}api/${VITE_PATH}/admin/coupon/${this.tempCoupons.id}`;
        http = 'put';
      }
      // 要夾帶更改的資料
      this.$http[http](url, { data: this.tempCoupons })
        // 成功
        .then(() => {
          if (!this.isNew) {
            this.$swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: '修改優惠券成功',
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            this.$swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: '新建一個新優惠券成功',
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
    delCoupons() {
      const url = `${VITE_API}api/${VITE_PATH}/admin/coupon/${this.tempCoupons.id}`;
      this.$http
        .delete(url)
        // 成功
        .then(() => {
          this.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: '刪除優惠券成功',
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
  },
  mounted() {
    this.getData();
  },
};
</script>
