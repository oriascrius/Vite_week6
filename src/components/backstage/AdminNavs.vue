<template>
  <div class="container">
    <nav class="navbar navbar-expand-md">
      <router-link to="/" class="navbar-brand"><h1></h1></router-link>
      <div class="ms-auto me-5">
        <button class="btn btn-custom_signout btn-sm rounded text-white" @click.prevent="signout">
          登出
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      document.cookie = 'hexToken=; expires=; path=/';
      this.$router.push('/');
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
