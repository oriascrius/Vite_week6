<!-- eslint-disable max-len -->
<template>
  <nav
    class="navbar navbar-expand-md"
    style="height: 85px; background-color: #fef5f2"
  >
    <div class="container">
      <router-link
        to="/"
        class="navbar-brand"
      >
        <h1 style="
                          background-image: url(./images/Logo.png);
                          background-size: cover;
                          background-position: center;
                          height: 62.12px;
                          width: 297px;
                        "></h1>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto me-3">
          <li class="nav-item">
            <router-link
              to="/about"
              class="text-decoration-none px-3"
            >ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/products"
              class="text-decoration-none px-3"
            >MENU</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/contact"
              class="text-decoration-none px-3"
            >CONTACT</router-link>
          </li>
        </ul>
        <router-link
          to="/cart"
          class="cart_icon position-relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="30"
            fill="currentColor"
            class="bi bi-cart2"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
            />
          </svg>
          <span class="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">{{
            cart.carts?.length }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cart';

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
