<template>
  <div>
<!--    指定router组件显示的位置-->
    <router-view></router-view>

  </div>
</template>
d
<style lang="scss">
  @import "~@/assets/style/helper.scss";
  @import "~@/assets/style/reset.scss";

  body {
    line-height: 1.5;
    font-family: $font-hei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-size: 16px;
    background: #f5f5f5;
  }
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }

</style>
