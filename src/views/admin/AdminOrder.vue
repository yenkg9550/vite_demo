<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">顧客名稱</th>
          <th scope="col">顧客信箱</th>
          <th scope="col">顧客電話</th>
          <th scope="col">顧客地址</th>
          <th scope="col">狀態</th>
          <th scope="col">訂單日期</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in orders" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.email }}</td>
          <td>{{ item.user.tel }}</td>
          <td>{{ item.user.address }}</td>
          <td>{{ item.is_paid ? "已付款" : "未付款" }}</td>
          <td>{{ showDate(item.create_at * 1000) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: {},
    };
  },
  methods: {
    getOrders() {
      const url = `${import.meta.env.VITE_API}/api/${
        import.meta.env.VITE_PATH
      }/admin/orders`;
      this.$http
        .get(url)
        .then((res) => {
          this.orders = res.data.orders;
          console.log(res);
        })
        .catch((error) => {
          alert(error);
          this.$router.push("/login");
        });
    },
    showDate(item) {
      const day = new Date(item);
      const year = day.getFullYear();
      const month = day.getMonth() + 1;
      const date = day.getDate();
      return `${year}/${month}/${date}`;
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
