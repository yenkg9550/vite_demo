<template>
  <div>
    <h2>這是產品列表</h2>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td style="width: 200px">
            <div
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td>
            {{ item.title }}
          </td>
          <td>
            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h6" v-if="item.price"
              >原價 {{ item.origin_price }} 元</del
            >
            <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProduct() {
      const url = `${import.meta.env.VITE_API}/api/${
        import.meta.env.VITE_PATH
      }/products/all`;
      console.log(url);
      await this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch(() => {
          alert("產品取得失敗");
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
