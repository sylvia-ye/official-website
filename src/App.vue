<script setup>
// 直接导入所需组件，简单直接
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'
import HomePage from '@/view/HomePage.vue'
import Service from '@/view/Service.vue'
</script>

<template>
  <!-- 简单的页面布局 -->
  <Header />
  <HomePage />
  <Service />
  <Footer />
  <GoTop />
</template>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>

