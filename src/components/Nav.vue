<template>
  <div class="nav">
    <router-link to="/labels">
      <Icon name="labels"></Icon>
      标签
    </router-link>
    |
    <router-link to="/money">
      <Icon name="money"></Icon>
      记账
    </router-link>
    |
    <router-link to="/statistics">
      <Icon name="statistics"></Icon>
      统计
    </router-link>
  </div>
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
  .nav {
    border: 1px solid #42b983;
  }
</style>