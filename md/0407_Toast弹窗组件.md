# Toast弹窗组件

组件的使用
组件传值

## 1.通用组件放在统一文件夹

* 新建统一的组件文件夹 components
* 创建弹窗组件文件夹 Toast.vue

## 2.编写组件代码
```js
<template>
  <div id="toast">内容</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #fff;
  padding: 0.1rem;
}
</style>
```
## 3.在登录页面引入组件

```js
<template>
    ...
    <!--模板页面使用组件-->
    <Toast/>
</template>

<script>
import Toast from '../../components/Toast' //引入组件

export default {
  name: 'Login',
  components: { Toast },// 声明引入的组件
  setup() {}
```

## 4. showToast 来控制是否显示弹窗，toastMessage 控制显示的内容
* 在模板加属性字段

```js
<template>
    ...
    <Toast v-if="data.showToast" :message="data.toastMessage"/>
</template>

<script>
...
export default {
  setup() {
    const data = reactive({
      username: '',
      password: '',
      showToast: false, // 控制弹窗是否显示，默认不显示
      toastMessage: '' // 控制显示的内容，默认是空
    })
```

* toastMessage 通过属性 message 传递给子组件

```vue
<template>
  <div id="toast">{{ message }}</div>
</template>

<script>
export default {
  props: ['message'] // props用于接收父组件传递过来的值
}
</script>
```

## 5.编写逻辑

```vue
// 当登录失败
data.showToast = true // 显示弹窗
data.toastMessage = '登录失败' // 显示内容是 登录失败
setTimeout(() => {
    data.showToast = false
    data.toastMessage = ''
}, 2000) // 2秒后弹窗消失
```

## 6.因为多处使用，可以封装成一个公用方法

```js
const showToast = message => {
  data.showToast = true
  data.toastMessage = message
  setTimeout(() => {
    data.showToast = false
    data.toastMessage = ''
  }, 2000)
}

showToast("登录失败") // 公用方法的使用
```