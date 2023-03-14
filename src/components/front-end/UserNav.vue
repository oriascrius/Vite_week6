<!-- eslint-disable max-len -->
<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg">
      <router-link to="/" class="navbar-brand">
        <h1
          style="
            background-image: url(./images/Logo.png);
            background-size: cover;
            background-position: center;
            height: 62px;
            width: 297px;
          "
        ></h1>
      </router-link>
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto me-8 ps-8">
          <li class="nav-item py-4 mx-auto">
            <router-link to="/about" aria-current="page" class="text-decoration-none p-4"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item py-4 mx-auto">
            <router-link to="/products" class="text-decoration-none p-4">MENU</router-link>
          </li>
          <li class="nav-item py-4 mx-auto">
            <router-link to="/contact" class="text-decoration-none p-4">CONTACT</router-link>
          </li>
          <li class="nav-item py-4 mx-auto">
            <router-link to="/question" class="text-decoration-none p-4">FAQ</router-link>
          </li>
          <li class="nav-item py-2 mx-auto">
            <router-link to="/cart" class="cart_icon position-relative p-1">
              <img src="/images/Cart_icon.png" alt="購物車圖標" style="width: 50px" />
              <span
                 v-if="cart.carts?.length"
                class="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle"
                >{{ cart.carts?.length }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cart';
import 'bootstrap/dist/js/bootstrap';

export default {
  // 取值
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  // 方法
  methods: {
    ...mapActions(cartStore, ['getCarts']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
