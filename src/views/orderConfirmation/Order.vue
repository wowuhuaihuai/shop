<template>
  <div class="order">
    <div class="order__price">实付金额 &yen;{{ calculations.price }}</div>
    <div class="order__btn">提交订单</div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

export default {
  name: 'Order',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const { calculations } = useCommonCartEffect(shopId)
    return { calculations }
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
    font-size: 14px;
    color: $bgColor;
    text-align: center;
  }
}
</style>
