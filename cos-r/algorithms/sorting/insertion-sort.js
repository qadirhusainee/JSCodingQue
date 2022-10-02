const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// FIXME:
const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[i - 1]) {
        if (array[i] < array[j]) {
          //   let temp = array[i];
          //   array[i] = array[j];
          //   array[j] = temp;
        }
      }
      debugger;
    }
  }
};

insertionSort(numbers);
console.log(numbers);

// Insertion sort is useful for times when we know the list is almost sorted
