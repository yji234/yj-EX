import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import yj from '@/components/yj'
import yj_index from '@/components/yj_index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/yj',
      name: 'yj',
      component: yj
    },
    {
      path: '/yj_index',
      name: 'yj_index',
      component: yj_index
    }
  ]
})
