<template>
  <nav>
    <router-link to="/labels" class="item">
      <Icon name="labels"></Icon>
      标签
    </router-link>
    <router-link to="/money" class="item">
      <Icon name="money"></Icon>
      记账
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="statistics"></Icon>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
  import x from '@/assets/icons/labels.svg'
  import y from '@/assets/icons/money.svg'
  import z from '@/assets/icons/statistics.svg'

  console.log(x);
  console.log(y);
  console.log(z);

  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  nav {
    /*border: 1px solid #42b983;*/
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    > .item {
      padding: 2px 0;
      display: flex;
      width: 33.33333%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
      .icon {
        width: 32px;
        height: 32px;
      }
  }

</style>