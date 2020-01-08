<template>
  <div id="app">
    <!-- 根路由出口 -->
    <router-view></router-view>

    <div class="box">你好</div>
    <van-icon name="like" />

    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
//注意：在style 中使用 @ 别名，需要在前面加~
// @ 之后必须有 /
@import url("~@/styles/variables.less");

.box {
  color: @color-primary
}
</style>
