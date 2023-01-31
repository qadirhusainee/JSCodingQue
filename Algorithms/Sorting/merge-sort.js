const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/**
 * 
 * Merge Sort
 * Apprach:
 * 1. Logic to merge 2 sorted arrays
 * 2. Reccursive approach to divide array into small arrays
 */
const mergeSort = (arr) => {
  if(arr.length === 1) return arr;
  const midPoint = Math.floor(arr.length/2)
  const left = mergeSort(arr.slice(0, midPoint))
  const right = mergeSort(arr.slice(midPoint))

  return merge(left, right)
}

const merge = (a, b) => {
  let i=0;
  let j=0;
  let mergedArray = [];
  while(i <= a.length - 1 && j <= b.length - 1) {
    if(a[i] < b[j]) {
      mergedArray= [...mergedArray,a[i]]
      i++;
    } else {
      mergedArray= [...mergedArray,b[j]]
      j++
    }
  } 

  while(i <= a.length-1) {
    mergedArray.push(a[i])
    i++;
  }

  while(j <= b.length-1) {
    mergedArray.push(b[j])
    j++;
  }
  return mergedArray;
}
