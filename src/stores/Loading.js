import { defineStore } from 'pinia';

const LoadingStore = defineStore('Loading', {
  state: () => ({
    isLoading: true,
    fullPage: true,
  }),
  actions: {
    showLoading() {
      this.isLoading = true;
      this.fullPage = true;
    },
    hideLoading() {
      this.isLoading = false;
      this.fullPage = false;
    },
  },
});

export default LoadingStore;
