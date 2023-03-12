<template>
  <header
    style="
      width: 100%;
      height: 768px;
      background-image: url(./images/Home_Banner.jpg);
      background-repeat: no-repeat;
      background-position: left top;
      background-size: cover;
      position: relative;
    "
    class="vh-100"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link
            to="/products"
            style="
              position: absolute;
              left: 50%;
              transform: translateX(-50%) translateY(50%);
              bottom: 60px;
            "
            ><button type="button" class="btn btn-custom_btn-color btn-lg text-white">
              享用時光
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
