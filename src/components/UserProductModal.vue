<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div
      class="modal-dialog modal-xl"
      role="document"
    >
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5
            class="modal-title"
            id="exampleModalLabel"
          >
            <span>{{ tempProduct.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img
                class="img-fluid"
                :src="tempProduct.imageUrl"
                alt=""
              />
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">{{ tempProduct.category }}</span>
              <p>商品描述：{{ tempProduct.description }}</p>
              <p>商品內容：{{ tempProduct.content }}</p>
              <div
                v-if="tempProduct.price === tempProduct.origin_price"
                class="h5"
              >
                {{ tempProduct.price }} 元
              </div>
              <del class="h6">原價 {{ tempProduct.origin_price }} 元</del>
              <div class="h5">現在只要 {{ tempProduct.price }} 元</div>
              <div>
                <div class="input-group">
                  <!-- 這裡選擇數量框給使用者選，不使用 input 框 -->
                  <select
                    name=""
                    id=""
                    class="form-select"
                    v-model="qty"
                  >
                    <option
                      :value="i"
                      v-for="i in 20"
                      :key="`${i}3333`"
                    >{{ i }}</option>
                  </select>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="addToCart(tempProduct.id, qty)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  // 當 id 變動時，取得遠端資料，並呈現畫面
  props: ['id', 'addToCart'],
  data() {
    return {
      // 接收 bootstrap modal JS 方法 -> 接收 詳細商品頁面 Modal
      modal: {},
      // 接收 API 資料
      tempProduct: {},
      // 預設 數量 1 -> v-model 詳細商品頁面 Modal 上的 html 讓選擇數量預設 1
      qty: 1,
    };
  },
  watch: {
    id() {
      // 按下 詳細商品 -> 取得 id -> 執行下方取得 APi 資料
      if (this.id) {
        this.$http
          .get(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/product/${this.id}`)
          .then((res) => {
            this.tempProduct = res.data.product;
            this.modal.show();
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
  methods: {
    // openModal() {
    //   this.modal.show();
    // },
    hideModal() {
      this.modal.hide();
      // 詳細商品頁面選擇數量加入購物車後，要重置數量變回 1
      this.qty = 1;
    },
  },
};
</script>

<style></style>
