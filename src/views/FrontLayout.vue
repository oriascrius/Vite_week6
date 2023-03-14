<template>
  <UserNav></UserNav>
  <RouterView />
  <UserSubscribe></UserSubscribe>
  <UserFooter></UserFooter>
  <BackTop></BackTop>
</template>

<script>
import { RouterView } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cart';
import UserNav from '@/components/front-end/UserNav.vue';
import UserSubscribe from '@/components/front-end/UserSubscribe.vue';
import UserFooter from '@/components/front-end/UserFooter.vue';
import BackTop from '@/components/front-end/BackTop.vue';

export default {
  name: 'FrontLayout',
  data() {
    return {};
  },
  components: {
    RouterView,
    UserNav,
    UserSubscribe,
    UserFooter,
    BackTop,
  },
  // 取值
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  // 方法
  methods: {
    ...mapActions(cartStore, ['getCarts', 'addToCart']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>

<style lang="scss">
@import '@/assets/all.scss';
</style>
