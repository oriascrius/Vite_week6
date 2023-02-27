<template>
  <div>
    <Loading
      v-model:active="states.isLoading"
      :is-full-page="states.fullPage"
    >
      <template v-slot:default>
        <img
          src="../assets/images/loading_icon.png"
          alt="loading圖"
          class="loadingIcon"
        />
      </template>
    </Loading>
    <!-- 1. nav -->
    <UserNav></UserNav>
    <!-- 2. header -->
    <IndexHeader></IndexHeader>
    <!-- 3. 關於我們 -->
    <IndexAboutus></IndexAboutus>
    <!-- 4. 主打推薦 -->
    <UserRecommend></UserRecommend>
    <!-- 5. 熱門餐點 -->
    <UserHotmenu></UserHotmenu>
    <!-- 6. 訂閱 -->
    <UserSubscribe></UserSubscribe>
    <!-- 7. footer -->
    <UserFooter></UserFooter>
  </div>
</template>

<script>
import UserNav from '@/components/front-end/UserNav.vue';
import IndexHeader from '@/components/front-end/IndexHeader.vue';
import IndexAboutus from '@/components/front-end/IndexAboutus.vue';
import UserRecommend from '@/components/front-end/UserRecommend.vue';
import UserHotmenu from '@/components/front-end/UserHotmenu.vue';
import UserSubscribe from '@/components/front-end/UserSubscribe.vue';
import UserFooter from '@/components/front-end/UserFooter.vue';

export default {
  name: 'IndexView',
  data() {
    return {
      // loading 圖示判斷
      states: {
        isLoading: true,
        fullPage: true,
      },
    };
  },
  components: {
    UserNav,
    IndexHeader,
    IndexAboutus,
    UserRecommend,
    UserHotmenu,
    UserSubscribe,
    UserFooter,
  },
  mounted() {
    setTimeout(() => {
      this.states = { isLoading: false, fullPage: false };
    }, 500);
  },
};
</script>
