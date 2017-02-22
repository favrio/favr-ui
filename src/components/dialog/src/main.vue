<template>
  <div class="dialog-box" v-if="value" :class="[toggleClass, sizeClass]">
    <div class="dialog">
      <header>
        <span>头部标题</span>
        <icon v-if="showClose" class="close" type="close" @click="close()"></icon>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <a v-if="showCancel" href="javascript:;" @click="close()">取消</a>
        <a href="javascript:;" @click="confirm()">确认</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showBackDrop: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    toggleClass () {
      return this.showBackDrop ? '' : 'hide-backdrop'
    },
    sizeClass () {
      return `dialog-${this.size}`
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
    },
    confirm () {
      this.$emit('confirm')
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  &.hide-backdrop {
    background: none;
    pointer-events: none;
    .dialog {
      pointer-events: auto;
    }
  }
  &.dialog-tiny {
    .dialog {
      width: 300px;
    }
  }
  &.dialog-medium {
    .dialog {
      width: 400px;
    }
  }
  &.dialog-large {
    .dialog {
      width: 800px;
    }
  }
}
.dialog {
  width: 400px;
  background: #fff;
  margin: 60px auto 0;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.3);
  box-sizing: border-box;
}
header {
  padding: 20px 20px 0;
  font-size: 16px;
  .title {
    line-height: 1;
    font-weight: 700;
    color: #1f2d3d;
  }
  .close {
    float: right;
    color: #bfcbd9;
    cursor: pointer;
  }
}
main {
  padding: 30px 20px;
  color: #48576a;
  font-size: 14px;
}
footer {
  padding: 10px 20px 15px;
  text-align: right;
  box-sizing: border-box;
}
</style>