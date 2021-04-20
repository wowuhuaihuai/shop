import { useStore } from 'vuex'

// 商品数量逻辑
export const useCommonCartEffect = () => {
  // 获取 store 实例
  const store = useStore()
  // 获取cartList
  const cartList = store.state.cartList
  // 商品 +/- 的逻辑
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }

  return { cartList, changeCartItemInfo }
}
