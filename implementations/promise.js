

// ********* Not Complete *******

function MyPromise (executor) {
  let onResolve;
  let onReject;
  let state = 'pending';
  let isCallbackCalled = false;
  let value;
  let error;
  
  function resolve (val) {
    state = 'resolved';
    value = val;
    onResolve(val);

  }

  function reject (err) {
    state = 'rejected';
    error = err;
    onReject(err);
  }

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if(state ==='resolved' && !isCallbackCalled) {
      
    }
    return this;
  }

  this.catch = function(catchHandler) {
    onReject = catchHandler;
    return this;
  }

  executor(resolve, reject);
}
