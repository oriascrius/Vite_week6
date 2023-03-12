<template>
  <div class="container">
    <nav class="navbar navbar-expand-md">
      <router-link
        to="/"
        class="navbar-brand"
      >
        <h1 style="
          background-image: url('/images/Logo.jpg');
          background-size: cover;
          background-position: center;
          height: 62.12px;
          width: 297px;
           "></h1>
      </router-link>
      <div class="ms-auto me-5">
        <button
          class="btn btn-custom_medium-green btn-sm rounded text-white"
          @click.prevent="signout"
        >
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
    signout() {
      document.cookie = 'qoqVueDemo=;expires=; path=/';
      this.$swal
        .fire({
          title: '確定要登出嗎？',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#9CA57C',
          cancelButtonColor: '#FE7264',
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
