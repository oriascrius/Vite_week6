<template>
  <div class="container text-custom_medium-green">
    <div
      class="row"
      v-if="cart.carts?.length"
    >
      <h3 class="mt-3 h4 fw-bold">購物車清單</h3>
      <div class="col-md-8 mt-3">
        <table class="table text-custom_medium-green">
          <thead>
            <tr>
              <th
                scope="col"
                class="border-0 ps-0"
              >商品名稱</th>
              <th
                scope="col"
                class="border-0"
              >商品數量</th>
              <th
                scope="col"
                class="border-0"
              >商品小計</th>
              <th
                scope="col"
                class="border-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="cartItem in cart.carts"
              :key="cartItem.id"
            >
              <th
                scope="row"
                class="border-0 px-0 font-weight-normal py-4"
              >
                <img
                  :src="cartItem.product.imageUrl"
                  :alt="cartItem.title"
                  style="width: 72px; height: 72px; object-fit: cover"
                />

                <p class="mb-0 fw-bold ms-3 d-inline-block">{{ cartItem.product.title }}</p>
              </th>
              <td
                class="border-0 align-middle"
                style="max-width: 160px"
              >
                <div class="input-group pe-5">
                  <div class="input-group-prepend"></div>
                  <div class="input-group input-group-sm">
                    <select
                      name=""
                      id=""
                      v-model="cartItem.qty"
                      @change="updateCartItem(cartItem.id)"
                      :disabled="cartItem.id === loadingItem"
                    >
                      <option
                        :value="i"
                        v-for="i in 20"
                        :key="i + '1233'"
                      >
                        {{ i }}
                      </option>
                    </select>
                    <div class="ms-2">{{ cartItem.product.unit }}</div>
                  </div>
                </div>
              </td>
              <td class="border-0 align-middle">
                <p class="mb-0 ms-auto">NT$ {{ cartItem.product.price }}</p>
              </td>
              <td class="border-0 align-middle">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-custom_red"
                  @click="deleteItem(cartItem)"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4">
        <div class="border p-4 mb-4">
          <h3 class="h4 fw-bold mb-4">訂單細節</h3>
          <table class="table text-custom_medium-green border-bottom">
            <tbody>
              <tr>
                <th
                  scope="row"
                  class="border-0 px-0 pt-4 font-weight-normal"
                >總計</th>
                <td class="text-end border-0 px-0 pt-4">NT$ {{ cart.total }}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">折扣價</p>
            <p class="mb-0 h4 fw-bold">NT$ {{ cart.final_total }}</p>
          </div>
          <router-link to="/orderForm"><button
              type="button"
              class="btn btn-custom_btn-color text-white w-100 mt-4"
            >
              確認購物車
            </button></router-link>
        </div>
        <div class="text-center mt-6">
          <button
            class="btn btn-outline-custom_red"
            type="button"
            @click="deleteCars"
            :disabled="!cart.carts?.length"
          >
            清空購物車
          </button>
        </div>
      </div>
    </div>
    <div
      class="row text-center"
      v-else
    >
      <h4 class="text-custom_medium-green">購物車目前空空如也～趕緊將喜歡的餐點加入其中吧！</h4>
      <router-link
        to="/products"
        class=""
      >
        <button class="mt-4 btn btn-custom_btn-color text-white w-25">前往選購</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import LoadingStore from '@/stores/Loading';
import cartStore from '@/stores/cart';

export default {
  name: 'CartView',
  data() {
    return {
      couponCode: '',
      loadingItem: '',
    };
  },
  mounted() {
    this.getCarts();
  },
  methods: {
    ...mapActions(cartStore, [
      'addToCart',
      'getCarts',
      'updateCartItem',
      'deleteItem',
      'deleteCars',
      'addCouponCode',
    ]),
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
};
</script>
