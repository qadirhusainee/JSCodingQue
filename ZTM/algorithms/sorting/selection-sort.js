const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array) => {
  for (i = 0; i < array.length; i++) {
    let smallestNum = array[i];
    for (j = i + 1; j < array.length; j++) {
      if (smallestNum > array[j]) {
        smallestNum = array[j];
        // let temp = array[i];
        // array[i] = smallestNum;
        // array[j] = temp;
      }
    }
  }
};

selectionSort(numbers);
console.log(numbers);
