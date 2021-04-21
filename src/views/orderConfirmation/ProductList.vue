<template>
  <div class="products">
    <div class="products__title">{{ shopName }}</div>
    <div class="products__list">
      <template v-for="item in productList" :key="item._id">
        <div class="products__item" v-if="item.count > 0">
          <img class="products__item__img" :src="item.imgUrl" :alt="item.name" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__yen">&yen;</span>
                {{ item.price }}x{{ item.count }}
              </span>
              <span class="products__item__total">
                <span class="products__item__yen">&yen;</span>
                {{ (item.price * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
      </template>
      <template v-for="item in productList" :key="item._id">
        <div class="products__item" v-if="item.count > 0">
          <img class="products__item__img" :src="item.imgUrl" :alt="item.name" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__yen">&yen;</span>
                {{ item.price }}x{{ item.count }}
              </span>
              <span class="products__item__total">
                <span class="products__item__yen">&yen;</span>
                {{ (item.price * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
      </template>
      <template v-for="item in productList" :key="item._id">
        <div class="products__item" v-if="item.count > 0">
          <img class="products__item__img" :src="item.imgUrl" :alt="item.name" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__yen">&yen;</span>
                {{ item.price }}x{{ item.count }}
              </span>
              <span class="products__item__total">
                <span class="products__item__yen">&yen;</span>
                {{ (item.price * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
      </template>
      <template v-for="item in productList" :key="item._id">
        <div class="products__item" v-if="item.count > 0">
          <img class="products__item__img" :src="item.imgUrl" :alt="item.name" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__yen">&yen;</span>
                {{ item.price }}x{{ item.count }}
              </span>
              <span class="products__item__total">
                <span class="products__item__yen">&yen;</span>
                {{ (item.price * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
      </template>
      <template v-for="item in productList" :key="item._id">
        <div class="products__item" v-if="item.count > 0">
          <img class="products__item__img" :src="item.imgUrl" :alt="item.name" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__yen">&yen;</span>
                {{ item.price }}x{{ item.count }}
              </span>
              <span class="products__item__total">
                <span class="products__item__yen">&yen;</span>
                {{ (item.price * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
      </template>
      <template v-for="item in productList" :key="item._id">
        <div class="products__item" v-if="item.count > 0">
          <img class="products__item__img" :src="item.imgUrl" :alt="item.name" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__yen">&yen;</span>
                {{ item.price }}x{{ item.count }}
              </span>
              <span class="products__item__total">
                <span class="products__item__yen">&yen;</span>
                {{ (item.price * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

export default {
  name: 'ProductList',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const { productList, shopName } = useCommonCartEffect(shopId)
    return { shopId, productList, shopName }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.products {
  margin: 0.53rem 0.18rem 0.55rem 0.18rem;
  background: $bgColor;
  border-radius: 0.04rem 0.04rem 0 0;
  &__title {
    padding: 0.16rem 0 0.16rem 0.16rem;
    font-size: 0.16rem;
    color: $content-fontColor;
  }
  &__list {
    overflow-y: scroll;
    position: absolute;
    bottom: 0.6rem;
    top: 2.6rem;
    left: 0.18rem;
    right: 0.18rem;
    background: $bgColor;
    border-radius: 0 0 0.04rem 0.04rem;
  }
  &__item {
    display: flex;
    padding: 0.16rem;
    position: relative;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontColor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: $dark-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
  }
}
</style>
