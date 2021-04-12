<!--
 * @Author       : your name
 * @Date         : 2021-04-08 21:41:47
 * @LastEditTime : 2021-04-08 22:14:14
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : /jingdong/src/components/ShopInfo.vue
-->
<template>
  <div class="shop">
    <img :src="item.imgUrl" alt="" class="shop__img" />
    <div :class="{ shop__content: true, 'shop__content--border': hideBorder ? false : true }">
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月售:{{ item.sales }}</span>
        <span class="shop__content__tag">起送:{{ item.expressLimit }}</span>
        <span class="shop__content__tag">基础运费:{{ item.expressPrice }}</span>
      </div>
      <p class="shop__content__highlight">
        {{ item.slogan }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.shop {
  display: flex;
  padding-top: 0.12rem;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--border {
      border-bottom: 0.01rem solid $content-bgColor;
    }
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontColor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontColor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      color: #e93b3b;
      font-size: 0.13rem;
      margin: 0.08rem 0 0 0;
    }
  }
}
</style>
