<template>
  <RouterView></RouterView>
  <QuestionHeader></QuestionHeader>
  <div class="container text-custom_medium-green">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h5 class="mt-7 fw-bold text-center">FAQ</h5>
        <h1 class="h2 fw-bold text-center">常見問題</h1>
        <hr class="mt-4" />
        <div class="accordion mt-5" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button text-custom_dark-green fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                你們的營業時間是什麼時候？是否有特別的節日或活動時會有不同的營業時間？
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green">
                我們的營業時間是週一至週五早上9點到下午5點，週六、周日早上8點到下午4點。<br />
                在特別節日或活動期間，我們可能會有不同的營業時間，請隨時關注我們的官方網站或FB、Line以獲取最新資訊。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed text-custom_dark-green fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                你們的餐點是否有提供外帶或外送服務？是否有特別的外帶或外送菜單？
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green">
                我們提供外帶服務，但沒有外送服務喔。<br />我們有特別的外帶菜單，其中包括方便攜帶的餐點和飲品，以及配套的餐具和紙巾。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed text-custom_dark-green fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                你們的食材是否有採用有機或當地的農產品？是否有特別的季節性菜單？
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-custom_medium-green">
                我們非常重視食材的品質和來源，因此我們會採用當地和有機的農產品作為我們的食材。<br />我們也會根據季節性的變化調整我們的菜單，以確保客人品嚐到最新鮮、最好的食材。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import { mapActions } from 'pinia';
import LoadingStore from '@/stores/Loading';
import QuestionHeader from '@/components/front-end/QuestionHeader.vue';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(LoadingStore, ['showLoading', 'hideLoading']),
  },
  components: { RouterView, QuestionHeader },
  mounted() {
    this.showLoading();
    setTimeout(() => {
      this.hideLoading();
    }, 500);
  },
};
</script>
