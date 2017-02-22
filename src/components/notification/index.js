import Vue from 'vue'
import Notification from './src/main.vue'

let Constructor = Vue.extend(Notification)

Notification.install = function(Vue) {
  Vue.component(Notification.name, Notification)
}

Vue.prototype.$notification = function(data) {
  let instance = new Constructor({
    data: data
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
}

export default Notification