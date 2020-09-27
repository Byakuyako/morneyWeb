<template>
  <Layout>
    <div>
      <Icon name="right" class="iconLeft"/>
      <span>编辑标签</span>
    </div>
    <FormItem placeholder="请输入标签名" field-name="备注"/>
    <Button>删除标签</Button>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';
  @Component({
    components: {Button, FormItem}
  })
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0]; //filter 一定会会返回一个数组, 这里是Tag数组
      if(tag){
        // console.log(tag);
        return
      }else {
        this.$router.replace('/404')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .iconLeft {
    transform: rotate(180deg);
  }
</style>