<template>
  <div class="wrapper">
    <!-- 头像 -->
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img" />
    <!-- 输入框 -->
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="username" />
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password" autocomplete="new-password" />
    </div>
    <!-- 按钮 -->
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
// Toast是组件，useToastEffext是一个方法
import Toast, { useToastEffect } from '../../components/Toast'

// 登录相关操作
const useLoginEffect = showToast => {
  // 实例化路由
  const router = useRouter()
  // 把普通对象实例化为响应式的数据对象
  const data = reactive({ username: '', password: '' })

  // 点击登陆直接跳转到首页
  const handleLogin = async () => {
    try {
      // 获取输入框的用户名和密码并携带请求登录接口
      const resulte = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      // 判断登录接口返回的状态码
      if (resulte?.errno === 0) {
        // 状态码为0,表示登录成功，把登录状态设置为true并存储到本地储存，同时跳转到首页
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        // 否则弹窗提示'登录失败'
        showToast('登录失败')
      }
    } catch (e) {
      // 整个过程中有异常就弹窗提示 '请求失败'
      showToast('请求失败')
    }
  }
  // toRef 用于创建一个响应式数据
  // toRefs 接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用toRef执行 （把对象的属性变为单独我响应式数据）
  const { username, password } = toRefs(data)

  return { username, password, handleLogin }
}

// 点击注册的逻辑
const useRegisterEffect = () => {
  // 实例化路由
  const router = useRouter()
  // 点击 立即注册，跳转到注册页面
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}

export default {
  name: 'Login',
  components: { Toast },
  // setup 职责是告诉你代码执行的流程
  setup() {
    // 弹窗相关
    const { show, toastMessage, showToast } = useToastEffect()
    // 登录相关
    const { username, password, handleLogin } = useLoginEffect(showToast)
    // 点击注册相关
    const { handleRegisterClick } = useRegisterEffect()

    return { handleLogin, handleRegisterClick, username, password, show, toastMessage }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    padding: 0 0.16rem;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    background: $input-bgColor;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    &__content {
      width: 100%;
      border: none;
      outline: none;
      line-height: 0.48rem;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontColor;
      &::placeholder {
        color: $content-notice-fontColor;
      }
    }
  }
  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    width: 2.95rem;
    height: 0.48rem;
    background: $btn-bgColor;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: $bgColor;
    line-height: 0.48rem;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    color: $content-notice-fontColor;
    font-size: 0.14rem;
    letter-spacing: 0;
    text-align: center;
  }
}
</style>
