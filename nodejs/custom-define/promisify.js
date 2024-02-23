export function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, values) => {
        if (err) {
          reject(err)
        } else if (values & values.length > 1) {
          let obj = {}
          for (let key in values) {
            obj[key] = values[key]
          }
          resolve(obj)
        } else {
          resolve(values[0])
        }
      })
    })
  }
}
