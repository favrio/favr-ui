<template>
  <button type="button" class="button" :disabled="disabled" @click="clickCallback()" :class="[typeClass, sizeClass]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FrButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  computed: {
    typeClass () {
      return this.type ? `button-${this.type}` : ''
    },
    sizeClass () {
      return this.size ? `button-${this.size}` : ''
    }
  },
  methods: {
    clickCallback () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #bfcbd9;
  color: #1f2d3d;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
  &.button-primary {
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff;
  }
  &.button-success {
    color: #fff;
    background-color: #13ce66;
    border-color: #13ce66;
  }
  &.button-warning {
    color: #fff;
    background-color: #f7ba2a;
    border-color: #f7ba2a;
  }
  &.button-danger {
    color: #fff;
    background-color: #ff4949;
    border-color: #ff4949;
  }
  &.button-info {
    color: #fff;
    background-color: #50bfff;
    border-color: #50bfff;
  }
  &.button-large {
    padding: 11px 19px;
    font-size: 16px;
  }
  &.button-small {
    padding: 7px 9px;
    font-size: 12px;
  }
  &.button-tiny {
    padding: 4px;
    font-size: 12px;
  }
  &[disabled] {
    color: #bfcbd9;
    cursor: not-allowed;
    background-image: none;
    background-color: #eef1f6;
    border-color: #d1dbe5;
  }
}
</style>