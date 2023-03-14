<!-- eslint-disable max-len -->
<template>
  <div class="position-sticky bottom-0 end-0 w-100 d-flex justify-content-end b-0 pb-3 pe-5">
    <transition>
      <button
        class="btn btn-secondary btn-sm"
        v-show="isVisible"
        @click="scrollToTop"
        aria-label="scroll to top of the page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-arrow-up-circle text-custom_dark-green"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
          />
        </svg>
      </button>
    </transition>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, ref, onMounted, onBeforeUnmount,
} from 'vue';

export default defineComponent({
  name: 'BackToTop',
  setup() {
    const isVisible = ref(false);
    const handleScroll = () => {
      isVisible.value = window.scrollY > 0;
    };
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    return {
      isVisible,
      handleScroll,
      scrollToTop,
    };
  },
});
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
