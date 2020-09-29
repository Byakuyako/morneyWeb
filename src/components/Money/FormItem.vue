<template>
  <div>
<!--    {{value}}-->
    <label class="notes">
      <span class="name">{{this.fieldName}}</span>
<!--      <input type="text" :value="value" @input="onInput" placeholder="在这里输入备注">-->
      <input type="text" v-model="value" :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    value = '';

    @Prop({required: true}) fieldName!: string
    @Prop() placeholder?: string //placeholder 有可能不存在

    @Watch('value')
    onValueChanged(val: string){ //监听value变化, 取新值, 第二可选参数表示旧值
      this.$emit('update:value', val)
    }


    // onInput(event: KeyboardEvent) {
    //   const input = event.target as HTMLInputElement;
    //   this.value = input.value;
    // }
  }
</script>

<style lang="scss" scoped>
  .notes {
    background: #f5f5f5;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding-left: 16px;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>