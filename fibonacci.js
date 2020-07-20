const fionacci = n => {
  if (n < 2) {
    return n;
  } else {
    return fionacci(n - 1) + fionacci(n - 2);
  }
};
////////////////////////////////////////////////////////

var memoFibonacci = (function() {
  var memo = {};

  return n => {
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
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));
