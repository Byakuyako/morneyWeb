const localStorageKeyName = 'tagList';

type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => 'duplicated' | 'success'; //联合类型, 类似枚举, 在这个例子下是字符串的子类型
  save: () => void;
}

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(name: string) {
    if (this.data.indexOf(name) >= 0) {
      return 'duplicated';
    }
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;