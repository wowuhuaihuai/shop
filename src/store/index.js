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
      //  获取商铺,如果 cartList 中还没有该商铺的详情，就赋值为 {}
      const shopInfo = state.cartList[shopId] || {}
      // 获取商品详情
      let product = shopInfo[productId]
      // 如果 shopInfo 中还没有该商品的详情，就赋值为 productInfo，并把数量置为0
      if (!product) {
        productInfo.count = 0
        product = productInfo
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
    // 改变单个商品的选中状态
    changeCartItemChecked(state, payload) {
      // 解构传过来的店铺id和商品id
      const { shopId, productId } = payload
      // 获取商品item
      const product = state.cartList[shopId][productId]
      // 把该商品的选中状态取反
      product.check = !product.check
    },
    // 清空购物车
    cleanCartProducts(state, payload) {
      // 解构传过来的店铺id
      const { shopId } = payload
      // 把储存的整个商品的信息置为空字典
      state.cartList[shopId] = {}
    },
    // 全选/全不选
    setCartItmesChecked(state, payload) {
      // 解构传过来的店铺id和全选的状态
      const { shopId, allCheckedValue } = payload
      // 获取店铺信息
      const products = state.cartList[shopId]
      // 保证该店铺有商品
      if (products) {
        // 如果此时已经全选了
        if (allCheckedValue) {
          // 就把该店铺的所有商品置为不选中
          for (const key in products) {
            const product = products[key]
            product.check = false
          }
        } else {
          // 如果此时已经有没有被选了
          // 就把该店铺的所有商品置为选中
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
