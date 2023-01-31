
function flattenArray (inputArray) {
  if(!Array.isArray(inputArray)) return inputArray;

  let temp=[]
  for(let i = 0; i < inputArray.length ; i++) {
    if(!Array.isArray(inputArray[i])) {
      temp.push(inputArray[i]);
    } else {
      temp.push(...flattenArray(inputArray[i]))
    }
  }

  return temp
}

console.log(flattenArray([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flattenArray([[1],[2],[3]])) // [1,2,3]
console.log(flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]