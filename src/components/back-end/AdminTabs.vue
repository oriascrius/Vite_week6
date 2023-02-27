<template>
  <div class="mt-3">
    <ul class="nav nav-tabs">
      <li class="nav-item active">
        <router-link
          to="/admin/products"
          class="nav-link"
        >商品管理</router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/admin/orders"
          class="nav-link"
        >訂單管理</router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/admin/coupons"
          class="nav-link"
          href="#"
        >優惠卷管理</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
