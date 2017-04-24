<template lang="html">
    <div>
        <m-header :title="title"></m-header>
        <div class="content">
          <h1>{{message}}</h1>
          <h1 v-bind:title="message"></h1>
          <h1 v-if="flag">{{message}}</h1>
          <button v-on:click="click">click</button>
          <input
            type="checkbox"
            v-model="flag"/>

          <ul v-for="x in lists">
              <li>{{x.name}}</li>
          </ul>

          <h1>{{message}}</h1>
          <h1 v-once>{{message}}</h1> --> v-once <br>
          <input type="text" v-model="message"/>

          <div v-html="rawHtml"></div> 
          <div>{{rawHtml}}</div>
        </div>
    </div>
</template>

<script>
import Header from '../../Header/header';
export default {
  data () {
    return {
      title:'声明式渲染',
      message:'hello vue',
      flag:false,
      lists:[
        {name:'武松'},
        {name:'林冲'},
        {name:'宋江'},
        {name:'李逵'},
      ],
      rawHtml:'<h1>v-html</h1>'
    }
  },
  components: {
    'm-header': Header
  },
  methods:{
    click:function(){
      this.flag = !this.flag;
    }
  }
}
</script>

<style lang="css">
</style>
