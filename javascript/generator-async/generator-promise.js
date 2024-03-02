const addAsync = (x, y) => {
  console.log('timeout started');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('timeout finished');
      resolve(x + y)
    }, 500)
  })
}

const throwAsync = (x, y) => {
  console.log('timeout started');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('timeout finished');
      reject()
    }, 500)
  })
}

const asyncRunner = (generator) => {
  console.log('generator initialization');
  const it = generator()
  let iterationCounter = 0;
  let errorFlag = false;

  (function iterator(value) {
    let yielded;

    if (errorFlag) {
      yielded = it.throw(value)
      errorFlag = false
    } else {
      yielded = it.next(value)
    }

    console.log('iteration start', iterationCounter);
    iterationCounter++
    const startTime = Date.now()

    if (yielded.done) {
      console.log('generator ended');
      return
    }
    const promise = Promise.resolve(yielded.value)
    promise.then(value => {
      const elapsedTime = Date.now() - startTime
      console.log('async completed!', elapsedTime + 'ms');
      iterator(value)
    }).catch(err => {
      const elapsedTime = Date.now() - startTime
      console.log('async rejected', elapsedTime + 'ms');
      it.throw(err)
    })
    console.log('runner: attached handlers to promise')
  })(undefined)
}

function* main() {
  try {
    const result = yield addAsync(2, 3)
    console.log('main', result);
    const result2 = yield addAsync(10, -1)
    console.log('main2', result2);
  } catch (err) {
    console.log('main error', err);
  }
}

asyncRunner(main)

/**
 * generator initialization
timeout started
runner: attached then to promise
timeout finished
async completed! 501ms
main 5
 */

/**
 * 1. first call main func generator
 * 2. runner initializes our generator and calls it.next()
 * 3. main executes until the yield
 * 
 */
