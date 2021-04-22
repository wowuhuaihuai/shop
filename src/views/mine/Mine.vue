<template>
  Mine Page
  <Docker :currentIndex="3" />
</template>

<script>
import Docker from '../../components/Docker'

export default {
  name: 'OrderList',
  components: { Docker }
}
</script>

<style lang="scss" scoped></style>
