Array.prototype.customReduce = function(f, result) {
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = f(result, this[i], i, this);
  }
  return result;
};
// Async reduce
Array.prototype.asyncReduce = async function(f, result) {
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = await f(result, this[i], i, this);
  }
  return result;
};
