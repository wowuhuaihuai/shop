<!--
 * @Author       : your name
 * @Date         : 2021-04-07 23:21:19
 * @LastEditTime : 2021-04-09 23:03:48
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : /jingdong/src/components/Toast.vue
-->
<template>
  <div id="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  // 用于接收父组件的传值
  props: ['message']
}

export const useToastEffect = () => {
  // 用于储存弹窗的显示状态和显示内容
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })

  // 显示2秒弹窗的方法
  const showToast = message => {
    toastData.show = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }

  // toRef 用于创建一个响应式数据
  // toRefs 接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用toRef执行 （把对象的属性变为单独我响应式数据）
  const { show, toastMessage } = toRefs(toastData)
  // 返回存储的变量和弹窗的方法
  return { show, toastMessage, showToast }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';

#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: $bgColor;
  padding: 0.1rem;
}
</style>
