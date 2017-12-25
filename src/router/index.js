import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import yj from '@/components/yj'
import yj_index from '@/components/yj_index'
import yj_topUP from '@/components/yj_topUP'
import yj_transferAccounts from '@/components/yj_transferAccounts'
import yj_transferAccount_nochoise from '@/components/yj_transferAccount_nochoise'

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
    },
    {
      path: '/yj_topUP',
      name: 'yj_topUP',
      component: yj_topUP
    },
    {
      path: '/yj_transferAccounts',
      name: 'yj_transferAccounts',
      component: yj_transferAccounts
    },
    {
      path: '/yj_transferAccount_nochoise',
      name: 'yj_transferAccount_nochoise',
      component: yj_transferAccount_nochoise
    }
  ]
})
