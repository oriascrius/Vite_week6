<template>
  <div
    class="mt-7"
    style="
      height: 378px;
      width: 100%;
      background-image: url(./images/Subscribe_Banner.jpg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    "
  >
    <div class="container">
      <div class="row">
        <div
          class="col-lg-5 offset-lg-7 mt-7 text-custom_btn-color"
          style="
            height: 210px;
            border: 2px solid #747d54;
            background-color: rgba(255, 255, 255, 0.87);
            color: #747d54;
          "
        >
          <ul class="row list-unstyled p-4">
            <li class="">
              <h3 class="h4 fw-bold">訂閱優惠</h3>
            </li>
            <li class="fs-7">
              <p>
                我們會時常推出活動，告知最新消息<br />
                按下訂閱，就可以取得折扣優惠碼唷
              </p>
            </li>
            <li class="col-8">
              <input
                type="email"
                v-model="email"
                class="form-control"
                placeholder="請輸入信箱取得優惠"
                aria-label="請輸入信箱取得優惠"
                aria-describedby="subscribe"
              />
            </li>
            <li class="col-3">
              <button
                class="btn btn-custom_btn-color text-white"
                type="button"
                id="subscribe"
                @click="subscribe()"
              >
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscribe() {
      const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (mail.test(this.email)) {
        this.$swal.fire({
          icon: 'success',
          title: '訂閱成功',
          text: '優惠碼: avocado666',
        });
      } else {
        this.$swal.fire({
          icon: 'error',
          title: '請輸入正確的信箱',
        });
      }
      this.email = '';
    },
  },
};
</script>
