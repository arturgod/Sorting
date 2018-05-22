import CheckTime from './CheckTime.js';

var arrBI = [];
var arrSs = [];
const gaps = [5,3,1];

for(let i=0; i<10000; i++){
  const random = Math.floor(Math.random()*256);
  arrBI.push(random);
  arrSs.push(random);
}

function Shellsort(array){
  for (let g = 0; g < gaps.length; ++g) {
    for (let i = gaps[g]; i < array.length; ++i) {
      let temp = array[i];
      for (var j = i; j >= gaps[g] && array[j-gaps[g]] > temp; j -= gaps[g]) {
        array[j] = array[j - gaps[g]];
      }
      array[j] = temp;
    }
  }
}

function sortFn(a, b){
  return a-b;
};

function sortArray(array){
  return array.sort(sortFn);
};

const buildInLog = new CheckTime('build-in');
const shellSortLog = new CheckTime('shell sort');

buildInLog.start();
sortArray(arrBI);
buildInLog.check();

shellSortLog.start();
Shellsort(arrSs);
shellSortLog.check();