let arr = [1, 0, 21, 5, 2, 8, 4, 9];

const secondSmallestNo = () => {
  let smallestNo = Number.MAX_VALUE;
  let secondSmallestNo = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNo) {
      secondSmallestNo = smallestNo;
      smallestNo = arr[i];
    } else if (arr[i] < secondSmallestNo) secondSmallestNo = arr[i];
  }
  console.log(smallestNo);
  console.log(secondSmallestNo);
  return secondSmallestNo;
};

secondSmallestNo();
