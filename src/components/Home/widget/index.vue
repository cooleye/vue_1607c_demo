<template lang="html">
  <div>
    <m-header :title="title"></m-header>
    <div class="content">
      <div class="item">
        <input
          type="checkbox"
          v-model="toggle"
          v-bind:true-value="a"
          v-bind:false-value="b"
          >
          <span> 单选按钮:{{toggle}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../Header/header';

export default {
  data () {
    return {
      title: 'widget',
      toggle: false,
      a:1,
      b:0
    }
  },
  components: {
    'm-header': Header
  },
  watch:{
    toggle:function(val){
      console.log('val:' + val)
    }
  }
}
</script>

<style lang="css">
.content{
  width: 100%;height: 100%;
  margin-top: 50px;
}
.item{
  width: 100%;
  margin-top: 1px;
  background-color: #fefefe;
}
</style>
