import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'//扮演html里手写的原生适配(淘宝的适配方案)



Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router
})
