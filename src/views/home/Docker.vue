<template>
  <!-- 首页底部的 tab 栏 -->
  <div class="docker">
    <span v-for="(item, index) in dockerList" :key="index" :class="{ docker__item: true, 'docker__item--active': index === 0 }">
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup() {
    const dockerList = [
      { icon: '&#xe628;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe618;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe75f;', text: '订单', to: { name: 'Home' } },
      { icon: '&#xe63a;', text: '我的', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.docker {
  display: flex; // 弹性布局
  position: absolute; // 绝对定位
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  &__item {
    flex: 1; // 均分
    text-align: center;
    a {
      color: $content-fontColor;
      text-decoration: none;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }

    &--active {
      a {
        color: #1fa4fc;
      }
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5); // 因为最小只支持12px
    transform-origin: center top;
  }
}
</style>
