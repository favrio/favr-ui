<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo.png">
      <p>{{msg}}</p>
    </div>

    <div id="show">
      <fr-alert title="测试用的标题噢" description="描述在这里，可以通过props传入，更轻松。"></fr-alert>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello my vue world!'
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
</style>
