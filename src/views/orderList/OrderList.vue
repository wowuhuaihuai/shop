<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <template v-for="(order, index) in list" :key="index">
        <div class="order">
          <div class="order__title">
            {{ order.shopName }}
            <span class="order__status">{{ order.isCanceled ? '已取消' : '正常' }}</span>
          </div>
          <div class="order__content">
            <div class="order__content__imgs">
              <template v-for="(product, productIndx) in order.products" :key="productIndx">
                <img :src="product.product.img" v-if="productIndx <= 3" alt="" class="order__content__img" />
              </template>
            </div>
            <div class="order__info">
              <div class="order__info__price">￥{{ order.totalPrice }}</div>
              <div class="order__info__count">共{{ order.totalNumber }}件</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <Docker :currentIndex="2" />
</template>

<script>
import Docker from '../../components/Docker'
import { get } from '../../utils/request'
import { reactive, toRefs } from 'vue'

// 处理订单逻辑
const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  // 发送请求
  const getOrderList = async () => {
    const result = await get('api/order')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data || []
      orderList.forEach(order => {
        const products = order?.products || []
        let totalPrice = 0
        let totalNumber = 0
        products.forEach(item => {
          totalPrice += item.orderSales * item.product.price || 0
          totalNumber += item.orderSales || 0
        })
        order.totalPrice = totalPrice
        order.totalNumber = totalNumber
      })
      data.list = result.data
      console.log('result.data', result.data)
    }
  }

  getOrderList()
  const { list } = toRefs(data)
  return list
}

export default {
  name: 'OrderList',
  components: { Docker },
  setup() {
    const list = useOrderListEffect()
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #eee;
}

.title {
  line-height: 0.22rem;
  font-size: 0.16rem;
  color: $content-fontColor;
  text-align: center;
  background: $bgColor;
  padding: 0.31rem 0 0.11rem 0;
}
.orders {
  position: absolute;
  top: 0.64rem;
  bottom: 0.48rem;
  width: 100%;
  overflow-y: scroll;
}
.order {
  position: relative;
  background: $bgColor;
  border-radius: 4px;
  margin: 0.16rem 0.18rem;
  &__title {
    padding: 0.16rem;
    font-size: 0.16rem;
    color: $content-fontColor;
  }
  &__status {
    position: absolute;
    right: 0.16rem;
    font-size: 0.14rem;
    color: $light-fontColor;
    text-align: right;
  }
  &__content {
    padding-bottom: 0.16rem;

    &__imgs {
      margin-left: 0.16rem;
    }
    &__img {
      width: 0.4rem;
      height: 0.4rem;
      margin-right: 0.12rem;
    }
  }
  &__info {
    position: absolute;
    right: 0.16rem;
    top: 0.5rem;
    &__price {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
      text-align: right;
    }
    &__count {
      margin-top: 0.04rem;
      font-size: 0.12rem;
      color: $content-fontColor;
      text-align: right;
      line-height: 0.14rem;
    }
  }
}
</style>
