<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBack">&#xe600;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe612;</span>
        <input type="text" class="search__content__input" placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <!-- 等img加载完成后，整个shopinfo才会展示出来 -->
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl" />
  </div>
  <Content />
</template>

<script>
import ShopInfo from '../../components/ShopInfo'
import Content from '../../views/shop/Cotent'
import { useRouter, useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'

// 获取店铺信息的操作
const useShopInfoEffect = () => {
  // const router = useRouter() // 整个大的路由信息
  const route = useRoute() // 当前你访问的路径的信息
  const data = reactive({ item: {} }) // 处理大数据字典对象可以这么处理，这样赋值比较简单  data.item = result.data
  // 获取某个店铺的详情
  const getItemData = async () => {
    const result = await get(`api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  // 把信息抽离出来
  const { item } = toRefs(data)

  return { item, getItemData }
}

// 点击返回的逻辑
const useBackRouterEffect = () => {
  const router = useRouter() // 整个大的路由信息
  // const route = useRoute() // 当前你访问的路径的信息

  const handleBack = () => {
    router.back()
  }
  return handleBack
}

export default {
  name: 'shop',
  components: { ShopInfo, Content },
  setup() {
    // 点击返回
    const handleBack = useBackRouterEffect()
    // 获取店铺详情
    const { item, getItemData } = useShopInfoEffect()
    getItemData()
    return { item, handleBack }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 0.18rem;
}
.search {
  margin: 0.2rem 0 0.04rem 0;
  display: flex;
  line-height: 0.32rem;
  &__back {
    color: #b6b6b6;
    width: 0.3rem;
    font-size: 0.24rem;
  }
  &__content {
    display: flex;
    flex: 1; // 表示 back占了固定宽度，content就占剩余多有的宽度
    background: $search-bgColor;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: 0; // 正常不显示边框
      outline: none; // 点击后不显示边框
      font-size: 0.14rem;
      color: $content-fontColor;
      background: none; // 因为input在content的上方，背景色会盖住content，所以置为none，就会把content的背景色显示出来
      &::placeholder {
        color: $content-fontColor;
      }
    }
  }
}
</style>
