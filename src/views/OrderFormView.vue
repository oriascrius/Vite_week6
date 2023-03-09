<template>
  <div class="container text-custom_medium-green">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <nav class="navbar navbar-expand-lg navbar-light px-0">
          <ul
            class="list-unstyled mb-0 ms-md-auto d-flex
            align-items-center justify-content-between
            justify-content-md-end w-100 mt-md-0 mt-4"
          >
            <li class="me-md-6 me-3 position-relative custom-step-line">
              <i class="fas fa-check-circle d-md-inline d-block text-center"></i>
              <span class="text-nowrap">購物車</span>
            </li>
            <li class="me-md-6 me-3 position-relative custom-step-line">
              <i class="fas fa-check-circle d-md-inline d-block text-center"></i>
              <span class="text-nowrap">表單確認</span>
            </li>
            <li>
              <i class="fas fa-dot-circle d-md-inline d-block text-center"> </i>
              <span class="text-nowrap">訂購成功</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <h3 class="py-3 h4 fw-bold">訂購表單</h3>
    <div class="row pb-5 g-6">
      <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="sendOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">訂購姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">訂購電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            :rules="isPhone"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">訂購地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">想告訴我們</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="row text-center">
          <div class="col-6">
            <router-link to="/cart">
              <button type="button" class="btn btn-custom_btn-color text-white mt-4">
                回購物車
              </button>
            </router-link>
          </div>
          <div class="col-6">
            <button type="submit" class="btn btn-custom_btn-color text-white mt-4">送出訂單</button>
          </div>
        </div>
      </Form>

      <div class="col-md-6">
        <div class="border border-custom_medium-green p-4 mb-4">
          <div class="d-flex py-2" v-for="cartItem in cart.carts" :key="cartItem.id">
            <img
              :src="cartItem.product.imageUrl"
              :alt="cartItem.total"
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">{{ cartItem.product.title }}</p>
                <p class="mb-0">NT$ {{ cartItem.total }}</p>
              </div>
              <p class="mb-0 fw-bold">x{{ cartItem.qty }}</p>
            </div>
          </div>
          <table class="table mt-4 p-2 border-top border-bottom">
            <tbody>
              <tr class="text-custom_medium-green">
                <th scope="row" class="border-0 px-0 pt-4">小計</th>
                <td class="text-end border-0 px-0 pt-4">NT$ {{ cart.total }}</td>
              </tr>
            </tbody>
          </table>
          <ul class="list-unstyled mt-4">
            <li class="input-group w-100">
              <input
                type="text"
                class="form-control"
                v-model="couponCode"
                placeholder="輸入優惠碼可獲得折扣唷"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark"
                  type="button"
                  @click="addCouponCode(couponCode)"
                >
                  <i class="bi bi-gift"></i>
                </button>
              </div>
            </li>
            <table class="table mt-4 p-2">
               <tbody>
                <tr class="text-custom_medium-green">
                  <th scope="row" class="border-0 px-0 pt-4 h4">總計</th>
                  <td class="text-end border-0 px-0 pt-4">NT$ {{ messages.data?.final_total }}</td>
                </tr>
              </tbody>
            </table>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import LoadingStore from '@/stores/Loading';
import cartStore from '@/stores/cart';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入行動電話';
    },
    // 送出訂單
    sendOrder() {
      this.$http
        .post(`${VITE_API}api/${VITE_PATH}/order`, {
          data: this.form,
        })
        .then((res) => {
          // this.showLoading();
          const { orderId } = res.data;
          this.$swal.fire({
            toast: true,
            position: 'top',
            icon: 'success',
            title: '送出訂單成功',
            showConfirmButton: false,
            timer: 1500,
          });
          // 清空表單
          this.$refs.form.resetForm();
          // 清空留言
          this.form.message = '';
          // this.hideLoading();
          this.$router.push(`/orderPay/${orderId}`);
        })
        .catch(() => {
          this.hideLoading();
          this.$swal.fire({
            toast: true,
            position: 'top',
            icon: 'error',
            title: '購物車沒東西唷!',
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
    ...mapActions(cartStore, ['getCarts', 'addCouponCode']),
  },
  computed: {
    ...mapState(cartStore, ['cart', 'messages']),
    ...mapWritableState(cartStore, ['couponCode']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
