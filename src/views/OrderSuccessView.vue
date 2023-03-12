<template>
  <div class="container">
    <div style="
                min-height: 400px;
                background-image: url(/images/AboutUs_Banner_004.jpg);
                background-repeat: no-repeat;
                background-position: top;
                background-size: cover;
              "></div>
    <div class="mt-5 mb-7">
      <div class="row">
        <div class="col-md-6">
          <h2 class="text-custom_btn-color fw-bold h4">訂購成功</h2>
          <p class="text-muted mt-3">謝謝您的訂購，期待再次為您服務<br />繼續選購請點擊回到首頁</p>
          <router-link
            to="/"
            class="btn btn-outline-custom_btn-color mt-3"
          >Back To Home</router-link>
        </div>
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
