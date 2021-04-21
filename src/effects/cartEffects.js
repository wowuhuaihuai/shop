import { useStore } from 'vuex'
import { computed } from 'vue'

// 商品数量逻辑
export const useCommonCartEffect = shopId => {
  // 获取 store 实例
  const store = useStore()
  // 获取cartList
  const cartList = store.state.cartList
  // 商品 +/- 的逻辑
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }

  // 商铺的商品列表
  const productList = computed(() => {
    return cartList?.[shopId]?.productList || {}
  })
  // 商品的店名
  const shopName = computed(() => {
    return cartList?.[shopId]?.shopName || ''
  })

  return { cartList, productList, shopName, changeCartItemInfo }
}
