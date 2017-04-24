<template lang="html">
  <div class="header" :class="styles.color">
    <span class="back" v-on:click="goback">返回</span>
    <h1 class="title-name">{{title}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return{

    }
  },
  props: {
    title: {
      type: String
    },
    styles:{
      type:Object,
      default:{
        color:'white'
      }
    }
  },
  methods: {
    goback:function(){
      history.back()
    }
  }
}
</script>

<style lang="css">
.header{
  position: fixed;
  display: flex;
  width: 100%;
  background-color: #fff;
  border-bottom: solid 1px #fff;
  position: fixed;
  top: 0;
}
.header .back{
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.header .title-name{
  flex: 4;
  align-self: flex-end;
  margin-left: -100px;
  text-align: center;
  font-size: 24px;
  line-height: 40px;
}
</style>
