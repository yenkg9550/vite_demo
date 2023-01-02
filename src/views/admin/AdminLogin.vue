<template>
  <div class="container mt-5">
    <div class="row">
      <h5>請先登入</h5>
      <div class="col-12">
        <form class="form-signin">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="emailInput"
              placeholder="name@example.com"
              v-model="userData.username"
              required
              autofocus
            />
            <label for="emailInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              v-model="userData.password"
              placeholder="Password"
              required
            />
            <label for="passwordInput">Password</label>
          </div>
          <button
            class="btn btn-lg btn-primary w-100 mt-3"
            type="submit"
            @click.prevent="loginIn"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {},
    };
  },
  methods: {
    async loginIn() {
      const api = `${import.meta.env.VITE_API}/admin/signin`;
      await this.$http
        .post(api, this.userData)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          this.$router.push("/admin/productList");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
