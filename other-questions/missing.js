const findMissing = arr => {
  var arrayLength = arr.length;
  var missing = [];

  for (var i = 1; i < arrayLength; i++) {
    if (intArray.indexOf(i) < 0) {
      missing.push(i);
    }
  }
};

findMissing([9, 1, 5, 8, 7, 4, 3, 0, 10, 13, 15, 19, 12, 16, 18]);
