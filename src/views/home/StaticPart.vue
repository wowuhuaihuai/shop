<template>
  <!-- 首页的静态组件（主要包括 定位,搜索,banner,icons） -->
  <div class="position">
    <span class="iconfont position__icon">&#xe61f;</span>
    北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notice">&#xe8ae;</span>
  </div>
  <div class="search">
    <span class="iconfont search__icon">&#xe612;</span>山姆会员商店优惠商品
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt="banner"
    />
  </div>
  <div class="icons">
    <div v-for="(item, index) in iconsList" :key="index" class="icons__item">
      <img :src="item.imgUrl" alt="" class="icons__item__img" />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>

  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup() {
    const iconsList = [
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        desc: '菜市场'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
        desc: '水果店'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
        desc: '鲜花绿植'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
        desc: '医药健康'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/家居.png',
        desc: '家居时尚'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
        desc: '烘焙蛋糕'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/签到.png',
        desc: '签到'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
        desc: '大牌免运'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/红包.png',
        desc: '红包套餐'
      }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.position {
  color: $content-fontColor;
  @include ellipsis;
  position: relative; // 相对定位 用于定位 position__notice
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  .position__icon {
    // .position__icon的优先级比&__icon高
    position: relative; // 相对定位
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute; // 绝对定位
    right: 0;
    top: 0.17rem; // 要加上 position盒子的上边框0.16rem
    font-size: 0.2rem;
  }
}

.search {
  margin-bottom: 0.12rem; //跟下面的banner位有间距
  line-height: 0.32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  .search__icon {
    display: inline-block;
    position: relative;
    top: 0.02rem;
    font-size: 0.16rem;
    color: $search-fontColor;
    padding: 0.08rem 0.12rem 0.08rem 0.16rem;
    line-height: 0.16rem;
  }
}

.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%; // 图片宽度的25.4%： 为了使图片还没有加载出来的时候，下面的内容有抖动。先占着这个位置
  &__img {
    width: 100%;
  }
}

.icons {
  margin-top: 0.16rem;
  display: flex;
  flex-wrap: wrap; //规定灵活的项目在必要的时候拆行或拆列
  &__item {
    width: 20%;
    &__img {
      width: 0.4rem;
      height: 0.4rem;
      display: block; // 就是变为块级元素 这样图片和描述就分成2行
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontColor;
    }
  }
}

.gap {
  background: $content-bgColor;
  height: 0.1rem;
  margin: 0 -0.18rem;
}
</style>
