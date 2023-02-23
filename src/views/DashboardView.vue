<template>
  <AdminNavs></AdminNavs>
  <div class="container">
    <AdminTabs></AdminTabs>
    <router-view v-if="checkSuccess"></router-view>
  </div>
</template>

<script>
import AdminNavs from '../components/back-end/AdminNavs.vue';
import AdminTabs from '../components/back-end/AdminTabs.vue';

// 驗證可以寫這邊
export default {
  name: 'DashboardView',
  data() {
    return {
      checkSuccess: false,
    };
  },
  components: { AdminTabs, AdminNavs },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)qoqVueDemo\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        // Axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const api = `${import.meta.env.VITE_API}api/user/check`;
        this.$http
          .post(api, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true;
          })
          .catch((err) => {
            alert(err.response.data.message);
            this.$router.push('/login');
          });
      } else {
        alert('您尚未登入。');
        this.$router.push('/login');
      }
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      this.$swal
        .fire({
          title: '確定要登出嗎？',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '確定',
          cancelButtonText: '取消',
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push('/login');
          }
        });
    },
  },
};
</script>
