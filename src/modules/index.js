import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import router from '../router';

require('../../static/bootstrap/bootstrap.min.css');

Vue.use(VueAnalytics, {
  id: 'UA-57951959-3',
  router,
  autoTracking: {
    exception: true,
  },
});
