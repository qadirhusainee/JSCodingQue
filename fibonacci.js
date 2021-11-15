const fibonacci = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
////////////////////////////////////////////////////////

var memoFibonacci = (function () {
  var memo = {};

  return (n) => {
    var value;
    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) value = n;
      else value = f(n - 1) + f(n - 2);
      memo[n] = value;
    }

    return value;
  };
})();

///////////////////////////////////////
// Series
var fibonacci_series = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_series(8));

// FIND THE ENTIRE SERIES AS AN ARRAY

// Kauser's logic

function fibonacci(n) {
  const arr = [];
  if (n > 1) {
    arr.push(1);
    arr.push(1);
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  } else if (n === 1) {
    arr.push(1);
  } else {
    return "fibonacci series does not exist for zero and negative numbers";
  }
  return arr;
}

console.log(fibonacci(3));
