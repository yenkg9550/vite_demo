<template>
  <div>
    <h1>前台畫面</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">首頁</router-link>
          <router-link class="nav-link" to="/products">產品列表</router-link>
          <router-link class="nav-link" to="/cart">購物車</router-link>
          <router-link class="nav-link" to="/login">登入後台</router-link>
        </div>
      </div>
    </nav>
    <Router-view />
  </div>
</template>
