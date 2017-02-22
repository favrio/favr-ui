<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo.png">
      <p>{{msg}}</p>
    </div>

    <div id="show">
      <section>
        <h4>警示框</h4>
        <fr-alert title="测试用的标题噢" description="描述在这里，可以通过props传入，更轻松。"></fr-alert>
      </section>
  
      <section>
        <h4>对话框</h4>
        <button @click="dialogToggle = !dialogToggle">Dialog开关</button>

        <fr-dialog v-model="dialogToggle" size="large" :showBackDrop="true" :showClose="true" :showCancel="true" title="组件的标题" @confirm="dialogConfirm">
          内容在这里
        </fr-dialog>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello my vue world!',
      dialogToggle: false
    }
  },
  methods: {
    dialogConfirm () {
      console.log('Yes, click the confirm in dialog.')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.logo {
  width: 100px;
}
a {
  color: #42b983;
}
section {
  margin-bottom: 40px;
  h4 {
    margin: 10px 0;
  }
}
</style>
