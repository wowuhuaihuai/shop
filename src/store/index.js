import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  mutations: {
    // 商品数量 +
    addItemToCart(state, payload) {
      // 提取传过来的商铺id,商品信息
      const { shopId, productInfo } = payload
      // 提取商品id
      const productId = productInfo._id
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
      // 数量 +1
      product.count += 1
      // 把处理后的商品详情 product 赋值给 shopInfo[productId] 
      shopInfo[productId] = product
      // 再把店铺详情 shopInfo 赋值给 state.cartList[shopId]
      state.cartList[shopId] = shopInfo
    },
    // 商品数量 -
    reduceItemToCart(state, payload) {
      // 提取商铺id,商品id
      const { shopId, productId } = payload
      // 提取count，没有就赋值给0
      const count = state.cartList?.[shopId]?.[productId]?.count || 0
      // 商品 -1
      if (count > 0) {
        state.cartList[shopId][productId].count = count - 1
      }
    }
  },
  actions: {},
  modules: {}
})
