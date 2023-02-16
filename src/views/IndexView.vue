<template>
  <div>
    <nav class="navbar navbar-expand-md">
      <div class="container">
        <!-- Logo -->
        <a href="#">
          <h1></h1>
        </a>
        <!-- 導覽 -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul class="navbar-nav ms-auto me-5 h5">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
              >關於我們</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >美味餐點</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
              >聯絡我們</a>
            </li>
          </ul>
          <!-- 購物車 icon -->
          <a
            href="#"
            class="cart_icon"
          >
            <i class="bi bi-cart2"></i>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'IndexView',
  data() {
    return {
    };
  },
};
</script>
