<template>
<!-- 最外層，可放 Loading 全部都能使用到 -->
  <Loading v-model:active="isLoading" :is-full-page="fullPage">
    <template v-slot:default>
      <img src="@/assets/images/loading_icon.png" alt="loading圖" class="loadingIcon" />
    </template>
  </Loading>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';
import { mapState, mapActions } from 'pinia';
import LoadingStore from '@/stores/Loading';

export default {
  data() {
    return {};
  },
  components: {
    RouterView,
  },
  mounted() {
    this.showLoading();
  },
  computed: {
    ...mapState(LoadingStore, ['isLoading', 'fullPage']),
  },
  methods: {
    ...mapActions(LoadingStore, ['showLoading']),
  },
};
</script>

<style lang="scss">
@import '@/assets/all.scss';
</style>
