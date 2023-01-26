function removeZeros(array) {
  let i = 0;
  for (let j = 0; j < array.length; ++j) {
    if (i < j) array[i] = array[j];
    if (array[j] != 0) ++i;
  }
  return array.fill(0, i);
}

removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]);
