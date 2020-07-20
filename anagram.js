// *************************** Approach 1 ********************************** //
// The runtime complexity of a for loop is linear i.e O(n).
// In this case, there are 3 consecutive forloops which are not nested.
// Ignoring constants and other factors, the time complexity is approximately linear i.e. O(n).

function anagrams(stringA, stringB) {
  /*First, we remove any non-alphabet character using regex and convert
  convert the strings to lowercase. */
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase()

  //Get the character map of both strings
  const charMapA = getCharMap(stringA)
  const charMapB = getCharMap(stringB)

  /* Next, we loop through each character in the charMapA, 
  and check if it exists in charMapB and has the same value as
  in charMapA. If it does not, return false */
  for (let char in charMapA) {
      if (charMapA[char] !== charMapB[char]) {
          return false
      }
  }

  return true
}

function getCharMap(string) {
  // We define an empty object that will hold the key - value pairs.
  let charMap = {}

  /*We loop through each character in the string. if the character 
  already exists in the map, increase the value, otherwise add it 
  to the map with a value of 1 */
  for (let char of string) {
      charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}


// *************************** Approach 2 ********************************** //


// Array.sort uses merge sort so its time complexity is O(nlogn)

function anagrams(stringA, stringB) {
  /*First, we remove any non-alphabet character using regex and convert       
  convert the strings to lowercase. */
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

  return sortString(stringA) === sortString(stringB)
}

/*This function sorts the strings*/ 
function sortString(string) {
  return string.split('').sort().join('');
}