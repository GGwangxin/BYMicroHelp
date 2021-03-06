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
import editIndex from '@/components/edit/editIndex'


//个人中心
import myCenter from '@/components/myCenter/myCenter'
import bind from '@/components/myCenter/bind'

//楼讯
import louxunList from '@/components/louxun/louxunList'
//
import articleDetail from '@/components/louxun/articleDetail'

//微信授权登录
import login from '@/components/index/login'

//二手房
import secondHouseList from  '@/components/secondHouse/secondHouseList'
import secondHouseTatil from  '@/components/secondHouse/secondHouseTatil'

Vue.use(Router)


export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        footer: true // 不需要缓存
      },
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

    //发布模块
    {
      path:'/editIndex',
      name:'editIndex',
      component:editIndex,
      meta: {
        footer: true // 不需要缓存
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
    },{
      path:'/articleDetail/:id',
      name:'articleDetail',
      component:articleDetail,
      meta: {
        noActive: true // 不需要缓存
      },
    },
    {
      path:'/myCenter',
      name:'myCenter',
      component:myCenter,
      meta: {
        footer: true // 不需要缓存
      },
    },
    {
      path:'/login',
      name:'login',
      component:login,
      meta: {
        noActive: true // 不需要缓存
      },
    },
    {
      path:'/bind',
      name:'bind',
      component:bind,
      meta: {
        noActive: true // 不需要缓存
      },
    },
    {
      path:'/secondHouseList',
      name:'secondHouseList',
      component:secondHouseList,
      meta: {
        noActive: true // 不需要缓存
      },
    },
    {
      path:'/secondHouseTatil',
      name:'secondHouseTatil',
      component:secondHouseTatil,
      meta: {
        noActive: true // 不需要缓存
      },
    },
    {
      path: '*',
      component: index,
      meta: {
        footer: true // 不需要缓存
      },
    }
  ]
})
