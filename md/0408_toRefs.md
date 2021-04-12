<!--
 * @Author       : your name
 * @Date         : 2021-04-08 15:02:41
 * @LastEditTime : 2021-04-08 15:50:23
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : /jingdong/md/0408_toRefs.md
-->
# toRefs 的使用

> toRefs 来结构 reactive 对象，并直接返回解构后的单独的参数，就可以在模板中使用单独的参数
> // toRef 用于创建一个响应式数据
> // toRefs 接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用toRef执行 （把对象的属性变为单独我响应式数据）
## 1.场景

> 此时用的是 reactive 来包装的一个字典data
> 在setup中返回也只能返回 data
> 从而在模板代码中只能绑定 v-model="data.username" ， v-model="data.password" 

```vue
<template>
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="data.username" />
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="data.password" />
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Login',
  components: { Toast },
  setup() {
        const data = reactive({ username: '', password: '' })
        return { data }
  }
```

> 修改后
> 此时用的是 toRefs 来解构字典data: const { username, password } = toRefs(data)
> 在setup中返回return { username, password }
> 从而在模板代码中绑定 v-model="username" ， v-model="password" 

```vue
<template>
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="username" />
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password" />
    </div>
</template>

<script>
import { reactive ,toRefs} from 'vue'

export default {
  name: 'Login',
  components: { Toast },
  setup() {
        const data = reactive({ username: '', password: '' })
        const { username, password } = toRefs(data)
        return { username, password }
  }
```