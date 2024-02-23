export function callbackify(fn) {
  return (...args) => {
    let callback = args.pop()
    fn(...args).then((res) => {
      callback(null, res)
    }).catch(err => {
      callback(err)
    })
  }
}
