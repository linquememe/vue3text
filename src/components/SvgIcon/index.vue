<template>
  <svg :style="{width,height}">
    <use :xlink:href="prefix+name" :fill="color"></use>
  </svg>
</template>

<script lang="ts" setup>
// import { defineComponent } from 'vue'

// export default defineComponent({
//   setup () {
    

//     return {}
//   }
// })
//接收父组件传过来的参数
defineProps({
  // 前缀
  prefix:{
    type:String,
    default:'#icon-'
  },
  //图标名字
  name:String,
  //颜色
  color:{
    type:String,
    default:''
  },
  width:{
    type:String,
    default:'16px'
  },
  height:{
    type:String,
    default:'16px'
  }
})
</script>

<style scoped>

</style>