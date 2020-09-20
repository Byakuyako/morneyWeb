<template>
  <div>
    <Layout class-prefix="layout">
      {{record}}
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>

      <Types :value.sync="record.type"/>

      <Notes @update:value="onUpdateNotes"/>

      <!--      .sync很关键-->
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>

    </Layout>
  </div>
</template>

<script lang="ts">
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

  //record 类型声明
  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    recordList: Record[] = [];
    record: Record = {
      tags: [],
      notes: '',
      type: '-',
      amount: 0
    };

    onUpdateTags(value: string[]) {
      // console.log(value);
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      // console.log(value);
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      // console.log(value);
      this.record.amount = parseFloat(value);
    }

    saveRecord() {
      this.recordList.push(this.record);
      console.log(this.recordList);
    }

    @Watch('recordList')
    onRecordListChanged(){
      //转成字符串存到localStorage
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
      //前一个字符串得数据被覆盖了, 修改一下数组方法
    }
  }
</script>

<style lang="scss">
  .layout-content {
    /*border: 3px solid red;*/
    display: flex;
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>
</style>