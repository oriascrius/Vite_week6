<template>
  <div class="container">
    <Loading
      v-model:active="states.isLoading"
      :is-full-page="states.fullPage"
    >
      <template v-slot:default>
        <img
          src="../assets/images/loading_icon.png"
          alt="loading圖"
          class="loadingIcon"
        />
      </template>
    </Loading>
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
            <tr
              v-for="cartItem in cart.carts"
              :key="cartItem.id"
            >
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
              <td class="text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <!-- 表單驗證 -->
    <!-- is-invalid 是 bootstrap 中，Forms validation 顯示紅框 -->
    <div class="my-5 row justify-content-center">
      <Form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="sendOrder"
      >
        <div class="mb-3">
          <label
            for="email"
            class="form-label"
          >Email</label>
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
          <ErrorMessage
            name="email"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label
            for="name"
            class="form-label"
          >收件人姓名</label>
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
          <ErrorMessage
            name="姓名"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label
            for="tel"
            class="form-label"
          >收件人電話</label>
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
          <ErrorMessage
            name="電話"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label
            for="address"
            class="form-label"
          >收件人地址</label>
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
          <ErrorMessage
            name="地址"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label
            for="message"
            class="form-label"
          >留言</label>
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
          <button
            type="submit"
            class="btn btn-danger"
          >送出訂單</button>
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
      // 存放 遠端 API 購物車資料
      cart: {},
      // loading 圖示判斷
      states: {
        isLoading: false,
        fullPage: false,
      },
      loadingItem: '',
      // 存放使用者輸入資料
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
  mounted() {
    this.getCarts();
  },
  methods: {
    // 購物車列表 - 取得購物車資料
    getCarts() {
      // 這裡可作區塊 or 全畫面 loading
      // 目前做全畫面
      this.states = { isLoading: true, fullPage: true };
      this.$http
        .get(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data;
          this.states = { isLoading: false, fullPage: false };
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.states = { isLoading: false, fullPage: false };
        });
    },
    // 更改購物車中的數量 -> 連動價格
    // 從 HTML上@change="updateCartItem(item)"，item就是cart.carts
    // 裡面有兩種 id，一個是購物車 id、另個是 商品本身 id
    updateCartItem(cartItem) {
      const data = {
        product_id: cartItem.product.id,
        qty: cartItem.qty,
      };
      // 在購物車裡面時，變動數量時取得 id -> 先禁用按鈕點擊 -> 等待下方請求 API 完成
      // 對應 購物車列表中， :disabled="item.id === loadingItem"
      this.loadingItem = cartItem.id;
      this.$http
        .put(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart/${cartItem.id}`, {
          data,
        })
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
    // 刪除購物車項目（單一） - 刪除購物車內商品品項
    deleteItem(cartItem) {
      // 在購物車裡面時，刪除時取得 id -> 先禁用按鈕點擊 -> 等待下方請求 API 完成
      // 對應 購物車列表中， :disabled="cartItem.id === loadingItem"
      this.loadingItem = cartItem.id;
      this.$http
        .delete(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart/${cartItem.id}`)
        .then(() => {
          // SweetAlert 2
          this.$swal.fire({
            toast: true,
            position: 'top-end',
            type: 'success',
            title: '刪除商品成功',
            showConfirmButton: false,
            timer: 1500,
          });
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
      this.$http
        .delete(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/carts`)
        .then(() => {
          // SweetAlert 2
          this.$swal.fire({
            toast: true,
            position: 'top-end',
            type: 'success',
            title: '購物車已清空',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCarts();
          this.loadingItem = '';
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    // 自訂表單號碼規則
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入行動電話';
    },
    // 送出訂單
    sendOrder() {
      this.$http
        .post(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/order`, {
          data: this.form,
        })
        .then(() => {
          this.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: '送出訂單成功',
            showConfirmButton: false,
            timer: 1500,
          });
          // 清空表單
          this.$refs.form.resetForm();
          // 清空留言
          this.form.message = '';
          this.getCarts();
        })
        .catch(() => {
          this.$swal.fire({
            toast: true,
            position: 'center',
            icon: 'error',
            title: '購物車沒東西唷!',
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  },
};
</script>
