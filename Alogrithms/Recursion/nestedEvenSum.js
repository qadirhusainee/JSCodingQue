function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  if (Number.isInteger(obj) && obj % 2 === 0) return obj;
  let sum = 0;
  if(typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    for(key in obj) {
      sum = sum + nestedEvenSum(obj[key])
    }
  } else  {
    return sum;
  }
 return sum
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10