<template>
  <transition name="fade">
    <div class="message" :class="[typeClass]" v-if="visible" @mouseenter="clearTimer" @mouseleave="startTimer">
      <img :src="iconResource" />
      <div class="content">
        {{content}}
      </div>
      <div class="close-box">
        <icon type="close" @click="close()"></icon>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FrMessage',
  props: {
  },
  data () {
    return {
      visible: true,
      type: 'error',
      timer: null,
      duration: 3000,
      content: '你点击了确定'
    }
  },
  mounted () {
    this.startTimer()
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  computed: {
    typeClass () {
      
    },
    iconResource () {
      return require(`../assets/${this.type}.svg`)
    }
  },

  methods: {
    close () {
      this.visible = false
      // this.$destroy()
    },
    clickCallback () {
      this.$emit('click')
    },
    startTimer () {
      this.timer = setTimeout(()=> {
        this.close()
      }, this.duration)
    },
    clearTimer () {
      clearTimeout(this.timer)
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  position: relative;
  height: 40px;
  line-height: 40px;
  box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
  min-width: 300px;
  box-sizing: border-box;
  border-radius: 2px;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #fff;
  transition: opacity .3s,transform .4s;
  overflow: hidden;
}
img {
  display: block;
}
.content {
  flex: 1;
  padding: 0 12px;
}
.close-box {
  position: absolute;
  right: 12px;
  top: 0;
  color: #bfcbd9;
  font-size: 14px;
  cursor: pointer;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>