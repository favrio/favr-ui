<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo.png">
      <p>FavrUi is a ui toolkit for vue.</p>
    </div>

    <div id="show" style="width: 600px; margin: 0 auto;">
      <section>
        <h4>警示框</h4>
        <fr-alert title="测试用的标题噢" description="描述在这里，可以通过props传入，更轻松。"></fr-alert>
      </section>
  
      <section>
        <h4>对话框</h4>
        <fr-button type="primary" @click="dialogToggle = !dialogToggle">打开对话框</fr-button>

        <fr-dialog v-model="dialogToggle" size="midium" :showBackDrop="true" :showClose="true" :showCancel="true" title="组件的标题" @confirm="dialogConfirm">
          <p>
            在Web开发易访问性意味着使尽可能多的人能够使用Web站点,即使这些人的能力是有限的。这里我们提供关于开发易访问的内容的信息。
          </p>

          <p>
            “易访问性是最常用于描述设施或设施,帮助残疾人,如“轮椅”。这可以扩展到盲文标识、轮椅坡道,音频信号在人行横道,轮廓人行道,网站设计,等等。
          </p>
           
          <p>
            "网络从根本上是为了为所有的人工作, 无论他们的硬件、软件、语言、文化、位置或身体或精神能力。当网络达到这一目标,它可以访问不同的人的听觉范围,运动,和认知能力。无论他们的硬件、软件、语言、文化、位置或身体或精神能力。当网络达到这一目标,它可以访问不同的人的听觉范围,运动,和认知能力。"
          </p>

          <p>
            在Web开发易访问性意味着使尽可能多的人能够使用Web站点,即使这些人的能力是有限的。这里我们提供关于开发易访问的内容的信息。
          </p>

          <p>
            “易访问性是最常用于描述设施或设施,帮助残疾人,如“轮椅”。这可以扩展到盲文标识、轮椅坡道,音频信号在人行横道,轮廓人行道,网站设计,等等。
          </p>
           
          <p>
            "网络从根本上是为了为所有的人工作, 无论他们的硬件、软件、语言、文化、位置或身体或精神能力。当网络达到这一目标,它可以访问不同的人的听觉范围,运动,和认知能力。无论他们的硬件、软件、语言、文化、位置或身体或精神能力。当网络达到这一目标,它可以访问不同的人的听觉范围,运动,和认知能力。"
          </p>
        </fr-dialog>
      </section>

      <section>
        <h4>按钮类型</h4>
        <fr-button>测试按钮</fr-button>
        <fr-button type="primary">测试按钮</fr-button>
        <fr-button type="info">测试按钮</fr-button>
        <fr-button type="success">测试按钮</fr-button>
        <fr-button type="warning">测试按钮</fr-button>
        <fr-button type="danger">测试按钮</fr-button>
        <h4>按钮大小</h4>
        <fr-button type="primary" size="large">测试按钮</fr-button>
        <fr-button type="primary">测试按钮</fr-button>
        <fr-button type="primary" size="small">测试按钮</fr-button>
        <fr-button type="primary" size="tiny">测试按钮</fr-button>
        <h4>按钮禁用</h4>
        <fr-button type="primary" :disabled="true">测试按钮</fr-button>
          
        <h4>带有icon的按钮</h4>
        <fr-button type="primary">
          <icon type="refresh_light"></icon>
          删除选项
        </fr-button>
        <fr-button>
          <icon type="favor"></icon>
          喜欢选项
        </fr-button>
        <fr-button type="primary" size="small">
          <icon type="favor"></icon>
          测试按钮
        </fr-button>
        <fr-button type="primary" size="tiny">
          <icon type="favor"></icon>
          测试按钮
        </fr-button>
      </section>

      <section>
        <h4>信息提示</h4>
        <fr-button type="primary" @click="triggerNotifc()">触发成功</fr-button>       
        <fr-button type="primary" @click="triggerNotifc2()">触发错误</fr-button>
        <fr-button type="primary" @click="triggerNotifc3()">触发警告</fr-button>
        <!-- <fr-notification></fr-notification> -->
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      dialogToggle: false
    }
  },
  methods: {
    dialogConfirm () {
      console.log('Yes, click the confirm in dialog.')
    },
    triggerNotifc () {
      this.$notification({
        type: 'success'
      })
    },
    triggerNotifc2 () {
      this.$notification({
        type: 'error'
      })
    },
    triggerNotifc3 () {
      this.$notification({
        type: 'warning'
      })
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
