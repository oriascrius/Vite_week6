<template>
<!-- 首頁 -->
  <div>
    <!-- <Loading v-model:active="states.isLoading" :is-full-page="states.fullPage">
      <template v-slot:default>
        <img src="../assets/images/loading_icon.png" alt="loading圖" class="loadingIcon" />
      </template>
    </Loading> -->
    <IndexHeader></IndexHeader>
    <IndexAboutus></IndexAboutus>
    <UserRecommend></UserRecommend>
    <UserHotmenu></UserHotmenu>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import { mapState, mapActions } from 'pinia';
import IndexHeader from '@/components/front-end/IndexHeader.vue';
import IndexAboutus from '@/components/front-end/IndexAboutus.vue';
import UserRecommend from '@/components/front-end/UserRecommend.vue';
import UserHotmenu from '@/components/front-end/UserHotmenu.vue';
import LoadingStore from '@/stores/Loading';

export default {
  name: 'FrontLayout',
  data() {
    return {
      // loading 圖示判斷
      // states: {
      //   isLoading: true,
      //   fullPage: true,
      // },
    };
  },
  components: {
    RouterView,
    IndexHeader,
    IndexAboutus,
    UserRecommend,
    UserHotmenu,
  },
  mounted() {
    setTimeout(() => {
      // this.states = { isLoading: false, fullPage: false };
      this.hideLoading();
    }, 500);
  },
  computed: {
    ...mapState(LoadingStore, ['isLoading', 'fullPage']),
  },
  methods: {
    ...mapActions(LoadingStore, ['hideLoading']),
  },
};
</script>
