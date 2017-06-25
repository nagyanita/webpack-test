import Vue from 'vue';
import Router from 'vue-router';
import Next from '@/components/Next';
import EditItem from '@/components/EditItem';
import Homeset from '@/components/Homeset';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/cikkszerkesztes',
    name: 'edititem',
    component: EditItem,
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
