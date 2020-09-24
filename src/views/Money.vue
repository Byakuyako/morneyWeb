<template>
  <div>
    <Layout class-prefix="layout">
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
  import model from '@/models/tagListModel';
  import tagListModel from '@/models/tagListModel';
  // import model from '@/model';
  // const model = require('@/model.js').default;
  // console.log(model);

  // const version = window.localStorage.getItem('version') || '0';

  const recordList = model.fetch();
  const tagList = tagListModel.fetch()



  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = tagList;
    // recordList: Record[] = model.fetch()
    recordList: RecordItem[] = recordList;
    record: RecordItem = {
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
      const record2 = model.clone(this.record);
      record2.createdAt = new Date();
      this.recordList.push(record2);
      console.log(this.recordList);
    }

    @Watch('recordList')
    onRecordListChanged() {
      //转成字符串存到localStorage
      // window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
      model.save(this.recordList);
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