const getAllSubstring = string => {
  let allSubStrings = [];
  const length = string.length;

  for (let subLength = 1; subLength < length; subLength++) {
    for (let index = 0; index < length; index++) {
      if (length - subLength >= index) {
        const subString = string.substr(index, subLength);
        allSubStrings.push(subString);
      }
    }
  }
};
