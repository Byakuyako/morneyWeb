<template>
  <button class="button" @click="$emit('click', $event)"><slot/></button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }
</script>

<style lang="scss" scoped>
  .button {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;

    &-wrapper {
      /*表示当前元素的父元素, 即里面的选择器不一定是子元素*/
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }
</style>