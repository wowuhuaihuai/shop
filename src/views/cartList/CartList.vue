<template>
  CartList Page
  <Docker :currentIndex="1" />
</template>

<script>
import Docker from '../../components/Docker'

export default {
  name: 'CartList',
  components: { Docker }
}
</script>

<style lang="scss" scoped></style>
