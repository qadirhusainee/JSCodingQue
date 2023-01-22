// Kauser's code

// CHECK IF THE SUBSTRING IS A PART OF THE ORIGINAL STRING (WITHOUT USING BUILT-IN METHODS)
let str = "Support the development";
let subStr = "development";

function checkSubStr(str, subStr) {
  let flag;
  for (let i = 0; i < str.length - subStr.length + 1; i++) {
    flag = true;
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) flag = false;
    }
    if (flag === true) return flag;
  }
  return flag;
}

console.log(checkSubStr(str, subStr));
