export default class SelectionSort {
  
  constructor(arr){
    this.arr = arr;
    
  };

  swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
  selectionSort() {
    let min;
    
    //console.log('ss', this.arr);
    for (let outer = 0; outer <= this.arr.length-2; ++outer) {
      min = outer;
      for (let inner = outer + 1; inner <= this.arr.length-1; ++inner) {
        if (this.arr[inner] < this.arr[min]) {
          min = inner;
        }
      }
      this.swap(this.arr, outer, min);
    }
    //console.log('bs-end', this.arr);
  }
}