import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入模板的全局的样式
import '@/styles/index.scss'
//配置elementui的国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象:注册整个项目的全局组件
import gloalComponent from '@/components'
//安装自定义插件

//引入全局组件
// import SvgIcon from '@/components/SvgIcon/index.vue'
//获取应用的实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(gloalComponent)
//将应用挂载到#app上
app.mount('#app')
// app.component('my-component',SvgIcon)
console.log(import.meta.env)