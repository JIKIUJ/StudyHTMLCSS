import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Content from '@/components/Content'
import API from '@/components/API'
import Login from '@/components/Login'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld/:id',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Content',
      name: 'Content',
      component: Content
    },
    {
      path: '/API',
      name: 'API',
      component: API
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    }
  ]
})
