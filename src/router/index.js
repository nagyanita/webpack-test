import Vue from 'vue'
import Router from 'vue-router'
import Next from '@/components/Next'
import About from '@/components/About'
import Homeset from '@/components/Homeset'

require('../../static/bootstrap/bootstrap.min.css')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Next',
      component: Next
    }, {
      path: '/rolunk',
      name: 'about',
      component: About
    }, {
      path: '/otthonikeszlet',
      name: 'homeset',
      component: Homeset
    }
  ]
})
