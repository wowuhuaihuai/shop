<template>
  <div class="content">
    <div class="category">
      <div :class="{ category__item: true, 'category__item--active': currentTab === item.tab ? true : false }" v-for="(item, index) in categories" :key="index" @click="() => handTabClick(item.tab)">
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" alt="" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售 {{ item.sales }} 件</p>
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
          {{ cartList?.[shopId]?.[item._id]?.count || 0 }}
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
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { get } from '../../utils/request.js'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const categories = [
  {
    name: '全部商品',
    tab: 'all'
  },
  {
    name: '秒杀',
    tab: 'seckill'
  },
  {
    name: '新鲜水果',
    tab: 'fruit'
  }
]

// 商品数量逻辑
const useCartEffect = () => {
  // 获取 store 实例
  const store = useStore()
  // 提取 cartList
  const { cartList } = toRefs(store.state)
  // 商品 +/- 的逻辑
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num})
  }

  return { cartList, changeCartItemInfo }
}

// 切换 tab 相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handTabClick = tab => {
    currentTab.value = tab
  }
  return { handTabClick, currentTab }
}

// 获取列表内容的逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  // 实例化路由

  // 定义变量储存list数据
  const content = reactive({ list: [] })

  // 发送请求
  const getContentList = async () => {
    const result = await get(`api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }
  // 监听getContentList方法，会自动监听所依赖的参数 currentTab 的值
  watchEffect(() => getContentList())
  // 提取list
  const { list } = toRefs(content)
  // 把数据返回了
  return { list }
}

export default {
  name: 'Content',
  setup() {
    const route = useRoute()
    // 通过路由获取店铺id
    const shopId = route.params.id
    const { handTabClick, currentTab } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)

    const { cartList, changeCartItemInfo } = useCartEffect(shopId, list)
    console.log('cartList', cartList?.shopId?.item._id || 0)

    return { list, currentTab, handTabClick, categories, cartList, shopId, changeCartItemInfo }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.content {
  position: absolute; //绝对定位
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
  display: flex;
}
.category {
  width: 0.76rem;
  background: $search-bgColor;
  overflow-y: scroll;
  &__item {
    line-height: 0.4rem;
    font-size: 0.14rem;
    text-align: center;
    color: $content-fontColor;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    position: relative;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
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
    &__sales {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-size: 0.12rem;
      color: $content-fontColor;
    }
    &__price {
      margin: 0;
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
</style>
