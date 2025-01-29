import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home/home'
import Gallery from './views/gallery/gallery'
import Project from './views/project/project'
import About from './views/about/about'
import NotFound from './views/not-found/not-found'
import './style.scss'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'gallery',
      path: '/gallery',
      component: Gallery,
    },
    {
      name: 'project',
      path: '/gallery/:id',
      component: Project,
    },
    {
      name: 'about',
      path: '/about',
      component: About,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
