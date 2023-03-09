<template>
  <div class="container">
    <div
      style="
        min-height: 400px;
        background-image: url(/images/AboutUs_Banner_004.png);
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
      "
    ></div>
    <div class="mt-5 mb-7">
      <div class="row">
        <div class="col-md-6">
          <h2 class="text-custom_btn-color fw-bold h4">訂購成功</h2>
          <p class="text-muted mt-3">謝謝您的訂購，期待再次為您服務<br />繼續選購請點擊回到首頁</p>
          <router-link to="/" class="btn btn-outline-custom_btn-color mt-3"
            >Back To Home</router-link
          >
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
          </form>
        </div>
        <!-- <div class="col-md-6">
          <div class="card rounded-0 py-4">
            <div class="card-header border-bottom-0 bg-white px-4 py-0">
              <h2>Order Detail</h2>
            </div>
            <div class="card-body px-4 py-0">
              <ul class="list-group list-group-flush">
                <li class="list-group-item px-0">
                  <div class="d-flex mt-2">
                    <img
                      src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                      alt=""
                      class="me-2"
                      style="width: 60px; height: 60px; object-fit: cover"
                    />
                    <div class="w-100 d-flex flex-column">
                      <div class="d-flex justify-content-between fw-bold">
                        <h5>Lorem ipsum</h5>
                        <p class="mb-0">x10</p>
                      </div>
                      <div class="d-flex justify-content-between mt-auto">
                        <p class="text-muted mb-0"><small>NT$12,000</small></p>
                        <p class="mb-0">NT$12,000</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0">
                  <div class="d-flex mt-2">
                    <img
                      src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                      alt=""
                      class="me-2"
                      style="width: 60px; height: 60px; object-fit: cover"
                    />
                    <div class="w-100 d-flex flex-column">
                      <div class="d-flex justify-content-between fw-bold">
                        <h5>Lorem ipsum</h5>
                        <p class="mb-0">x10</p>
                      </div>
                      <div class="d-flex justify-content-between mt-auto">
                        <p class="text-muted mb-0"><small>NT$12,000</small></p>
                        <p class="mb-0">NT$12,000</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0 pb-0">
                  <table class="table text-muted">
                    <tbody>
                      <tr>
                        <th scope="row" class="border-0 px-0 font-weight-normal">Lorem ipsum</th>
                        <td class="text-end border-0 px-0">NT$24,000</td>
                      </tr>
                      <tr>
                        <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">Payment</th>
                        <td class="text-end border-0 px-0 pt-0">ApplePay</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="d-flex justify-content-between mt-2">
                    <p class="mb-0 h4 fw-bold">Lorem ipsum</p>
                    <p class="mb-0 h4 fw-bold">NT$24,000</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <!-- <div class="position-relative d-flex">
    <div
      class="container d-flex flex-column"
      style="min-height: 100vh;"
    >
      <div class="row my-auto pb-7">
        <div class="col-md-4 d-flex flex-column">
          <div class="my-auto">
            <h2 class="text-custom_medium-green">訂購成功</h2>
            <router-link to="/"><button
                type="button"
                class="btn btn-custom_btn-color text-white mt-4 px-5"
              >回到首頁</button></router-link>
              <p class="text-muted mt-4 fs-8">謝謝您的訂購，期待再次為您服務<br>繼續選購請點擊回到首頁</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-md-50 w-100 position-absolute opacity-1"
      style="z-index: -1; min-height: 100vh; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
      background-position: center center;"
    >
    </div>
  </div> -->
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
