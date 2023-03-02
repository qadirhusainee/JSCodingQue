
function promiseAllPolyfill (promiseList) {
  return new Promise((resolve, reject) => {
    let result=[];
    promiseList.forEach((promise, index) => {
      promise.then((resp) => {
        result[index] = resp;
        if(index === promiseList.length -1 ) {
          resolve(result)
        }
      }).catch((err) => {
        reject(err)
      })
    });
  })
}

// Below Code is for testing
const api = (time, shouldResolve = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if(shouldResolve) {
        resolve(time);
      } else {
        reject(`Rejected ${time}`)
      }
    }, time)
  }) 
}


const usePolyfill = () => {
  promiseAllPolyfill([api(2000), api(3000), api(100, false)]).then(data => {
    console.log('Promise Resolved', data)
  }).catch((err) => {
    console.log('Promise Rejected', err)
  })
}

console.log(usePolyfill())
