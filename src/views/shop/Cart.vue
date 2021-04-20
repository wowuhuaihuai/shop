<template>
  <div class="cart">
    <div class="product">
      <div class="product__header">
        <div class="product__header__all" @click="() => setCartItmesChecked(shopId, allChecked)">
          <span class="product__header__icon iconfont" v-html="allChecked ? '&#xe652;' : '&#xe6f7;'" />
          全选
        </div>
        <div class="product__header__clear" @click="() => cleanCartProducts(shopId)">清空购物车</div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <div class="product__item__check iconfont" @click="() => changeCartItemChecked(shopId, item._id)" v-html="item.check ? '&#xe652;' : '&#xe6f7;'" />
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

const useCartEffect = shopId => {
  const { changeCartItemInfo } = useCommonCartEffect()
  // vuex 获取购物车数据
  const store = useStore()
  const cartList = store.state.cartList

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
      // 商品被选中
      if (productList[i].check) {
        price += productList[i].count * productList[i].price
      }
    }
    // 保留小数点后两位
    return price.toFixed(2)
  })

  // vue 计算属性 是否全选中
  const allChecked = computed(() => {
    // 根据购物车数据和店铺id获取购物车中店铺的商品信息
    const productList = cartList[shopId]
    let allChecked = true
    // 循环变量计算商品总价
    for (const i in productList) {
      const product = productList[i]
      // 商品被选中
      if (product.count > 0 && !product.check) {
        allChecked = false
      }
    }

    return allChecked
  })

  // 点击选中icon的逻辑
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  // 清空购物车的逻辑
  const cleanCartProducts = shopId => {
    store.commit('cleanCartProducts', { shopId })
  }

  const setCartItmesChecked = () => {
    console.log('allChecked', allChecked.value)
    const allCheckedValue = allChecked.value

    store.commit('setCartItmesChecked', { shopId, allCheckedValue })
  }
  return { total, price, allChecked, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, setCartItmesChecked }
}

export default {
  name: 'Cart',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const { total, price, allChecked, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, setCartItmesChecked } = useCartEffect(shopId)

    const productList = computed(() => {
      const store = useStore()
      return store.state.cartList?.[shopId] || []
    })

    return { total, price, allChecked, productList, changeCartItemInfo, changeCartItemChecked, shopId, cleanCartProducts, setCartItmesChecked }
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
  &__header {
    display: flex;
    line-height: 0.52rem;
    border-bottom: 0.01rem solid #f1f1f1;
    &__all {
      font-size: 0.14rem;
      width: 0.74rem;
      margin-left: 0.18rem;
    }
    &__icon {
      color: #0091ff;
      font-size: 0.2rem;
    }
    &__clear {
      flex: 1;
      text-align: right;
      font-size: 0.14rem;
      clear: #333;
      margin-right: 0.16rem;
    }
  }
  &__item {
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    position: relative;
    &__check {
      line-height: 0.47rem;
      margin-right: 0.16rem;
      font-size: 0.2rem;
      color: #0091ff;
    }
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
