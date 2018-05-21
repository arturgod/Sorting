import BuildInSort from './buildInSort.js';
import TestArray from './arrayGenerator.js';
import CheckTime from './CheckTime.js';
import BubbleSort from './BubbleSort.js';
import SelectionSort from './SelectionSort.js';

const testArray = new TestArray(10000000);
const testArrayBD = new TestArray(100000);
const testArraySS = new TestArray(10000000);

const buildInLog = new CheckTime('build-in');
const bubbleSortLog = new CheckTime('bubble sort');
const selectionSortLog = new CheckTime('selection sort');

const buildInSortArray = new BuildInSort(testArray.getArr());
const bubbleSortArray = new BubbleSort(testArrayBD.getArr());
const selectionSortArray = new SelectionSort(testArraySS.getArr());

buildInLog.start();
buildInSortArray.sort();
buildInLog.check();

// bubbleSortLog.start();
// bubbleSortArray.bubbleSort();
// bubbleSortLog.check();

selectionSortLog.start();
selectionSortArray.selectionSort();
selectionSortLog.check();

console.log(buildInSortArray);
// console.log(bubbleSortArray);
console.log(selectionSortArray);

// console.log(checkTime);
