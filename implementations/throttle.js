const throttlePoly = (fn, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date()

    if(now - prev > delay ) {
      prev = now;
      return fn(...args);
    } else {
      return
    }
  }
}

// Below Code is for testing

const  timer = (i) => {
  console.log(i)
} 

const throttleTimer = throttle(timer, 500)

const run = () => {
  let count = 0;
  let intervalId  = setInterval(() => {
    throttleTimer(++count)
  }, 100)
  setTimeout(() => {
    clearInterval(intervalId)
  }, 5000)
}

console.log(run())