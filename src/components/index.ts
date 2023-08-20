// 对外暴露插件对象
import { colProps } from 'element-plus'
import SvgIcon from './SvgIcon/index.vue'
//搞成全局对象
const allGloablComponent: any = { SvgIcon}

export default {
  //一定要install方法
  install(app){
    console.log(12323)
    //注册项目全部的全局组件
    Object.keys(allGloablComponent).forEach((key) => {
      //注册为全局组件
      app.component(key, allGloablComponent[key])
    })
  }
}