import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
  },
  {
    path: '/register',
    name: 'Register',
    // component: Register,
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
    beforeEnter: (to, from, next) => {
      console.log(to, from)
      // 在本地储存中获取登陆状态
      const { isLogin } = localStorage
      // 登陆状态为true及跳转到首页，false则继续下一步即就是跳转到登陆页面
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    // component: Login,
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login'),
    beforeEnter: (to, from, next) => {
      console.log(to, from)
      // 在本地储存中获取登陆状态
      const { isLogin } = localStorage
      // 登陆状态为true及跳转到首页，false则继续下一步即就是跳转到登陆页面
      isLogin
        ? next({
          name: 'Home'
        })
        : next()
    }
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log(to, from)

  // const isLogin = localStorage.isLogin
  // if (isLogin || to.name === 'Login') {
  //   // 用户已登录 或者 访问的页面是登录页面，都继续下一步访问
  //   next()
  // } else {
  //   // 没有登录信息 或者 访问的是非登录页面，都返回登录页面
  //   next({ name: 'Login' })
  // }

  // 在本地储存中获取登陆状态
  // 登陆状态为true及跳转到首页，false则继续下一步即就是跳转到登陆页面
  const { isLogin } = localStorage
  const { name } = to
  const isLginOrRegister = name === 'Login' || name === 'Register'
  isLogin || isLginOrRegister
    ? next()
    : next({
      name: 'Login'
    })
})

export default router
