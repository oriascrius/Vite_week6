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
        <div class="row justify-content-center">
          <div class="col">
            <div class="mb-3">
              <label for="title" class="form-label">優惠券名稱</label>
              <input
                id="title"
                v-model.trim="this.$props.tempCoupons.title"
                type="text"
                class="form-control"
                placeholder="請輸入優惠券名稱"
              />
            </div>

            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="category" class="form-label">折扣百分比</label>
                <!-- oninput="value=value.replace('-', '')" -> 禁止輸入負 -->
                <input
                  id="category"
                  v-model.number="this.$props.tempCoupons.percent"
                  type="number"
                  class="form-control"
                  min="0"
                  placeholder="請輸入折扣百分比"
                  oninput="value=value.replace('-', '')"
                />
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">到期日</label>
                <input
                  id="unit"
                  v-model.number="this.$props.tempCoupons.due_date"
                  type="number"
                  class="form-control"
                  placeholder="請輸入到期日"
                  oninput="value=value.replace('-', '')"
                />
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">優惠券碼</label>
                <input
                  id="unit"
                  v-model.trim="this.$props.tempCoupons.code"
                  type="text"
                  class="form-control"
                  placeholder="請輸入優惠券碼"
                  oninput="value=value.replace('-', '')"
                />
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  id="is_enabled"
                  v-model="this.$props.tempCoupons.is_enabled"
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                />
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          取消
        </button>
        <button
          type="button"
          class="btn btn-success"
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
      // type: Object,
      // default: () => {},
      // required: true,
      type: String,
      default: '',
      required: true,
    },
    isNew: {
      // type: Object,
      // default: () => ({}),
      isNew: {
        type: Boolean,
        default: false,
      },
    },
  },
  mounted() {
    // 将 tempCoupons 转换为字符串类型
    this.$props.tempCoupons = JSON.stringify(this.$props.tempCoupons);
  },
};
</script>
