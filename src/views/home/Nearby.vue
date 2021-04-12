<!--
 * @Author       : your name
 * @Date         : 2021-03-09 16:26:14
 * @LastEditTime : 2021-04-09 10:45:14
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : /jingdong/src/views/home/Nearby.vue
-->
<template>
  <!-- 附近店铺组件（主要是店铺的列表） -->
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link v-for="item in nearbyList" :key="item._id" :to="`/shop/${item._id}`" >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
// 附近店铺的逻辑
const useNearbyListEffect = () => {
  // 定义一个响应数据 []
  const nearbyList = ref([])
  // get请求数据
  const getNearbyList = async () => {
    const resulte = await get('/api/shop/hot-list')
    if (resulte?.errno === 0 && resulte?.data?.length) {
      // 请求成功则把 data 赋值给 nearbyList
      nearbyList.value = resulte.data
    }
  }
  // 返回 nearbyList 和 请求数据的方法
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup() {
    // 引入 nearbyList 和 请求数据的方法
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    // 发送请求
    getNearbyList()
    // 把请求后的数据返回给模板
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal; // 不加粗
    color: $content-fontColor;
  }
}
a{
  text-decoration:none;
}
</style>
