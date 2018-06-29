import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Music from '@/components/Music'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: {
        title: 'Projects'
      }
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
      meta: {
        title: 'Music'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'About'
      }
    }
  ]
})
