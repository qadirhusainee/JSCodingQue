// #MEDIUM

// Find all the possible sub-sequences for a given sequence (string)
// sub-sequence --> must be in the same sequence as they appear in the given sequence
// e.g. "abc" --> ["a", "ab", "ac", "abc", "b", "bc", "c", ""]

const getSubsequence = (str) => {
  if (str === "") {
    return [""];
  }

  const first = str.charAt(0); // "a"
  const rest = getSubsequence(str.substring(1)); // ["bc", "c", "b", ""]

  let result = [];
  rest.forEach((item) => {
    result.push(first + item); // ["abc", "ac", "ab", "a"]
    result.push(item); // ["bc", "c", "b", ""]
  });

  return result;
};

console.log(getSubsequence("abc"));
