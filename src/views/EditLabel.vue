<template>
  <Layout>
    <div>
      <Icon name="right" class="iconLeft"/>
      <span>编辑标签</span>
    </div>
    <Notes placeholder="请输入标签名" field-name="备注"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import Notes from '@/components/Money/Notes.vue';
  @Component({
    components: {Notes}
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