import BuildInSort from './buildInSort.js';
import TestArray from './arrayGenerator.js';
import CheckTime from './CheckTime.js';
import BubbleSort from './BubbleSort.js';
import SelectionSort from './SelectionSort.js';
import InsertionSort from './InsertionSort.js';
import Shellsort from './Shellsort.js';

const testArray = new TestArray(1000000);
const testArrayBD = new TestArray(10000);
const testArraySS = new TestArray(10000);
const testArrayIS = new TestArray(1000000);
const testArraySs = new TestArray(1000000);

const buildInLog = new CheckTime('build-in');
const bubbleSortLog = new CheckTime('bubble sort');
const selectionSortLog = new CheckTime('selection sort');
const insertionSortLog = new CheckTime('insertion sort');
const shellSortLog = new CheckTime('shell sort');

const buildInSortArray = new BuildInSort(testArray.getArr());
const bubbleSortArray = new BubbleSort(testArrayBD.getArr());
const selectionSortArray = new SelectionSort(testArraySS.getArr());
const insertionSortArray = new InsertionSort(testArrayIS.getArr());
const shellSortArray = new Shellsort(testArraySs.getArr());

buildInLog.start();
buildInSortArray.sort();
buildInLog.check();

// bubbleSortLog.start();
// bubbleSortArray.bubbleSort();
// bubbleSortLog.check();

// selectionSortLog.start();
// selectionSortArray.selectionSort();
// selectionSortLog.check();

insertionSortLog.start();
insertionSortArray.insertionSort();
insertionSortLog.check();

shellSortLog.start();
shellSortArray.shellSort();
shellSortLog.check();

console.log(buildInSortArray);
// console.log(bubbleSortArray);
// console.log(selectionSortArray);
console.log(insertionSortArray);
console.log(shellSortArray);

// console.log(checkTime);
