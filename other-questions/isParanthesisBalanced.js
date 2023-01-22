// WHAT WE’LL CODE
// Scan string (array) left to right
// If element is an opening bracket — push onto stack
// If element is a closing bracket — see if it matches last item in stack. If it does, pop off that last item & move onto the next element.
// If at the end of the function the stack is empty return true!

// PSEUDO CODE
// If value of input string is null return false
// - Convert the string to array
// - Iterate through the entire array
// — Use isParenthesis() to see if current element is a parenthesis
// — — If it is, then use isOpenParenthesis() , if it returns true, push the open parenthesis character onto the stack
// — — if isOpenParenthesis() returns false, check if top of stack. If it does not match the current element using the function matches(top, closedParenthesis) then we return false.
// — — move onto next element
// — At end of our function executing check the stack to see if it is empty, if it is we know we’re balanced and can return True! Otherwise False as we’re not balanced

let isParenthesisMatching = str => {
  let stack = [];

  let open = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  let closed = ["}", "]", ")"];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (open[char]) {
      stack.push(char);
    } else if (closed.includes(char)) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
};
