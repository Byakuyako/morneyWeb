import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router, //自动的去找名为 index 的文件, 即index.ts
  store,
  render: h => h(App)
}).$mount('#app')
