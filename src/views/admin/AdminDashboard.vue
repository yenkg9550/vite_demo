<template>
  <div>
    <h1>這是後台介面</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">回到前台</router-link>
          <router-link class="nav-link" to="/admin/productList"
            >產品列表</router-link
          >
          <router-link class="nav-link" to="/admin/orders"
            >訂單管理</router-link
          >
        </div>
      </div>
    </nav>
    <Router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async checkToken() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common.Authorization = `${token}`;
      const url = `${import.meta.env.VITE_API}/api/user/check`;
      await this.$http
        .post(url, { api_token: this.token })
        .then(() => {})
        .catch(() => {
          this.$router.push("/login");
        });
    },
  },
  mounted() {
    this.checkToken();
  },
};
</script>
