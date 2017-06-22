import Vue from 'vue';
import Router from 'vue-router';
import Next from '@/components/Next';
import About from '@/components/About';
import Homeset from '@/components/Homeset';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/rolunk',
    name: 'about',
    component: About,
  }, {
    path: '/otthonikeszlet',
    name: 'homeset',
    component: Homeset,
  }, {
    path: '/*',
    name: 'Next',
    component: Next,
  }],
});
