import Vue from 'vue'
import Message from './src/main.vue'

let Constructor = Vue.extend(Message)

Message.install = function(Vue) {
  Vue.component(Message.name, Message)
}

Vue.prototype.$message = function(data) {
  let instance = new Constructor({
    data: data
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
}

export default Message