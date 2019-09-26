import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
// import Index from '../views/Index'
import Book from '../views/Book'
import About from '../views/About'
import Details from '../views/Details'
import User from '../views/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/index'
    },
    {
      path: '/home/:id',
      name: 'home',
      component: Home,
      // children: [
      //   {
      //     path: '',
      //     name: 'index',
      //     component: Index,
      //   },
        // {
        //   path: '/good',
        //   name: 'good',
        //   component: Good,
        // },
      // ]
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
    },
    {
      path: '/book',
      name: 'book',
      component: Book,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ]
})
