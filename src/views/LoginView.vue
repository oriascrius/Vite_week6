<template>
  <div class="container mt-5">
    <Loading v-model:active="states.isLoading" :is-full-page="states.fullPage">
      <template v-slot:default>
        <img src="../assets/images/loading_icon.png" alt="loading圖" class="loadingIcon" />
      </template>
    </Loading>
    <form class="row justify-content-center">
      <div class="col-md-6 text-center">
        <h2 class="h3 mb-5 font-weight-normal">後台管理系統</h2>
        <!-- Email -->
        <div class="mb-4 col-8 mx-auto">
          <label for="inputEmail" class="sr-only mb-3">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            v-model="user.username"
          />
        </div>
        <!-- Password -->
        <div class="mb-2 col-8 mx-auto">
          <label for="inputPassword" class="sr-only mb-3">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="mt-5">
          <button
            class="btn btn-custom_medium-green col-3 text-white"
            type="button"
            @click.prevent="login"
          >
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      // loading 圖示判斷
      states: {
        isLoading: true,
        fullPage: true,
      },
    };
  },
  methods: {
    // 1.登入
    login() {
      this.$http
        .post(`${import.meta.env.VITE_API}admin/signin`, this.user)
        .then((response) => {
          // 存取登入的 token、expired
          const { token, expired } = response.data;
          // cookie 存取 token、expired、存取資料後方便不用二次取資料
          document.cookie = `qoqVueDemo=${token};expires=${new Date(expired)}; path=/`;
          this.$swal.fire({
            toast: true,
            position: 'center',
            icon: 'success',
            title: '登入成功',
            showConfirmButton: true,
            timer: 1500,
          });
          this.$router.push('/admin/products');
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    setTimeout(() => {
      this.states = { isLoading: false, fullPage: false };
    }, 500);
  },
};
</script>
