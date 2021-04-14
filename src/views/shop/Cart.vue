<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" />
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总计：
        <span class="check__info__price">&yen;128</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.cart {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0.49rem;
  width: 100%;
  box-shadow: 0 -1px 1px 0 $content-bgColor;
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
      width: 0.2rem;
      height: 0.2rem;
      background: $hightlight-fontColor;
      color: $bgColor;
      font-size: 0.12rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.2rem;
      transform: scale(0.5);
      position: absolute;
      right: 0.2rem;
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
      font-size: .18rem;
      color: $hightlight-fontColor;
      position: absolute;
    }
  }
  &__btn {
    width: 0.98rem;
    line-height: 0.49rem;
    font-size: .14rem;
    color: $bgColor;
    background: #4fb0f9;
    text-align: center;
  }
}
</style>
