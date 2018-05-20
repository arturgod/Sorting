import BuildInSort from './buildInSort.js';
import TestArray from './arrayGenerator.js';
import CheckTime from './CheckTime.js';
import BubbleSort from './BubbleSort.js';

const testArray = new TestArray(100);
const testArray2 = new TestArray(100);

const buildInLog = new CheckTime('build-in');
const bubbleSortLog = new CheckTime('bubble sort');

const buildInSortArray = new BuildInSort(testArray.getArr());
const bubbleSortArray = new BubbleSort(testArray2.getArr());

buildInLog.start();
buildInSortArray.sort();
buildInLog.check();

bubbleSortLog.start();
bubbleSortArray.bubbleSort();
bubbleSortLog.check();

console.log(buildInSortArray);
console.log(bubbleSortArray);

// console.log(checkTime);
