# jingdong

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 1.安装插件 202103051019
```
ESLint, Vetur
```
## 2.路径介绍
```
node_modules 第三方模块代码
public 默认入口文件
.editorconfig 编辑器默认配置
babel.config.js babel配置
package.json 依赖包,script,eslint配置项,browserlist 打包编译中支持的浏览器配置
src 源代码文件
```

## 2.源代码文件路劲介绍
```
assets 静态文件
componets 组件
router 路由
store 状态管理
views 视图
main.js 源代码入口文件
```

## 3. 插件 normalize.css
```
# 可以抹平不同浏览器之间的差异，使得不同浏览器显示一致
npm install normalize.css --save
```

### 3.1 插件的使用
```
1.新建 style/base.scss 文件
html{
    font-size: 100px;
}
2.在main.js
导入插件和定义的文件
import 'normalize.css'
import './style/base.scss'
```



## 4. 路由守卫
```javascript
// 1.在每个路由中可以添加  beforeEnter: (to, from, next) => {}
// 2.在router/index.js 整体的后面添加 router.beforeEach((to, from, next) => { }
```

## 5. 路由实例的使用
```javascript
// 在vue文件中导入路由实例
import { useRouter } from 'vue-router'
// 在方法中使用实例
const router = useRouter()
router.push({ name: 'Home' })
```


## 6. 安装 axios: 发起请求
```js
// npm install axios --save
import axios from 'axios'
```

## 7. 安装 json-server: 模拟接口
```js
// npm install -g json-server
// json-server data.json
```

## 8. Mock: 可以模拟后台静态接口

## 9.toRefs
```js
  // toRef 用于创建一个响应式数据
  // toRefs 接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用toRef执行 （把对象的属性变为单独我响应式数据）
```

## 10.setup 思想
```js
// setup 实质是告诉你 代码的流程，可以在外部 一个个功能点一个方法。再把要使用的变量和方法导出来。再在setup中使用
```

## 11.解决登录框账号密码被自动填充的问题
```html
<!-- 密码框需要加入属性 autocomplete="new-password -->
<input type="password" placeholder="请输入密码" autocomplete="new-password"/>
```

## 12.路由-按需加载页面
```js
// router/index.js
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
  }
  ]
```

## 13.
```js
```











