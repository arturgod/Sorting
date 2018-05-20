export default class BuildInSort {
  
  constructor(arr){
    this.arr = arr;
  };

  sortFn(a, b){
    return a-b;
  };

  sort(){
    return this.arr.sort(this.sortFn);
  };
}