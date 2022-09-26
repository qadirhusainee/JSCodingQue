// IMP: Sorting Algorithms Visualization: https://www.toptal.com/developers/sorting-algorithms

// The largest number is bubbled up to the last position one-by-one

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (array) => {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};
bubbleSort(numbers);
console.log(numbers);

// In mySort, the smallest element is captured to the first position
const mySort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
};
// mySort(numbers);
// console.log(numbers);
