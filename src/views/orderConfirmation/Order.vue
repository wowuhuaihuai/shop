<template>
  <div class="order">
    <div class="order__price">实付金额 &yen;{{ calculations.price }}</div>
    <div class="order__btn" @click="() => handleShowConfirmChange(true)">提交订单</div>
  </div>
  <div class="musk" v-if="showConfirm" @click="() => handleShowConfirmChange(false)">
    <div class="musk__content" @click.stop>
      <div class="musk__content__title">确认要离开收银台？</div>
      <div class="musk__content__desc">请尽快完成支付，否则将被取消</div>
      <div class="musk__content__btn">
        <div class="musk__content__btn--first" @click="() => handleCancleOrder(true)">取消订单</div>
        <div class="musk__content__btn--last" @click="() => handleConfirmOrder(false)">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
import { post } from '../../utils/request'

// 下单逻辑相关
const useMakeOrderEffect = (shopId, shopName, productList, cleanCartProducts) => {
  const router = useRouter()

  const handleCancleOrder = () => {
    alert('取消支付')
  }
  // 确认支付
  const handleConfirmOrder = async isCanceled => {
    try {
      const produts = []
      for (const i in productList.value) {
        produts.push({
          id: parseInt(productList.value[i]._id, 10),
          num: productList.value[i].count
        })
      }
      // 获取输入框的用户名和密码并携带请求登录接口
      const resulte = await post('/api/order', {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCanceled: isCanceled,
        products: produts
      })
      // 判断登录接口返回的状态码
      if (resulte?.errno === 0) {
        // 清空购物车
        cleanCartProducts(shopId)
        router.push({ name: 'OrderList' })
      } else {
        console.log('确认支付失败')
      }
    } catch (e) {
      // 整个过程中有异常就弹窗提示 '请求失败'
      console.log('请求失败')
    }
  }
  return { handleCancleOrder, handleConfirmOrder }
}

// 蒙层相关luo0ji
const useShowMaskEttect = () => {
  const showConfirm = ref(false)
  const handleShowConfirmChange = status => {
    showConfirm.value = status
  }
  return { showConfirm, handleShowConfirmChange }
}

export default {
  name: 'Order',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const { calculations, shopName, productList, cleanCartProducts } = useCommonCartEffect(shopId)
    const { handleCancleOrder, handleConfirmOrder } = useMakeOrderEffect(shopId, shopName, productList, cleanCartProducts)
    const { showConfirm, handleShowConfirmChange } = useShowMaskEttect()

    return { calculations, handleCancleOrder, handleConfirmOrder, showConfirm, handleShowConfirmChange }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 0.49rem;
  line-height: 0.49rem;
  &__price {
    flex: 1;
    background: $bgColor;
    font-size: 0.14rem;
    color: $content-fontColor;
    text-indent: 0.24rem;
  }
  &__btn {
    width: 0.98rem;
    height: 0.49rem;
    background: #4fb0f9;
    font-size: 0.14rem;
    color: $bgColor;
    text-align: center;
  }
}
.musk {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  &__content {
    width: 3rem;
    height: 1.56rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: $bgColor;
    border-radius: 0.04rem;
    text-align: center;
    &__title {
      line-height: 0.25rem;
      font-size: 0.18rem;
      color: $content-fontColor;
      margin-top: 0.24rem;
    }
    &__desc {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $medium-fontColor;
      margin-top: 0.08rem;
    }
    &__btn {
      margin-top: 0.24rem;
      line-height: 0.32rem;
      &--first {
        width: 0.8rem;
        display: inline-block;
        font-size: 14rem;
        color: $btn-bgColor;
        border: 0.01rem solid $order-btn-bgColor;
        border-radius: 0.16rem;
        margin-right: 0.12rem;
      }
      &--last {
        width: 0.8rem;
        display: inline-block;

        background: $order-btn-bgColor;
        border: 0.01rem solid $order-btn-bgColor;
        border-radius: 0.16rem;
        font-size: 0.14rem;
        color: $bgColor;
        margin-left: 0.12rem;
      }
    }
  }
}
</style>
