import { useStore } from 'vuex'
import { toRefs } from 'vue'

// 商品数量逻辑
export const useCommonCartEffect = () => {
  // 获取 store 实例
  const store = useStore()
  // 提取 cartList
  const { cartList } = toRefs(store.state)
  // 商品 +/- 的逻辑
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }

  return { cartList, changeCartItemInfo }
}
