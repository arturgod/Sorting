export default class InsertionSort {
  
  constructor(arr){
    this.arr = arr;
    
  };

  swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
  insertionSort() {
    
    //console.log('ss', this.arr);
    let temp;
    let inner;
    for (var outer = 1; outer <= this.arr.length-1; ++outer) {
      temp = this.arr[outer];
      inner = outer;
      while (inner > 0 && (this.arr[inner-1] >= temp)) {
        this.arr[inner] = this.arr[inner-1];
        --inner;
      }
      this.arr[inner] = temp;
    }
    //console.log('bs-end', this.arr);
  }
}