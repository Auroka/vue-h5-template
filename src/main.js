import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission' // permission control

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/style/index.scss' // 一些公用样式
// import 'lib-flexible/flexible.js' //移动端适配 配合px2rem-loader使用
import './vant'

import vConsole from 'vconsole'
const vconsole = new vConsole()
Vue.use(vconsole)

import FastClick from 'fastclick' // 解决移动端click事件300毫秒延迟
FastClick.attach(document.body)

// 解决iOS上多次点击输入框才能弹出弹框的问题
FastClick.prototype.focus = function(targetElement) {
  let length
  if (
    targetElement.setSelectionRange &&
    targetElement.type.indexOf('date') !== 0 &&
    targetElement.type !== 'time' &&
    targetElement.type !== 'month'
  ) {
    length = targetElement.value.length
    targetElement.focus()
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
