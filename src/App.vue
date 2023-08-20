<template>
  <div class="box">
    <h1>我是app根组件</h1>
    <h2>新增一个标题</h2>
    <el-button type="primary" :icon="Edit">Primary</el-button>
    <!-- 测试svg图标 -->
    <svg>
      <use xlink:href="#icon-one" fill="red"></use>
    </svg>
    <SvgIcon name="one" color="green"></SvgIcon>
    <SvgIcon name="home" color="yellow"></SvgIcon>
    <!-- <my-component name="one" color="green"></my-component>
    <my-component name="home" color="yellow"></my-component> -->
  </div>
</template>
<script setup lang="ts">
const str = 'asdsadasd'
console.log(str)
import {
  Edit
} from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
// .box {
//   width: 200px;
//   height: 100px;
//   font-size: 18px;
//   columns: 11;
// }
.box{
  color: $color;
}
</style>
