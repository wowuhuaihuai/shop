# watchEffect的用法
> 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。

## 与 watch 有什么不同？

>第一点我们可以从示例代码中看到 watchEffect 不需要指定监听的属性，他会自动的收集依赖， 只要我们回调中引用到了 响应式的属性， 那么当这些属性变更的时候，这个回调都会执行，而 watch 只能监听指定的属性而做出变更(v3开始可以同时指定多个)。
>第二点就是 watch 可以获取到新值与旧值（更新前的值），而 watchEffect 是拿不到的。
>第三点是 watchEffect 如果存在的话，在组件初始化的时候就会执行一次用以收集依赖（与computed同理），而后收集到的依赖发生变化，这个回调才会再次执行，而 watch 不需要，因为他一开始就指定了依赖。

## 普通用法:
```js
import { watchEffect, ref } from 'vue'
setup () {
    const userID = ref(0)
    watchEffect(() => console.log(userID))
    setTimeout(() => {
      userID.value = 1
    }, 1000)

    /*
      * LOG
      * 0 
      * 1
    */

    return { userID }
 }
```
	
## 停止监听
```js
const stop = watchEffect(() => {
  /* ... */
})

// later
stop()
```


## 使 side effect 无效
```js
watchEffect(() => {
      // 异步api调用，返回一个操作对象
      const apiCall = someAsyncMethod(props.userID)

      onInvalidate(() => {
        // 取消异步api的调用。
        apiCall.cancel()
      })
})
```