<template>
  <div id="app">

    <div class="tab light-blue">
        <div class="tab-item">
            <router-link to="/hello">hello</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/list">list</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/center">center</router-link>
        </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>


.tab{
  display: flex;
  width: 100%;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  background-color: #fff;
}
.tab .tab-item{
  flex: 1;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.tab .tab-item a{
  display: block;
  width: 100%;height: 100%;
  text-decoration: none;
  color:rgb(77,85,93)
}

.tab .tab-item>a>.active{
  color: red;
}

</style>
