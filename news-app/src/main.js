import Vue from 'vue'
import VueAnnouncer from 'vue-announcer'
import VueMeta from 'vue-meta'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store/store'

Vue.config.productionTip = false
//SEO imporovements
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
// Accessability improvements
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
    meta: {
      announcer: 'Nick is letting you know that you are home'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      announcer: 'Nick is letting you know that you went to the About route'
    }
  }
];

const router = new VueRouter({ 
    // history mode is more SEO friendly, Google has trouble ranking hash urls
    mode: 'history',

    routes 
});

Vue.use(VueAnnouncer, {}, router);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  }
}).$mount('#app');

