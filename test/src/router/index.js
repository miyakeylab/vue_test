import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Oyako from '@/components/oyako/Oyako'
import OyakoStore from '@/components/oyako_store/Oyako'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'TestVue',
      component: Test
    },
    {
      path: '/oyako',
      name: 'Oyako',
      component: Oyako
    },
    {
      path: '/oyako_store',
      name: 'OyakoStore',
      component: OyakoStore
    }
  ]
})
