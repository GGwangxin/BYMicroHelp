import Vue from 'vue'
import Router from 'vue-router'

// 主页面模块（暂且没有）
import index from '@/components/index/index'

// 房子列表
import houseList from '@/components/house/houseList'
import tatil from '@/components/house/tatil'
import mapPosition from '@/components/house/mapPosition'

//发布
//出租
import editRent from '@/components/edit/editRent'


//个人中心
import myCenter from '@/components/myCenter/myCenter'

//楼讯
import louxunList from '@/components/louxun/louxunList'

Vue.use(Router)


export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path:'/houseList',
      name:'houseList',
      component:houseList,
      meta: {
        noActive: true // 不需要缓存
      },
    },
    {
      path:'/tatil',
      name:'tatil',
      component:tatil,
      meta: {
        noActive: true // 不需要缓存
      },
    },
    {
      path:'/mapPosition',
      name:'mapPosition',
      component:mapPosition,
      meta: {
        noActive: true // 不需要缓存
      },
    },
    {
      path:'/editRent',
      name:'editRent',
      component:editRent,
      meta: {
        noActive: true // 不需要缓存
      },
    },
    {
      path:'/louxunList',
      name:'louxunList',
      component:louxunList,
      meta: {
        noActive: true // 不需要缓存
      },
    },
    {
      path:'/myCenter',
      name:'myCenter',
      component:myCenter,
    },
    { path: '*', component: index}
  ]
})
