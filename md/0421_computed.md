# computed
```js
  // 商品的店名
  const shopName = computed(() => {
    return cartList?.[shopId]?.shopName || ''
  })

```
## 为什么不直接用 cartList?.[shopId]?.shopName 

> 因为可能存在空的时候，shopName = "",但是,"" 不是响应式的数据类型。就有问题。
> 用computed计算属性，表示shopName会跟随 cartList?.[shopId]?.shopName 的变化而变化