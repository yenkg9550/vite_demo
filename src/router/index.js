import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "首頁",
      component: () => import("../views/front/FrontHome.vue"),
      children: [
        {
          path: "/products",
          name: "前台產品列表",
          component: () => import("../views/front/FrontProductList.vue"),
        },
        {
          path: "/cart",
          name: "購物車",
          component: () => import("../views/front/FrontCart.vue"),
        },
        {
          path: "/login",
          name: "登入介面",
          component: () => import("../views/admin/AdminLogin.vue"),
        },
      ],
    },
    {
      path: "/admin",
      name: "後台管理",
      component: () => import("../views/admin/AdminDashboard.vue"),
      children: [
        {
          path: "productList",
          name: "後台產品列表",
          component: () => import("../views/admin/AdminProductList.vue"),
        },
        {
          path: "orders",
          name: "訂單列表",
          component: () => import("../views/admin/AdminOrder.vue"),
        },
      ],
    },
  ],
});

export default router;
