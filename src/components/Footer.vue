<template>
  <div id='footer' class='container-fluid'>
    <div class='logo'>
      <img src='@/assets/img/logo.jpg' alt='logo图' />
    </div>
    <p>联系方式：</p>
    <p class='email_wx'>
      <p>{{ email }}</p>
      <img src='@/assets/img/wechat.jpg' alt='微信二维码' />
    </p>
  </div>
</template>

<script setup name='Footer'>
const email = import.meta.env.VITE_APP_EMAIL
</script>

<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #d3d3d3;
  background: #161e28;
  overflow: hidden;
  text-align: center;
}

.logo {
  width: 95px;
  height: 45px;
  margin: 30px auto 20px;
}

.logo img {
  width: 100%;
  height: 100%;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
}

.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}

.email_wx {
  font-size: 14px;
}

.email_wx img {
  background-color: white;
  width: 10%;
  height: 10%;
  margin: 20px auto 20px;
}

.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}

@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }

  .address_tel_fax {
    font-size: 12px;
  }

  .email_wx {
    font-size: 12px;
  }

  .email_wx img {
    background-color: white;
    width: 20%;
    height: 20%;
  }

  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>

