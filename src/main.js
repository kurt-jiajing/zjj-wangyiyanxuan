import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'//扮演html里手写的原生适配(淘宝的适配方案)
import YXHeader from './components/YXHeader/YXHeader.vue'


Vue.component('YXHeader',YXHeader)//注册组件名,真正注册
Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router
})
