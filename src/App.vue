<template>
  <div id="app">
    <router-view></router-view>
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
  color: @color-primary;
}
</style>
