const asyncWrapper = (fn, ...args) => {
  const startTime = Date.now()
  fn(...args, (result) => {
    const elapsedTime = Date.now() - startTime
    console.log('async completed!', elapsedTime + 'ms');
    iterator.next(result)
  })
  console.log('wrapper end');
}

const addAsync = (x, y, callback) => {
  setTimeout(() => {
    console.log('timeout finished');
    callback(x + y)
  }, 500)
  console.log('timeout started');
}

function* main() {
  console.log('generator initialization');
  const result = yield asyncWrapper(addAsync, 2, 3)
  console.log('main', result);
}

const iterator = main();
iterator.next();

/**
 * generator initialization
 * timeout started
 * wrapped end
 * timeout finished
 * async completed! 503ms
 * main 5
 */

