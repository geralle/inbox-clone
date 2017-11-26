import Vue from 'vue'
import App from './App.vue'
import Inbox from './Inbox.vue'

// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue);
Vue.component('app-inbox', Inbox)
//
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  render: h => h(App)
})
