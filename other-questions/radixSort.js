const largestNum = (arr) => {
  let largest = "0";

  arr.forEach((num) => {
    const strNum = String(num);

    if (strNum.length > largest.length) largest = strNum;
  });

  return largest.length;
};

const getNum = (num, index) => {
  const strNum = String(num);
  let end = strNum.length - 1;
  const foundNum = strNum[end - index];

  if (foundNum === undefined) return 0;
  else return foundNum;
};

const radixSort = (arr) => {
  let maxLength = largestNum(arr);

  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let num = getNum(arr[j], i);

      if (num !== undefined) buckets[num].push(arr[j]);
    }
    arr = buckets.flat();
  }
  return arr;
};
