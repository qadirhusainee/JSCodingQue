const debouncePoly = (fn, delay) => {
  let timeoutId;
  function debounced(...args) {
    let context = this
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      return fn.apply(context, args);
    }, delay);
  };

  function cancel () {
      clearTimeout(timeoutId)
  }
  debounced.cancel = cancel
  return debounced
};


const dummy = (i) => {
  console.log('dummy', i)
}

const dummyDebounce = debouncePoly(dummy, 500)


dummyDebounce(1)
dummyDebounce(2)
dummyDebounce(3)
dummyDebounce(4)
dummyDebounce.cancel()