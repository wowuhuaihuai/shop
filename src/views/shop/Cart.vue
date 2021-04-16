<template>
  <div class="cart">
    <div class="product">
      <template v-for="item in productList" :key="item._id">
      <div class="product__item" v-if="item.count > 0">
        <img class="product__item__img" :src="item.imgUrl" alt="" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>
            {{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__item__number">
          <div
            class="product__item__minus"
            @click="
              () => {
                changeCartItemInfo(shopId, item._id, item, -1)
              }
            "
          >
            -
          </div>
          {{ item.count || 0 }}
          <div
            class="product__item__plus"
            @click="
              () => {
                changeCartItemInfo(shopId, item._id, item, 1)
              }
            "
          >
            +
          </div>
        </div>
      </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" />
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计：
        <span class="check__info__price">&yen; {{ price }}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

const useCartEffect = () => {
  // vuex 获取购物车数据
  const store = useStore()
  const cartList = store.state.cartList

  // vue-router 获取店铺id
  const route = useRoute()
  const shopId = route.params.id

  // vue 计算属性 商品数量
  const total = computed(() => {
    // 根据购物车数据和店铺id获取购物车中店铺的商品信息
    const productList = cartList[shopId]
    let count = 0
    // 没有商品信息，商品数量默认wi0
    if (!productList) {
      return 0
    }
    // 循环变量计算商品数量
    for (const i in productList) {
      count += productList[i].count
    }
    return count
  })

  // vue 计算属性 商品总价
  const price = computed(() => {
    // 根据购物车数据和店铺id获取购物车中店铺的商品信息
    const productList = cartList[shopId]
    let price = 0
    if (!productList) {
      return 0
    }
    // 循环变量计算商品总价
    for (const i in productList) {
      price += productList[i].count * productList[i].price
    }
    // 保留小数点后两位
    return price.toFixed(2)
  })
  return { total, price }
}

export default {
  name: 'Cart',
  setup() {
    const { total, price } = useCartEffect()
    const route = useRoute()
    const shopId = route.params.id
    const store = useStore()
    const productList = computed(() => {
      console.log('store.state.cartList', store.state.cartList)
      console.log('shopId', shopId)
      console.log('productList', productList)
      return store.state.cartList?.[shopId] || []
    })
    const { changeCartItemInfo } = useCommonCartEffect()
    return { total, price, productList, changeCartItemInfo }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.cart {
  position: absolute;
  left: 0;
  bottom: 0;
  // height: 0.49rem;
  width: 100%;
  box-shadow: 0 -1px 1px 0 $content-bgColor;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: #fff;
  &__item {
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    position: relative;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontColor;
      @include ellipsis;
    }
    &__price {
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    &__number {
      position: absolute;
      right: 0;
      bottom: 0;
      margin-bottom: 0.12rem;
    }
    &__minus,
    &__plus {
      display: inline-block;
      border-radius: 50%;
      width: 0.2rem;
      height: 0.2rem;
      line-height: 0.18rem;
      text-align: center;
      font-size: 0.2rem;
    }
    &__minus {
      border: 0.01rem solid $medium-fontColor;
      color: $medium-fontColor;
      margin-right: 0.05rem;
    }
    &__plus {
      background: $btn-bgColor;
      color: $bgColor;
      margin-left: 0.05rem;
    }
  }
}
.check {
  display: flex;
  height: 0.49rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      width: 0.28rem;
      height: 0.26rem;
      margin: 0.12rem auto;
    }
    &__tag {
      // width: 0.2rem;
      height: 0.2rem;
      background: $hightlight-fontColor;
      color: $bgColor;
      font-size: 0.12rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.2rem;
      transform: scale(0.5);
      transform-origin: left center;
      position: absolute;
      padding: 0 0.05rem;
      left: 0.5rem;
      top: 0.04rem;
    }
  }
  &__info {
    flex: 1;
    position: relative;
    font-size: 0.12rem;
    color: $content-fontColor;
    line-height: 0.49rem;
    &__price {
      font-size: 0.18rem;
      color: $hightlight-fontColor;
      position: absolute;
    }
  }
  &__btn {
    width: 0.98rem;
    line-height: 0.49rem;
    font-size: 0.14rem;
    color: $bgColor;
    background: #4fb0f9;
    text-align: center;
  }
}
</style>
