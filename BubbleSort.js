export default class BubbleSort {
  
  constructor(arr){
    this.arr = arr;
    
  };

  swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
  bubbleSort() {
    //console.log('bs', this.arr);
    for (let outer = this.arr.length; outer >= 2; --outer) {
      //console.log('for1');
      for (let inner = 0; inner <= outer-1; ++inner) {
        if (this.arr[inner] > this.arr[inner+1]) {
          //console.log('pp');
          this.swap(this.arr, inner, inner+1);
        }
      }
    }
    //console.log('bs-end', this.arr);
  }
}