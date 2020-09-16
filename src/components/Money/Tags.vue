<template>
  <div class="tags">
    <div class="list-wrapper">
      <ul class="current">
        <li v-for="tag in dataSource" :key="tag"
            :class="{selected: selectedTags.indexOf(tag) >= 0}"
            @click="toggle(tag)">{{tag}}
        </li>
      </ul>
    </div>

    <div class="new">
      <button @click="create">新增按钮</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop(Array) readonly dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      index >= 0 ? this.selectedTags.splice(index, 1) : this.selectedTags.push(tag);
    }

    create() {
      const name = window.prompt('请输入标签名');
      // console.log(name);
      if (name === '') {
        window.alert('标签名不能为空');
      } else if (this.dataSource){
        // this.dataSource ? this.dataSource.push(name!) : null//不能改外部数据
        this.$emit('update:dataSource', [...this.dataSource, name])
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    flex-grow: 1;
    font-size: 14px;
    padding: 16px;
    /*border: 1px solid green;*/
    display: flex;
    flex-direction: column;
    overflow: auto;

    > .list-wrapper {
      display: flex;
      flex-direction: column;
      overflow: auto;

      > .current {
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;

        > li {
          $tagBg: #d9d9d9;
          background-color: $tagBg;
          $h: 24px;
          height: $h;
          line-height: $h;
          border-radius: $h/2;
          padding: 0 16px;
          margin-right: 12px;
          margin-top: 4px;

          &.selected {
            background: darken($tagBg, 25%);
          }
        }
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 3px;
      }
    }
  }
</style>