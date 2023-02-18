<template>
  <div class="home">
    <h2 class="text-center h2">現在在前台頁面</h2>
    <div id="nav" class="text-center">
      <router-link to="/">首頁</router-link> |
      <router-link to="/products">前台商品列表</router-link> |
      <router-link to="/cart">前台購物車</router-link> |
      <router-link to="/admin/products">後台購物車列表</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
    };
  },
};
</script>
