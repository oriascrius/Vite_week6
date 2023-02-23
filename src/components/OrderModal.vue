<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 id="couponsModalLabel" class="modal-title">
          <span>編輯訂單</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row justify-content-center">
          <div class="col">
            <div class="mb-3">
              <label for="Email" class="form-label">Email</label>
              <input
                id="Email"
                :value="this.$props.tempOrders.user?.email"
                @input="$emit('updateOrders', $event.target.value)"
                type="text"
                class="form-control"
                placeholder="請輸入Email"
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">地址</label>
              <input
                id="address"
                :value="this.$props.tempOrders.user?.address"
                @input="$emit('updateOrders', $event.target.value)"
                type="text"
                class="form-control"
                min="0"
                placeholder="請輸入地址"
              />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">姓名</label>
              <input
                id="name"
                :value="this.$props.tempOrders.user?.name"
                @input="$emit('updateOrders', $event.target.value)"
                type="text"
                class="form-control"
                min="0"
                placeholder="請輸入姓名"
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">電話</label>
              <input
                id="phone"
                :value="this.$props.tempOrders.user?.tel"
                @input="$emit('updateOrders', $event.target.value)"
                type="number"
                class="form-control"
                min="0"
                placeholder="請輸入電話"
              />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  id="is_paid"
                  :value="this.$props.tempOrders.orders?.is_paid"
                  @input="$emit('updateOrders', $event.target.value)"
                  class="form-check-input"
                  type="checkbox"
                  :true-value="true"
                  :false-value="false"
                />
                <label class="form-check-label" for="is_paid">是否付款</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          取消
        </button>
        <button type="button" class="btn btn-success" @click="$emit('updateOrders')">確認</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // props: ['tempOrders', 'id'],
  props: {
    tempOrders: {
      type: Object,
      default: () => {},
      required: true,
      // type: String,
      // default: '',
      // required: true,
    },
  },
};
</script>
