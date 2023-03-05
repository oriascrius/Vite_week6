/* eslint-disable camelcase */
import { defineStore, mapActions } from 'pinia';
import axios from 'axios';
import LoadingStore from '@/stores/Loading';

const { VITE_API, VITE_PATH } = import.meta.env;

const orderStore = defineStore('order', {
  // state 概念同「data」，在此可以使用箭頭函式
  state: () => ({
    form: {
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
      },
      message: '',
    },
  }),
  // actions 概念同「methods」
  actions: {
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入行動電話';
    },
    // 送出訂單
    sendOrder() {
      axios
        .post(`${VITE_API}api/${VITE_PATH}/order`, {
          data: this.form,
        })
        .then((res) => {
          // this.showLoading();
          const { orderId } = res.data;
          // this.$swal.fire({
          //   toast: true,
          //   position: "top-end",
          //   icon: "success",
          //   title: "送出訂單成功",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          // 清空表單
          this.$refs.form.resetForm();
          // 清空留言
          this.form.message = '';
          // this.hideLoading();
          this.$router.push(`/orderPay/${orderId}`);
        })
        .catch(() => {
          // this.hideLoading();
          // this.$swal.fire({
          //   toast: true,
          //   position: "center",
          //   icon: "error",
          //   title: "購物車沒東西唷!",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
        });
    },
  },
  // getters 概念同「computed」
  getters: {},
});

export default orderStore;
