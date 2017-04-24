import Vue from 'vue'
import App from '../App'
import VueRouter from 'vue-router'

import Hello from '../components/Home/Hello'
import List from '../components/list'
import Center from '../components/center'

import TodoList from '../components/Home/todo/'
import Widget from '../components/Home/widget/'
import RenderDemo from '../components/Home/render_01'
import LayoutDemo from '../components/Home/layout'
import TransitionDemo from '../components/Home/transition'

Vue.use(VueRouter)

const routes = [
  { path: '/',
    component: App,
    children: [
      { path: 'hello',component: Hello},
      { path: 'list', component: List },
      { path: 'center', component: Center },
      { path: 'todolist', component: TodoList},
      { path: 'widget', component: Widget},
      { path: 'render', component: RenderDemo},
      { path: 'layout', component: LayoutDemo},
      { path: 'transition', component: TransitionDemo}
    ]
  }
]

const router =  new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
