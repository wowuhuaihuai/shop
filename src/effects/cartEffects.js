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

  const calculations = computed(() => {
    // 根据购物车数据和店铺id获取购物车中店铺的商品信息
    const productList = cartList[shopId]?.productList
    // 定义字典 总数量,总价,全选状态
    const result = { total: 0, price: 0, allChecked: true }

    // 没有商品信息，商品数量默认0
    if (productList) {
      // 循环变量计算商品数量
      for (const i in productList) {
        const product = productList[i]
        result.total += product.count
        // 商品被选中
        if (product.check) {
          result.price += product.count * product.price
        }
        // 商品没被选中
        if (product.count > 0 && !product.check) {
          result.allChecked = false
        }
      }
    }
    // 保留2位小数点
    result.price = result.price.toFixed(2)

    return result
  })

  return { cartList, productList, shopName, calculations, changeCartItemInfo }
}
