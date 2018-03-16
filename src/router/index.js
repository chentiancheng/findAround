import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import meishi from '@/components/demo2/meishi'
import sectionlist from '@/components/demo1/sectionlist'
import xiangqing from '@/components/demo2/xiangqing'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect: "sectionlist"
    },
    {
    	path: '/sectionlist',
      component: sectionlist
    },
    {
      path: '/meishi',
      component: meishi
    },
    {
      path: '/xiangqing',
      component: xiangqing
    }
    
  ]
})
