<template>
  <div id="container">
    <Header></Header>
    <router-view />
    <Service></Service>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script setup name="PageView">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'
import Service from '@/view/Service.vue'
</script>

<style scoped></style>
