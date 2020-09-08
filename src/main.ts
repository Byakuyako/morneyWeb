import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

new Vue({
  router, //自动的去找名为 index 的文件, 即index.ts
  store,
  render: h => h(App)
}).$mount('#app')
