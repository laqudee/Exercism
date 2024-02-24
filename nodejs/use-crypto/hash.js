import { createHash } from 'node:crypto'

let text = 'ladudee'

const hash = createHash('md5')

hash.update(text)
console.log(hash.digest('hex'))

