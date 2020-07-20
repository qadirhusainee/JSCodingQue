var add = (function(count) {
  return function(a, b) {
    ++count;
    console.log("count", count);
    return a + b;
  };
})(0);
