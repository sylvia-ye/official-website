<template>
  <div id="Service">
    <div class="container text-center">
      <h3>我们的服务</h3>
      <p style="color: #b2b2b2">The Best Service We Provide</p>
    </div>
    <div class="container">
      <div class="Service-container row">
        <div
          class="Service-item col-xs-12 col-sm-6 col-md-3 slideInUp"
          v-for="(item, index) in serviceList"
          :key="index"
        >
          <div class="Service-item-wrapper">
            <div class="Service-item-top">
              <h4>{{ item.title }}</h4>
              <i></i>
              <p>{{ item.eng_title }}</p>
            </div>
            <div class="Service-item-img">
              <img :src="item.img" alt="服务" />
            </div>
            <div class="Service-item-border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="Service">
import service1 from '@/assets/img/db_new.jpg'
import service2 from '@/assets/img/management_system_new.jpg'
import service3 from '@/assets/img/official_web_new.jpg'
import service4 from '@/assets/img/iot_new.jpg'
const serviceList = [
  {
    id: 'section-1',
    title: '管理系统',
    eng_title: 'Management System',
    img: service1
  },
  {
    id: 'section-2',
    title: '数据仪表板',
    eng_title: 'Dashboard',
    img: service2
  },
  {
    id: 'section-3',
    title: '企业网页',
    eng_title: 'Official Website',
    img: service3
  },
  {
    id: 'section-4',
    title: '工业物联网',
    eng_title: 'IIOT',
    img: service4

  }
]
</script>

<style scoped>
.Service-container {
  padding: 30px 50px;
}
.Service-item {
  margin-bottom: 50px;
}
.Service-item-wrapper {
  background: rgba(244, 244, 244, 1);
  overflow: hidden;
  position: relative;
}
.Service-item-top {
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}
.Service-item-top > i {
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #014689 ;
}
.Service-item-top > p {
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease;
}
.Service-item-img {
  width: 100%;
  overflow: hidden;
}
.Service-item-img img {
  width: 100%;
  height: auto;
  //height: 350px;
  transition: all 0.5s ease;
}
.Service-item-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border: 1px solid black;
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > i {
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > p {
  opacity: 1;
  transform: translateY(-10px);
}
.Service-item-wrapper:hover .Service-item-img > img {
  transform: scale(1.1, 1.1);
}
.Service-item-wrapper:hover > .Service-item-border {
  opacity: 1;
  width: 90%;
  height: 90%;
}
</style>

