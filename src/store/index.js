import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  mutations: {
    // 商品数量 +/-
    changeCartItemInfo(state, payload) {
      // 提取传过来的商铺id,商品信息
      const { shopId, productId, productInfo, num } = payload
      //  获取商铺
      let shopInfo = state.cartList[shopId]
      // 如果 cartList 中还没有该商铺的详情，就赋值为 {}
      if (!shopInfo) {
        shopInfo = {}
      }
      // 获取商品详情
      let product = shopInfo[productId]
      // 如果 shopInfo 中还没有该商品的详情，就赋值为 productInfo，并把数量置为0
      if (!product) {
        product = productInfo
        product.count = 0
      }
      // 数量 +num
      product.count += num
      // 只要加入购物车就表示选中
      if (num > 0) {
        product.check = true
      }
      if (product.count < 0) {
        product.count = 0
      }
      // 把处理后的商品详情 product 赋值给 shopInfo[productId]
      shopInfo[productId] = product
      // 再把店铺详情 shopInfo 赋值给 state.cartList[shopId]
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked(state, payload) {
      console.log(payload)
      const { shopId, productId } = payload
      const product = state.cartList[shopId][productId]
      product.check = !product.check
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    },
    setCartItmesChecked(state, payload) {
      const { shopId, allCheckedValue } = payload
      console.log('allCheckedValue', allCheckedValue)
      const products = state.cartList[shopId]
      if (products) {
        if (allCheckedValue) {
          for (const key in products) {
            const product = products[key]
            product.check = false
          }
        } else {
          for (const key in products) {
            const product = products[key]
            product.check = true
          }
        }
      }
    }
  },
  actions: {},
  modules: {}
})
