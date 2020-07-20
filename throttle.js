const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = new Date();
    if (now - last > delay) {
      last = now;
      return fn(...args);
    } else {
      return;
    }
  };
};
