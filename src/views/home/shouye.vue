<template>
<!-- 首页最开始的代码，所有组件都写在一起的（未拆分组件之前） -->
  <div class="wrapper">
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
      <div class="icons__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">菜市场</p>
      </div>
      <div class="icons__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/水果店.png"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">水果店</p>
      </div>
      <div class="icons__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">鲜花绿植</p>
      </div>
      <div class="icons__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">医药健康</p>
      </div>
      <div class="icons__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/家居.png"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">家居时尚</p>
      </div>
      <div class="icons__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">烘焙蛋糕</p>
      </div>
      <div class="icons__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/签到.png"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">签到</p>
      </div>
      <div class="icons__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">大牌免运</p>
      </div>
      <div class="icons__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/红包.png"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">红包套餐</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          alt=""
          class="nearby__item__img"
        />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          alt=""
          class="nearby__item__img"
        />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          alt=""
          class="nearby__item__img"
        />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          alt=""
          class="nearby__item__img"
        />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          alt=""
          class="nearby__item__img"
        />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          alt=""
          class="nearby__item__img"
        />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe628;</div>
      <div class="docker__title">首页</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe618;</div>
      <div class="docker__title">购物车</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe75f;</div>
      <div class="docker__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe63a;</div>
      <div class="docker__title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
@import "./style/viriables.scss";
@import "./style/mixins.scss";

.wrapper {
  overflow-y: auto; // 避免附近店铺list数据过多 溢出了
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem .2rem .18rem;
}
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
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  .search__icon {
    display: inline-block;
    position: relative;
    top: 0.02rem;
    font-size: 0.16rem;
    color: #b7b7b7;
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

.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal; // 不加粗
    color: $content-fontColor;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 0.01rem solid $content-bgColor;
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
      color: $hightlight-fontColor;
      font-size: 0.13rem;
      margin: 0.08rem 0 0 0;
    }
  }
}

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
  color: $content-fontColor;
  &__item {
    flex: 1; // 均分
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5); // 因为最小只支持12px
    transform-origin: center top;
  }
}
</style>
