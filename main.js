import BuildInSort from './buildInSort.js';
import TestArray from './arrayGenerator.js';
import CheckTime from './CheckTime.js';
import BubbleSort from './BubbleSort.js';
import SelectionSort from './SelectionSort.js';
import InsertionSort from './InsertionSort.js';

const testArray = new TestArray(100000);
const testArrayBD = new TestArray(100000);
const testArraySS = new TestArray(100000);
const testArrayIS = new TestArray(100000);

const buildInLog = new CheckTime('build-in');
const bubbleSortLog = new CheckTime('bubble sort');
const selectionSortLog = new CheckTime('selection sort');
const insertionSortLog = new CheckTime('insertion sort');

const buildInSortArray = new BuildInSort(testArray.getArr());
const bubbleSortArray = new BubbleSort(testArrayBD.getArr());
const selectionSortArray = new SelectionSort(testArraySS.getArr());
const insertionSortArray = new InsertionSort(testArrayIS.getArr());

buildInLog.start();
buildInSortArray.sort();
buildInLog.check();

// bubbleSortLog.start();
// bubbleSortArray.bubbleSort();
// bubbleSortLog.check();

selectionSortLog.start();
selectionSortArray.selectionSort();
selectionSortLog.check();

insertionSortLog.start();
insertionSortArray.insertionSort();
insertionSortLog.check();

console.log(buildInSortArray);
// console.log(bubbleSortArray);
console.log(selectionSortArray);
console.log(insertionSortArray);

// console.log(checkTime);
