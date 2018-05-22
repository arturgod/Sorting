export default class Shellsort {
  
  constructor(arr){
    this.arr = arr;
    this.gaps = [5,3,1];
  };
  
  shellSort() {
    
    //console.log('ss', this.arr);
    for (let g = 0; g < this.gaps.length; ++g) {
      for (let i = this.gaps[g]; i < this.arr.length; ++i) {
        let temp = this.arr[i];
        for (var j = i; j >= this.gaps[g] && this.arr[j-this.gaps[g]] > temp; j -= this.gaps[g]) {
          this.arr[j] = this.arr[j - this.gaps[g]];
        }
        this.arr[j] = temp;
      }
    }
    //console.log('bs-end', this.arr);
  }
}