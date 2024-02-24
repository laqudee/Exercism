import fs from 'node:fs'
import fs2 from 'node:fs/promises'

// fs2.readFile('./index.txt').then(result => {
//   console.log(result.toString());
// })

// fs.readFile('./index.txt', (err, data) => {
//   if (err) return err
//   console.log(data.toString());
// })

// let txt = fs.readFileSync('./index.txt')
// console.log(txt.toString());

// fs2.readFile('./index.txt', {
//   encoding: 'utf8',
//   flag: ''
// }).then(result => {
//   console.log(result.toString());
// })

// 可写流
const readStream = fs.createReadStream('./index.txt', {
  encoding: 'utf8'
})
readStream.on('data', (chunk) => {
  console.log(chunk);
})
readStream.on('end', () => {
  console.log('close');
})

fs.mkdir('path/test', { recursive: true }, (err) => { })

fs.rm('path', { recursive: true }, (err) => { })

// fs.renameSync('./index.txt', './index2.txt')

fs.watch('./index.txt', (event, filename) => {
  console.log(event, filename);
})

/**
 * Node.js 读取文件时使用libuv进行调度
 * setImmediate()是由V8进行调度
 * 文件读取完之后，libuv才会将fs的结果推进V8的队列
 */
