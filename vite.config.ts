import { defineConfig,UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//引入svg需要用到插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
// command用于获取开发环境，于mock相关,毕竟只有开发要
export default defineConfig(({ command }: ConfigEnv)=>{
  return {
    plugins: [vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: true,
      })
],
    resolve:{
      alias:{
        "@":path.resolve("./src")
      }
    },
        //scss全局变量一个配置
        css: {
          preprocessorOptions: {
            scss: {
              javascriptEnabled: true,
              additionalData: '@import "./src/styles/variable.scss";',
            },
          },
        }
  }
})
