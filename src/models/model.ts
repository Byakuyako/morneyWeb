const localStorageKeyName = 'recordList';
const model = {
  clone(data: RecordItem[] | RecordItem) {  //可以传一个数组, 也可以就传一项
    return JSON.parse(JSON.stringify(data))  //深拷贝
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default model;