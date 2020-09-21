<template>
  <div>
    <Layout class-prefix="layout">
      {{recordList}}
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

  // const version = window.localStorage.getItem('version') || '0';
  const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '')

  // if (version === '0.0.1'){
  //   //数据库升级, 数据迁移, 暂不使用
  //   recordList.forEach(record => {
  //     record.createdAt = new Date(2020, 1, 1) //给前面的时间数据一个初始值, 保证数据结构
  //   })
  //   window.localStorage.setItem('recordList', JSON.stringify(recordList))
  // }
  //
  // window.localStorage.setItem('version', '0.0.2');

  //record 类型声明
  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date; //可以写类型或者类(构造函数),
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '');
    // recordList: Record[] = [];
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
      const record2: Record = JSON.parse(JSON.stringify(this.record)); //深拷贝
      record2.createdAt = new Date();
      this.recordList.push(record2);
      console.log(this.recordList);
    }

    @Watch('recordList')
    onRecordListChanged() {
      //转成字符串存到localStorage
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
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