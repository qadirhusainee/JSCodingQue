Array.prototype.customFilter = function (func) {
  var filtered = [];
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this) && filtered.push(this[i]);
  }
  return filtered;
};

[1, 2, 3].filter((num) => {
  return num > 2;
});
