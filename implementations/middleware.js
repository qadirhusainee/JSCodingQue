var Middleware = function () {
  var middlewares = [];

  this.use = function (fn) {
    if (typeof fn !== "function") {
      throw new Error("Middleware must be a function");
    }
    middlewares.push(fn);
  };

  this.go = function (done) {
    var index = -1;
    var self = this;

    function next(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      var fn = middlewares[i] || done;

      if (!fn) {
        return;
      }

      fn.call(self, next.bind(null, i + 1));
    }
    next(0);
  };
};

// Usage
var middleware = new Middleware();

middleware.use(function (next) {
  var self = this;
  setTimeout(function () {
    self.hook1Executed = true;
    next();
  }, 10);
});

middleware.use(function (next) {
  var self = this;
  setTimeout(function () {
    self.hook2Executed = true;
    next();
  }, 10);
});

var start = new Date();
middleware.go(function () {
  console.log(this.hook1Executed); // true
  console.log(this.hook2Executed); // true
  console.log(new Date() - start); // around 20
});
