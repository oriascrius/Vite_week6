<template>
  <UserNav></UserNav>
  <RouterView />
  <UserSubscribe></UserSubscribe>
  <UserFooter></UserFooter>
</template>

<script>
import { RouterView } from 'vue-router';
import UserNav from '@/components/front-end/UserNav.vue';
import UserSubscribe from '@/components/front-end/UserSubscribe.vue';
import UserFooter from '@/components/front-end/UserFooter.vue';

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
  },
};
</script>

<style lang="scss">
@import '@/assets/all.scss';
</style>
