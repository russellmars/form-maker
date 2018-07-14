import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/form/:id',
      name: 'form',
      component: () => import('@/views/form')
    }, {
      path: '/admin/login',
      component: () => import('@/views/admin/login')
    }, {
      path: '/admin/gather/:id',
      component: () => import('@/views/admin/gather')
    }, {
      path: '/admin/edit:/id',
      component: () => import('@/views/admin/edit')
    }, {
      path: '/admin/list',
      component: () => import('@/views/admin/list')
    }
  ]
})
