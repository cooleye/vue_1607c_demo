<template lang="html">
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiperA">
      <!-- 幻灯内容 -->
      <swiper-slide  v-for="item in slides">
        <img class="slide" :src="item.url"/>
      </swiper-slide>


      <!-- ... -->
      <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// use
export default {
  components: {
    swiper,
    swiperSlide
  },
  name: 'carrousel',
  props:{
    slides:{
      type:Array,
      default:[]
    }
  },
  data() {
   return {
     swiperOption: {
       notNextTick: true,
       autoplay: 3000,
       direction : 'horizontal',  //horizontal   vertical
       grabCursor : true,
       setWrapperSize :true,
       autoHeight: true,
       pagination : '.swiper-pagination',
       paginationClickable :true,
       prevButton:'.swiper-button-prev',
       nextButton:'.swiper-button-next',
       scrollbar:'.swiper-scrollbar',
       mousewheelControl : true,
       observeParents:true,
       // if you need use plugins in the swiper, you can config in here like this
       // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
       debugger: true,
       // swiper callbacks
       // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
       onTransitionStart(swiper){
         console.log(swiper)
       },
       // more Swiper config ...
       // ...
     }
   }
 },
 computed: {
   swiper() {
     return this.$refs.mySwiperA.swiper
   }
 },
 mounted() {
   this.swiper.slideTo(3, 1000, false)
  //  console.log('slides:' + this.slides)
 }
}
</script>

<style lang="css">
.container{
  margin-top: 40px;
}
.slide{
  width: 100%;
  height: 200px;
}
</style>
