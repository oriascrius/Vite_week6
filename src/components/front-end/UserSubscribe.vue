<template>
  <div
    class="subscribe_card mt-6"
    style="background-image: url('../src/assets/images/Subscribe_Banner.png')"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-7 mt-8 text-custom_btn-color subscribe_block">
          <ul class="row pt-4 list-unstyled ms-2">
            <li><h2 class="h5 fw-bold">訂閱優惠訊息</h2></li>
            <li>
              <p class="fs-7">
                我們會時常推出活動，告知最新消息<br />
                按下訂閱，就可以取得折扣優惠碼唷
              </p>
            </li>
            <li class="col-7">
              <input
                type="email"
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
                @click="subscribe_btn"
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
export default {};
</script>
