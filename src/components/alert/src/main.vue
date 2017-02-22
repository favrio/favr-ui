<template>
  <div class="gd-alert" :class="[typeClass]" v-show="visible">
    <div class="content">
      <h4 class="title">{{title}}</h4>
      <div class="desc" v-if="description.length">
        {{description}}
      </div>
    </div>
    
    <div class="close" v-if="closable" @click="close()">
      <icon type="close"></icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrAlert',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'info'
    },
    description: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: '关闭'
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    typeClass () {
      return this.type
    }
  },
  methods: {
    close () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .gd-alert {
    width: 100%;
    display: flex;
    opacity: 1;
    margin: 0;
    padding: 8px 16px;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    transition: opacity .2s;
    border: 1px solid #e3e3e3;

    &.success {
      color: #fff;
      background: #13ce66;
      border-color: #13ce66;
    }
    &.warning {
      color: #fff;
      background: #f7ba2a;
      border-color: #f7ba2a;
    }
    &.error {
      color: #fff;
      background: #ff4949;
      border-color: #ff4949;
    }
    &.info {
      color: #fff;
      background: #50bfff;
      border-color: #50bfff;
    }
  }
  .content {
    flex: 1;
  }
  .title {
    font-size: 13px;
    line-height: 18px;
    margin: 0;
  }
  .desc {
    margin-top: 5px;
  }
  .close {
    cursor: pointer;
    text-align: right;
    width: 30px;
  }
</style>