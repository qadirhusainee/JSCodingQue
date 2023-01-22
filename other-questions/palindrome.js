function isTextPalindrome(text) {
  if (text === undefined) {
    return false;
  }
  var left = 0;
  var right = text.length - 1;
  while (left < right) {
    if (text[left++] !== text[right--]) {
      return false;
    }
  }
  return true;
}

function isPhrasePalindrome(text) {
  var chars = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return isTextPalindrome(chars);
}

//////////////////////////**End**////////////////////////////////

const isPalindrome = () => {
  var chars = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return chars.split("").reverse().join("") === chars;
};

//////////////////////////**End**////////////////////////////////
// Kauser's code

let str = "nitin";

function palindrome(str) {
  let len = str.length % 2 === 0 ? str.length / 2 : (str.length + 1) / 2;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

console.log(palindrome(str));
