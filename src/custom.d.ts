//record 类型声明
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date; //可以写类型或者类(构造函数),
}