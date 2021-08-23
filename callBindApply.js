Function.prototype.myBind = function (currentContext = {}, ...arg) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  currentContext.fn = this;
  return function () {
    return currentContext.fn(...arg);
  };
};

Function.prototype.myApply = function (currentContext = {}, arg = []) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not callable");
  }
  if (!Array.isArray(arg)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  currentContext.fn = this;
  currentContext.fn(...arg);
};

Function.prototype.myCall = function (currentContext = {}, ...arg) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not callable");
  }
  currentContext.fn = this;
  currentContext.fn(...arg);
};
