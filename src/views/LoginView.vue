<template>
  <div class="container mt-5">
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
import { mapActions } from 'pinia';
import LoadingStore from '@/stores/Loading';

const { VITE_API } = import.meta.env;
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    // 1.登入
    login() {
      this.$http
        .post(`${VITE_API}admin/signin`, this.user)
        .then((response) => {
          // 存取登入的 token、expired
          const { token, expired } = response.data;
          // cookie 存取 token、expired、存取資料後方便不用二次取資料
          document.cookie = `qoqVueDemo=${token};expires=${new Date(expired)}; path=/`;
          this.$router.push('/admin/products');
          this.$swal.fire({
            toast: true,
            position: 'center',
            icon: 'success',
            title: '登入成功',
            showConfirmButton: true,
            timer: 1500,
          });
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
  },
  mounted() {
    setTimeout(() => {
      this.hideLoading();
    }, 500);
  },
};
</script>
