<template lang="html">

    <div class="container">

        <m-header :title="todolist" :styles="styles"></m-header>

        <div class="content">

              <ul class="list">
                  <li v-for="x in users" class="item">
                       <span class="left">{{x.name}}</span> <span  v-on:click="removeItem(x.id)" class="delete"> -delete- </span>
                  </li>
              </ul>

        </div>

        <form>
            <input type="text" v-model="name" placeholder="添加用户" name="name" class="name-input"/>
            <span class="addbtn" v-on:click="addItem">添加</span>
        </form>
    </div>

</template>

<script>
import shortid from 'shortid';
import axios from 'axios';
import Header from '../../Header/header';
export default {
  data () {
    return {
      users: [],
      name:'',
      todolist:"todolist",
      styles:{
        color:'red'
      }
    }
  },
  components: {
      'm-header': Header
  },
  created:function(){
    axios.get('http://localhost:8080/api/users').then((res) => {
      this.users = res.data.users
      // console.log(this.users)
    })
  },
  methods:{
    goback:function(){
       console.log('back')
       history.back()
    },
    removeItem:function(id){

      axios.get('/api/removeuser?id=' + id).then((res) => {
        this.users = res.data.users
      })
      .then(function(response){
          // console.log(response)
      })
    },
    addItem:function(){

        if(this.name != ""){
          let id = shortid();
          let item = {
            id:id,
            name:this.name
          }
          this.users.push(item);
          this.name = '';

          axios.post('api/adduser', item)
          .then(function (response) {
            // console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
        }


    }
  }
}
</script>

<style lang="css">
.container{
  width: 100%;height: 100%;
}

.content{
  width: 100%;height: 100%;
  overflow-y: scroll;
}
.list{
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
}
.list .item{
  display: flex;
  flex: 1;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  margin-top: 5px;
}
.list .item .left{
  flex: 3;
  padding-left: 10px;
}
.list .item .delete{
  flex: 1;
  text-align: center;
  /*line-height: 50px;*/
}

form{
  width: 100%;height: 40px;
  text-align: center;
  display: flex;
  position: fixed;
  top: 60px;
  z-index: 10;
}
form .name-input{
    flex: 3;
    height: 40px;
    outline: none;
    border: none;
    font-size: 18px;
}
form .addbtn{
  flex: 1;
  height: 42px;
  background-color: #fff;
  line-height: 42px;
}

</style>
