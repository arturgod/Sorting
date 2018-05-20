// function TestArray (elements {

//   for(let i=0; i<100000; i++){
//     const random = Math.floor(Math.random()*256);
//     testArray.push(random);
//   }

//   export default testArray;
// };

export default class TestArray {
  constructor(size){
    this.arr = [];
    this.fill(size);
  }

  fill(size){
    for(let i=0; i<size; i++){
      const random = Math.floor(Math.random()*256);
      this.arr.push(random);
    }
  }

  getArr(){
    return this.arr;
  }
}