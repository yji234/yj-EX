import Vue from 'vue'
import Router from 'vue-router'
import Less from 'less'
import HelloWorld from '@/components/HelloWorld'
import yj from '@/components/yj'
import yj_index from '@/views/yj_index'
import yj_topUP from '@/views/yj_topUP'
import yj_transferAccounts from '@/views/yj_transferAccounts'
import yj_transferAccount_nochoise from '@/views/yj_transferAccount_nochoise'
import yj_transferAccount_choise from '@/views/yj_transferAccount_choise'
import yj_accountList from '@/views/yj_accountList'
// import yj_list from '../components/yj_list'
import yj_myWallet from '../views/yj_myWallet'
// import yj_list_wallet from '../components/yj_list_wallet'


Vue.use(Router);
// Vue.use(Less);

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
    },
    {
      path: '/yj_transferAccount_choise',
      name: 'yj_transferAccount_choise',
      component: yj_transferAccount_choise
    },
    {
      path: '/yj_accountList',
      name: 'yj_accountList',
      component: yj_accountList
    },
    {
      path: '/yj_myWallet',
      name: 'yj_myWallet',
      component: yj_myWallet
    }
  ]
})
