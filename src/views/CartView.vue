<template>
    <div class="container">
      <!-- 購物車 -->
      <div class="row justify-content-center">
          <div class="text-center my-5">
                  <button
                    class="btn btn-outline-danger"
                    type="button"
                    @click="deleteCars"
                    :disabled="!cart.carts?.length"
                  >
                    清空購物車
                  </button>
                </div>
        <div class="col-md-6">
          <table class="table align-middle">
            <thead>
              <tr>
                <th style="width: 100px"></th>
                <th style="width: 100px">品名</th>
                <th style="width: 150px">數量 / 單位</th>
                <th style="width: 100px">單價</th>
                <th style="width: 100px">小計</th>
              </tr>
            </thead>
            <tbody>
              <!-- 當 cart 有內容才呈現購物車 -->
              <tr v-for="cartItem in cart.carts" :key="cartItem.id">
                <td style="width: 100px">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="deleteItem(cartItem)"
                    :disabled="cartItem.id === loadingItem"
                  >
                    x
                  </button>
                </td>
                <td>{{ cartItem.product.title }}</td>
                <td>
                  <div class="input-group input-group-sm">
                    <select
                      name=""
                      id=""
                      v-model="cartItem.qty"
                      @change="updateCartItem(cartItem)"
                      :disabled="cartItem.id === loadingItem"
                    >
                      <option :value="i" v-for="i in 20" :key="i + '1233'">
                        {{ i }}
                      </option>
                    </select>
                    <div class="ms-2">{{ cartItem.product.unit }}</div>
                  </div>
                </td>
                <td>{{ cartItem.product.price }}</td>
                <td>{{ cartItem.total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>總計</td>
                <td>{{ cart.total }}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td class="text-success">折扣價</td>
                <td class="text-success">{{ cart.final_total}}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <!-- 表單驗證 -->
      <div class="my-5 row justify-content-center">
        <Form
          ref="form"
          class="col-md-6"
          v-slot="{ errors }"
          @submit="createOrder"
        >
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
            <label for="name" class="form-label">收件人姓名</label>
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
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
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
            <label for="message" class="form-label">留言</label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
          </div>
        </Form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CartView',
  data() {
    return {
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      coupon_code: '',
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_API}api/${
        import.meta.env.VITE_PATH
      }/cart`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.cart = response.data.data;
          this.isLoading = false;
        } else {
          alert(response.data.message);
        }
      });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_API}api/${
        import.meta.env.VITE_PATH
      }/cart/${id}`;
      this.loadingStatus.loadingItem = id;
      this.$http
        .delete(url)
        .then((response) => {
          alert(response.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
      this.loadingStatus.loadingItem = '';
      this.isLoading = false;
    },
    createOrder() {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_API}api/${
        import.meta.env.VITE_PATH
      }/order`;
      const order = this.form;
      this.$http
        .post(url, { data: order })
        .then((response) => {
          alert(response.data.message);
          this.$refs.form.resetForm();
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>
