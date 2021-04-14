# position

## relative: 相对定位
> 相对自己位置偏移

## absolute: 绝对定位
> 相对于最近的非 static 祖先元素定位,没有就相对与body偏移
> 一般会把想要相对的元素加 position:relative

## fixed: 固定定位
> 相对于 viewport 视口仍处于同一位置。

## sticky: 粘性定位
> 粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。
```css
#one { position: sticky; top: 10px; }
```
> 在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。