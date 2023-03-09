<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 text-custom_medium-green">
        <form @submit.prevent="payOrder">
          <div class="card rounded-0 py-4 mb-3">
            <div class="card-header border-0 bg-white px-4 py-0 text-custom_medium-green">
              <h3 class="fw-bold h4">訂單資訊</h3>
            </div>
            <div class="card-body px-4py-0">
              <ul class="list-group list-group-flush px-3">
                <li class="list-group-item px-0">
                  <div class="d-flex mt-2">
                    <div class="w-100 d-flex flex-column text-custom_medium-green">
                      <!-- <div class="d-flex justify-content-between fw-bold">123</div> -->
                      <div class="d-flex justify-content-between">
                        <p class="mb-0">Email</p>
                        <p>{{ order.user.email }}</p>
                      </div>
                      <div class="d-flex justify-content-between">
                        <p class="mb-0">姓名</p>
                        <p>{{ order.user.name }}</p>
                      </div>
                      <div class="d-flex justify-content-between">
                        <p class="mb-0">電話</p>
                        <p>{{ order.user.tel }}</p>
                      </div>
                      <div class="d-flex justify-content-between">
                        <p class="mb-0">地址</p>
                        <p>{{ order.user.address }}</p>
                      </div>
                      <div class="d-flex justify-content-between">
                        <p class="mb-0">付款狀態</p>

                        <p :class="{ 'text-success': order.is_paid }">
                          {{ order.is_paid ? '付款完成' : '尚未付款' }}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-6 text-custom_medium-green">
        <form @submit.prevent="payOrder">
          <div class="card rounded-0 py-4 mb-3">
            <div class="card-header border-bottom-0 bg-white px-4 py-0">
              <h3 class="fw-bold h4">訂單內容</h3>
            </div>
            <div class="card-body px-4 py-0">
              <ul class="list-group list-group-flush">
                <li
                  v-for="orderItem in order.products"
                  :key="orderItem.id"
                  class="list-group-item px-0"
                >
                  <div class="d-flex mt-2 text-custom_medium-green">
                    <img
                      :src="orderItem.product?.imageUrl"
                      :alt="orderItem.product?.title"
                      class="me-2"
                      style="width: 60px; height: 60px; object-fit: cover"
                    />
                    <div class="w-100 d-flex flex-column">
                      <div class="d-flex justify-content-between fw-bold">
                        <h5>{{ orderItem.product?.title }}</h5>
                      </div>
                      <div class="d-flex justify-content-between mt-auto">
                        <p class="mb-0">
                          <small>x{{ orderItem.qty }}</small>
                        </p>
                        <p class="mb-0">NT$ {{ orderItem.product?.price }}</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0 pb-0 text-custom_medium-green">
                  <div class="d-flex justify-content-between mt-2">
                    <p class="mb-0 h4">總計</p>
                    <p class="mb-0 h4">NT$ {{ order.total }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <router-link to="/orderSuccess">
            <div class="text-end mt-4">
              <button type="button" class="btn btn-custom_btn-color text-white">確認付款</button>
            </div>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      order: {
        products: [],
        user: {},
      },
    };
  },
  methods: {
    getOrder() {
      this.$http
        .get(`${VITE_API}api/${VITE_PATH}/order/${this.orderId}`)
        .then((res) => {
          const { order } = res.data;
          this.order = order;
        })
        .catch(() => {
          // const errMessage = err.response?.data?.message || '資料錯誤';
        });
    },
    payOrder() {
      this.$http
        .post(`${VITE_API}api/${VITE_PATH}/pay/${this.orderId}`)
        .then(() => {
          this.getOrder();
        })
        .catch(() => {
          // const errMessage = err.response?.data?.message || '資料錯誤';
        });
    },
  },
  mounted() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
