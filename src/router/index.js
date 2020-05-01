import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      beforeEnter: (to, from, next) => {
        next({
          path: `/shop/operation`,
          replace: true
        })
      }
    },
    {
      path: '/shop/operation',
      name: 'ShopOperation',
      component: resolve => require(['@/pages/shop/operation'], resolve)
    }
  ]
})
