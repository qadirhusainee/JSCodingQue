let arr = [0, 100, 5, 2, 8, 4, 9, 23, 53, 0];

function secondLargest(a) {
  var big = 0;
  var secondLargest = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > big) {
      secondLargest = big;
      big = a[i];
    } else if (a[i] > secondLargest) {
      secondLargest = a[i];
    }
  }
  console.log(secondLargest)
  console.log(big)
  return secondLargest;
}

secondLargest(arr);