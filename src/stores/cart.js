/* eslint-disable camelcase */
import { defineStore, mapActions } from 'pinia';
import axios from 'axios';
import LoadingStore from '@/stores/Loading';

const { VITE_API, VITE_PATH } = import.meta.env;

const cartStore = defineStore('cart', {
  // state 概念同「data」，在此可以使用箭頭函式
  state: () => ({
    cart: [],
    loadingItem: '',
  }),
  // actions 概念同「methods」
  actions: {
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
    // 取得購物車列表
    getCarts() {
      // 這裡不屬於vue，所以需要另外 import axios，不能使用 this 需使用 axios
      axios
        .get(`${VITE_API}api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data;
          this.hideLoading();
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.hideLoading();
        });
    },
    addToCart(product_id, qty = 1) {
      const data = {
        product_id,
        qty,
      };
      axios
        .post(`${VITE_API}api/${VITE_PATH}/cart`, { data })
        .then(() => {
          // this.$swal.fire({
          //   toast: true,
          //   position: 'top-center',
          //   icon: 'success',
          //   title: '加入商品成功',
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          this.getCarts();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    updateCartItem(cartItem) {
      const data = {
        product_id: cartItem.product.id,
        qty: cartItem.qty,
      };
      // 在購物車裡面時，變動數量時取得 id -> 先禁用按鈕點擊 -> 等待下方請求 API 完成
      // 對應 購物車列表中， :disabled="item.id === loadingItem"
      this.loadingItem = cartItem.id;
      axios
        .put(`${VITE_API}api/${VITE_PATH}/cart/${cartItem.id}`, {
          data,
        })
        .then(() => {
          // this.$swal.fire({
          //   toast: true,
          //   position: 'top-center',
          //   icon: 'success',
          //   title: '修改數量成功',
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          // 控制 當進入詳細商品葉面，按下加入購物車後，關閉 Modal（從內層拿到方法關閉）
          this.getCarts();
          // 最後重置存放 id 為空
          this.loadingItem = '';
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    // 刪除購物車項目（單一） - 刪除購物車內商品品項
    deleteItem(cartItem) {
      // 在購物車裡面時，刪除時取得 id -> 先禁用按鈕點擊 -> 等待下方請求 API 完成
      // 對應 購物車列表中， :disabled="cartItem.id === loadingItem"
      this.loadingItem = cartItem.id;
      axios
        .delete(`${VITE_API}api/${VITE_PATH}/cart/${cartItem.id}`)
        .then(() => {
          // 控制 當進入詳細商品葉面，按下加入購物車後，關閉 Modal（從內層拿到方法關閉）
          this.getCarts();
          // 最後重置存放 id 為空
          this.loadingItem = '';
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    // 刪除購物車項目（全部）
    deleteCars() {
      axios
        .delete(`${VITE_API}api/${VITE_PATH}/carts`)
        .then(() => {
          // Swal.fire({
          //   toast: true,
          //   position: 'top-end',
          //   type: 'success',
          //   title: '購物車已清空',
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          this.getCarts();
          this.loadingItem = '';
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    addCouponCode(couponCode) {
      const coupon = {
        code: couponCode,
      };
      axios
        .post(`${VITE_API}api/${VITE_PATH}/coupon`, { data: coupon })
        .then(() => {
          // const { message } = res.data;
          this.getCarts();
        })
        .catch(() => {
          // const errMessage = err.response?.data?.message || '資料錯誤';
        });
    },
  },
  // getters 概念同「computed」
  getters: {},
});

export default cartStore;
