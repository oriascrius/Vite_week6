import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_API, VITE_PATH } = import.meta.env;

const cartStore = defineStore('cart', {
  // state 概念同「data」，在此可以使用箭頭函式
  state: () => ({
    carts: {},
    total: 0,
    final_total: 0,
  }),
  // actions 概念同「methods」
  actions: {
    // 取得購物車列表
    getCart() {
      // 這裡不屬於vue，所以需要另外 import axios，不能使用 this 需使用 axios
      axios
        .get(`${VITE_API}api/${VITE_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.total = res.data.data.total;
          this.final_total = res.data.data.final_total;
          //   this.states = { isLoading: false, fullPage: false };
        })
        .catch((err) => {
          alert(err.response.data.message);
          //   this.states = { isLoading: false, fullPage: false };
        });
    },
    // eslint-disable-next-line camelcase
    addToCart(product_id, qty = 1) {
      const data = {
        // eslint-disable-next-line camelcase
        product_id,
        qty,
      };
      axios
        .post(`${VITE_API}api/${VITE_PATH}/cart`, { data })
        .then(() => {
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  // getters 概念同「computed」
  getters: {},
});

export default cartStore;
