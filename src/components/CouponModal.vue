<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 id="couponsModalLabel" class="modal-title">
          <span v-if="isNew">新增優惠券</span>
          <span v-else>編輯優惠券</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="title" class="form-label">優惠券名稱</label>
          <input
            id="title"
            v-model.trim="tempCoupon.title"
            type="text"
            class="form-control"
            placeholder="請輸入優惠券名稱"
          />
        </div>
        <div class="mb-3">
          <label for="code" class="form-label">優惠券碼</label>
          <input
            id="code"
            v-model.trim="tempCoupon.code"
            type="text"
            class="form-control"
            placeholder="請輸入優惠券碼"
            oninput="value=value.replace('-', '')"
          />
        </div>
        <div class="mb-3">
          <label for="category" class="form-label">折扣百分比</label>
          <input
            id="category"
            v-model.number="tempCoupon.percent"
            type="number"
            class="form-control"
            min="0"
            max="100"
            placeholder="請輸入折扣百分比"
            oninput="value=value.replace('-', '')"
          />
        </div>
        <div class="mb-3">
          <label for="due_date">到期日</label>
          <input type="date" class="form-control" id="due_date" v-model="due_date" />
        </div>

        <div class="mt-3">
          <div class="form-check d-flex justify-content-end">
            <input
              id="is_enabled"
              v-model="tempCoupon.is_enabled"
              class="form-check-input"
              type="checkbox"
              :true-value="1"
              :false-value="0"
            />
            <label class="form-check-label px-3" for="is_enabled">是否啟用</label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          取消
        </button>
        <button
          type="button"
          class="btn btn-custom_medium-green text-white"
          @click="$emit('updateCoupons', this.$props.isNew)"
        >
          確認
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tempCoupons: {
      type: Object,
      default() {
        return {};
      },
      required: true,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tempCoupon: {},
      due_date: '',
    };
  },

  watch: {
    tempCoupons() {
      this.tempCoupon = this.tempCoupons;
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
};
</script>
