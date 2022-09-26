/*
Every recursive function needs to have 
1. A base case or a stop point
2. A recursive call 
IMP: Both Base case and Recursive call need to return some value! */

let counter = 0;
function inception() {
  console.log(counter);

  // BASE CASE
  if (counter > 3) {
    return "done!";
  }
  counter++;

  // RECURSIVE CALL
  return inception();
  // inception(); --> This is incorrect, return is missing
}
console.log(inception());
