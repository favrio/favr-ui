import Vue from 'vue'
import App from './App.vue'

import Icon from './components/icon'
Vue.use(Icon)

import Alert from './components/alert'
Vue.use(Alert)

import Dialog from './components/dialog'
Vue.use(Dialog)

new Vue({
  el: '#app',
  render: h => h(App)
})
