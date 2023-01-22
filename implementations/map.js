Array.prototype.customMap = function (func) {
  var mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(func(this[i], i, this));
  }
  return mapped;
};

[1, 2, 3].map((num) => {
  return num * 2;
});

// Custom function to calculate sum of elements of array
Array.prototype.sum = function (arr) {
  let add = 0;
  for (let i = 0; i < this.length; i++) {
    add += this[i];
  }
  return add;
};

console.log([1, 2, 3, 4].sum());
