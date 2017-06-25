// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase';
import Vue from 'vue';
import VueFire from 'vuefire';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueFire);

const config = {
  apiKey: 'AIzaSyC_ydXHKwzPnX4e9QXVlXA7ebmoGyHtoUQ',
  authDomain: 'teszt-b57ed.firebaseapp.com',
  databaseURL: 'https://teszt-b57ed.firebaseio.com',
  storageBucket: 'teszt-b57ed.appspot.com',
  messagingSenderId: '821833751798',
};

const app = firebase.initializeApp(config);
const db = app.database();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    items: db.ref('items'),
    shoppingLists: db.ref('shoppingLists'),
  },
  router,
  template: '<App/>',
  components: {
    App,
  },
});
