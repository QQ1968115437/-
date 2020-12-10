import Vue from 'vue'
import VueRouter from 'vue-router'
import 知乎 from '../views/知乎.vue'
import 详情页 from '../views/详情页.vue'
import 登录 from '../views/登录.vue'
import 注册 from '../views/注册.vue'
import 出发地_目的地 from '../views/出发地_目的地.vue'
import 组件集 from '../views/组件集.vue'
import MMM from '../views/MMM.vue'
import NNN from '../views/NNN.vue'
import P from '../views/P.vue'
import M from '../views/M.vue'
import 酒店推荐 from '../views/酒店推荐.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '知乎',
    component: 知乎
  },
  {
    path: '/111',
    name: '组件集',
    component: 组件集
  },
  {
    path: '/222',
    name: 'MMM',
    component: MMM
  },
  {
    path: '/333',
    name: 'NNN',
    component: NNN
  },
  {
    path: '/444',
    name: 'P',
    component: P
  },
  {
    path: '/555',
    name: 'M',
    component: M
  },
  {
    path: '/666',
    name: '酒店推荐',
    component: 酒店推荐
  },
  {
    path: '/888/:id',
    name: '详情页',
    component: 详情页
  },
  {
    path: '/999',
    name: '登录',
    component: 登录
  },
  {
    path: '/1000',
    name: '注册',
    component: 注册
  }
]

const router = new VueRouter({
  routes
})

export default router
