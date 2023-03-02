<template>
  <!-- 首頁 -->
  <IndexHeader></IndexHeader>
  <IndexAboutus></IndexAboutus>
  <UserRecommend></UserRecommend>
  <UserHotmenu></UserHotmenu>
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router';
import { mapActions } from 'pinia';
import LoadingStore from '@/stores/Loading';
import IndexHeader from '@/components/front-end/IndexHeader.vue';
import IndexAboutus from '@/components/front-end/IndexAboutus.vue';
import UserRecommend from '@/components/front-end/UserRecommend.vue';
import UserHotmenu from '@/components/front-end/UserHotmenu.vue';

export default {
  name: 'FrontLayout',
  data() {
    return {};
  },
  components: {
    RouterView,
    IndexHeader,
    IndexAboutus,
    UserRecommend,
    UserHotmenu,
  },
  mounted() {
    this.showLoading();
    setTimeout(() => {
      this.hideLoading();
    }, 500);
  },
  // computed: {
  //   ...mapState(LoadingStore, ['isLoading', 'fullPage']),
  // },
  methods: {
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
  },
};
</script>
