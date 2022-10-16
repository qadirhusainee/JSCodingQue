const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexHoldingMinValue = i;

    // Inner Loop
    for (let j = i + 1; j < array.length; j++) {
      if (array[indexHoldingMinValue] > array[j]) {
        indexHoldingMinValue = j;
      }
    }

    // Swapping
    let temp = array[i];
    array[i] = array[indexHoldingMinValue];
    array[indexHoldingMinValue] = temp;
  }
};

selectionSort(numbers);
console.log(numbers);

// In Bubble sort, we swap at the inner loop --> n squared times
// In Selection sort, we swap at the outer loop --> n times
// Still both of them have a Time Complexity = O(n squared), Space Complexity of O(1)
