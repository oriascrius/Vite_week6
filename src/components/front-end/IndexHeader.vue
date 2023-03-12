<template>
  <header
    style="
      height: 768px;
      max-width: 100%;
      background-image: url(./images/Home_Banner.jpg);
      background-repeat: no-repeat;
      background-position: left top;
      background-size: cover;
    "
    class="position-relative"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link
            to="/products"
            style="left: 50%; transform: translateX(-50%) translateY(50%); bottom: 60px"
            class="position-absolute"
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

<style scoped>
@media (max-width: 991.98px) {
  header {
    max-width: 100%;
  }
}
</style>
