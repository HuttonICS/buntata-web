// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

Vue.use({
  install: function (Vue, options) {
    Vue.prototype.$jQuery = require('jquery')
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App }
})
