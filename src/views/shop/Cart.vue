<template>
  <div class="mask" v-if="showCart && calculations.total > 0" @click="handleCartShowChange"></div>
  <div class="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product__header">
        <div class="product__header__all" @click="() => setCartItmesChecked(shopId, calculations.allChecked)">
          <span class="product__header__icon iconfont" v-html="calculations.allChecked ? '&#xe652;' : '&#xe619;'" />
          全选
        </div>
        <div class="product__header__clear"><span class="product__header__clear__btn" @click="() => cleanCartProducts(shopId)">清空购物车</span></div>
      </div>
      <div class="product__item" v-for="item in productList" :key="item._id">
        <div class="product__item__check iconfont" @click="() => changeCartItemChecked(shopId, item._id)" v-html="item.check ? '&#xe652;' : '&#xe619;'" />
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
    </div>
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" @click="handleCartShowChange" />
        <div class="check__icon__tag">{{ calculations.total }}</div>
      </div>
      <div class="check__info">
        总计：
        <span class="check__info__price">&yen; {{ calculations.price }}</span>
      </div>
      <div class="check__btn" v-if="calculations.total > 0">
        <router-link :to="{ path: `/orderConfirmation/${shopId}` }">去结算</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

// 获取购物车信息逻辑
const useCartEffect = shopId => {
  const { calculations, productList, changeCartItemInfo, cleanCartProducts } = useCommonCartEffect(shopId)
  // vuex 获取购物车数据
  const store = useStore()

  // 点击选中icon的逻辑
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  // 全选/全不选
  const setCartItmesChecked = (shopId, allChecked) => {
    // 全选按钮的状态
    store.commit('setCartItmesChecked', { shopId, allChecked })
  }

  return { calculations, productList, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, setCartItmesChecked }
}

// 展示隐藏购物车逻辑
const toggleCartEffect = () => {
  // 购物车显示与否的状态
  const showCart = ref(false)

  // 改变购物车显示的逻辑
  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }
  return { showCart, handleCartShowChange }
}

export default {
  name: 'Cart',
  setup() {
    const route = useRoute()
    const shopId = route.params.id

    const { showCart, handleCartShowChange } = toggleCartEffect()

    const { calculations, productList, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, setCartItmesChecked } = useCartEffect(shopId)

    return { calculations, productList, changeCartItemInfo, changeCartItemChecked, shopId, cleanCartProducts, setCartItmesChecked, showCart, handleCartShowChange }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  bottom: 0;
  // height: 0.49rem;
  width: 100%;
  box-shadow: 0 -0.01rem 0.01rem 0 $content-bgColor;
  z-index: 2;
  background: $bgColor;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;
  &__header {
    display: flex;
    line-height: 0.52rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__all {
      font-size: 0.14rem;
      width: 0.74rem;
      margin-left: 0.18rem;
    }
    &__icon {
      vertical-align: top;
      margin-right: 0.1rem;
      color: $btn-bgColor;
      font-size: 0.2rem;
    }
    &__clear {
      flex: 1;
      text-align: right;
      font-size: 0.14rem;
      clear: $content-fontColor;
      margin-right: 0.16rem;
      &__btn {
        display: inline-block;
      }
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
      color: $btn-bgColor;
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
      margin-bottom: 0.26rem;
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
    background: #4fb0f9;
    text-align: center;
    a {
      color: $bgColor;
      text-decoration: none;
    }
  }
}
</style>
