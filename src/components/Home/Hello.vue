<template>
<transition name="fade">
  <div>
    <div class="hello red">
        <router-link to="todolist">todolist</router-link>
    </div>
    <div class="hello light-red">
        <router-link to="widget">widget</router-link>
    </div>

    <div class="hello light-yellow">
        <router-link to="render">声明式渲染</router-link>
    </div>

    <div class="hello yellow">
        <router-link to="layout">移动端页面布局</router-link>
    </div>

    <div class="hello light-green">
        <router-link to="transition">动画效果</router-link>
    </div>

    <router-view></router-view>

  </div>
</transition>
  </template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 100%;
    height: 45px;
    margin-top: 5px;
    text-align: center;
    line-height: 45px;
  }
  .hello a{
    text-decoration: none;
    color: rgb(77,85,93);
    font-size:18px;
    display: block;
    width: 100%;height: 100%;
  }
</style>
