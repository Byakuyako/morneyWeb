<template>
  <div>
    <Layout>
      <ol class="tags">
        <li v-for="tag in tags" :key="tag">
          <span>{tag}</span>
          <Icon name="right"/>
        </li>
      </ol>
      <div class="newTag-wrapper">
        <button class="newTag" @click="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';

  @Component
  export default class Labels extends Vue {
    tags = tagListModel.fetch();

    createTag() {
      const name = window.prompt('请输入标签名')
      console.log(name);
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
    font-size: 16px;
    padding-left: 16px;

    > li {
      min-height: 44px;
      display: flex;
      /*flex-direction: column;*/
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
    }

    svg {
      color: #666;
      margin-right: 16px;
      height: 18px;
      width: 18px;
    }
  }

  .newTag {
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