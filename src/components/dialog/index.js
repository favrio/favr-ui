import Dialog from './src/main.vue'

Dialog.install = function(Vue) {
  Vue.component(Dialog.name, Dialog)
}

export default Dialog