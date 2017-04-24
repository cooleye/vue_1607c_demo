<template lang="html">
  <div class="container">
    <m-header :title="title"></m-header>
    <Swiper :slides="slides"></Swiper>
      <div class="menu">
          <div class="menu1">
            <div class="menu-item">
                <img src="static/img/o-icon1.png"/>
                <p>公司招聘</p>
            </div>
            <div class="menu-item">
                <img src="static/img/o-icon2.png"/>
                <p>公司招聘</p>
            </div>
            <div class="menu-item">
                <img src="static/img/o-icon3.png"/>
                <p>公司招聘</p>
            </div>
            <div class="menu-item">
                <img src="static/img/o-icon4.png"/>
                <p>公司招聘</p>
            </div>
          </div>
          <div class="menu1">
            <div class="menu-item">
                <img src="static/img/o-icon1.png"/>
                <p>公司招聘</p>
            </div>
            <div class="menu-item">
                <img src="static/img/o-icon2.png"/>
                <p>公司招聘</p>
            </div>
            <div class="menu-item">
                <img src="static/img/o-icon3.png"/>
                <p>公司招聘</p>
            </div>
            <div class="menu-item">
                <img src="static/img/o-icon4.png"/>
                <p>公司招聘</p>
            </div>
          </div>

      </div>

      <div class="cover">
        <h1>附近</h1>
      </div>


  </div>
</template>

<script>
import Header from '../../Header/header';
import Swiper from '../../Swiper/';
import axios from 'axios';
export default {
  data () {
    return {
      title: '移动端页面布局',
      slides:[]
    }
  },
  components: {
    'm-header': Header,
    Swiper
  },
  mounted:function(){
    axios.get('/api/swiperdata').then((res) => {
      this.slides = res.data.slides
      console.log(this.slides)
    })
  }
}
</script>

<style lang="css">
.container{
  width: 100%;height: 100%;
  background-color: #eee;
}
.menu{
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  background-color: #fff;
  padding-bottom: 10px;
}
.menu .menu1{
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.menu .menu1 .menu-item{
  flex: 1;
  justify-content: center;
  text-align: center;
}
.menu .menu1 .menu-item img{
  height: 4rem;
}
.menu .menu1 .menu-item p{
  font-size: 0.5rem;
  font-family: '黑体';
  font-weight: 600;
  margin-top: 5px;
}
.cover{
  margin-top: 10px;
  background-color: #fff;
  height: 100px;
}
</style>
