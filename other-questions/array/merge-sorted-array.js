// Source: ZTM Udemy Course

const mergeSortedArrays = (arr1, arr2) => {
  // check input
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  // initialize
  const mergedArr = [];
  let array1ItemIndex = 0;
  let array2ItemIndex = 0;
  let array1Item = arr1[array1ItemIndex];
  let array2Item = arr2[array2ItemIndex];

  // logic
  while (array1Item || array2Item) {
    if (array1Item < array2Item || !array2Item) {
      mergedArr.push(array1Item);
      array1ItemIndex++;
      array1Item = arr1[array1ItemIndex];
    } else {
      mergedArr.push(array2Item);
      array2ItemIndex++;
      array2Item = arr2[array2ItemIndex];
    }
  }

  return mergedArr;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// OUTPUT: [0, 3, 4, 4, 6, 30, 31]
