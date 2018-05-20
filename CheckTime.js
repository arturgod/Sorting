// const checkTime = function(){
//   let timeStart;
//   let timeEnd;
//   const start = function(){
//     return Date.now();
//   }
//   const end = function(){
//     return Date.now();
//     console.log('timeEnd', timeEnd)
//   }

//   const check = function(start, end){
//     console.log(start, end, end - start)
//     return end - start;
//   }

//   return {
//     start,
//     end,
//     check: function(){},
//     countTime
//   }

// }

export default class CheckTime {
  
  constructor(name){
    this.name = name;
    this.start;
    this.stop;
  }

  start(){
    this.start = Date.now();
  };

  check(){
    const stop = Date.now();
    const delta = stop - this.start;
    console.log(`czas ${this.name} - ${delta}ms`);
  }
  
};