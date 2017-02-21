<template>
  <i class="iconfont" :class="[typeClass]" @click="clickCallback"></i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    type: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {

    }
  },
  computed: {
    typeClass () {
      return `icon-${this.type}`
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

</style>