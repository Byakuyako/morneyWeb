<template>
  <div>
    <ul class="types">
      <li :class="value ==='-' && 'selected' " @click="selectType('-')">支出</li>
      <li :class="value ==='+' && 'selected' " @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    @Prop() readonly value!: string
    // type = '-'; // '-' 表示支出, '+' 表示收入

    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown'); //不如不是这两个字符直接报错
      }
      this.$emit('update:value', type)

      // this.type = type; //初始值改用外界传入的, 不用自己定义

      // this.$emit('update:value', type) //即使type没变化也会触发事件, 弃用
    }

    // @Watch('type')
    // onTypeChanged(val: string){
    //   this.$emit('update:value', val)
    // }

  }


  //js 组件
  // export default {
  //   name: 'Types',
  //   props: ['xxx'],
  //   data: function () {
  //     return {
  //       type: '-' // '-' 表示支出, '+' 表示收入
  //     }
  //   },
  //   mounted() {
  //     console.log(this.xxx)
  //   },
  //   methods: {
  //     selectType(type) {
  //       if (type !== '-' && type !== '+'){
  //         throw new Error('type is unknown')
  //       }
  //       this.type = type
  //     }
  //   }
  // };
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
      width: 50%;
      line-height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>