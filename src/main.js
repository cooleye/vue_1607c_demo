import Vue from 'vue'
import router from './router/'

import 'common/css/index.css'
/* eslint-disable no-new */
new Vue({
  // el:'#app',
  router
})
.$mount('#app')

/* 设置默认路由 */
router.push('hello')
