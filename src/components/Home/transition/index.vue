<template lang="html">
  <div>
    <m-header :title="title" :styles="styles"></m-header>
    <div class="cover">
      <div class="demo">
        <button @click="show=!show">
          Toggle
        </button>
        <transition name="fade">
          <p v-if="show">hello</p>
          <input type="color"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../Header/header';

export default {
  data () {
    return {
      title: '动画效果',
      styles:{
        color:'light-green'
      },
      show:true
    }
  },
  components: {
    'm-header': Header
  }
}
</script>

<style lang="css">
.cover{
  margin-top: 50px;
}

.fade-enter-active, .fade-leave {
  transition: opacity 1s;

}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
