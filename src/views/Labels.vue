<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="tag" :to="`/labels/edit/${tag.id}`"
                     v-for="(tag, index) in tags" :key="index">
          <span>{{tag.name}}</span>
          <Icon name="right"/>
        </router-link>
      </div>
      <div class="newTag-wrapper">
        <Button class="newTag" @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import Button from '@/components/Button.vue';

  tagListModel.fetch(); //先加载一次数据
  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    tags = tagListModel.data;

    createTag() {
      const name = window.prompt('请输入标签名');
      if (name) {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
          alert('这个标签已经存在');
        } else if (message === 'success') {
          alert('标签添加成功');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
    font-size: 16px;
    padding-left: 16px;

    > .tag {
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