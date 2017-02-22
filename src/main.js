import Vue from 'vue'
import App from './App.vue'

import Icon from './components/icon'
Vue.use(Icon)

import Button from './components/button'
Vue.use(Button)

import Alert from './components/alert'
Vue.use(Alert)

import Dialog from './components/dialog'
Vue.use(Dialog)

import Notification from './components/notification'
Vue.use(Notification)

new Vue({
  el: '#app',
  render: h => h(App)
})
