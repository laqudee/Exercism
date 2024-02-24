import fs from 'node:fs'

// fs.writeFileSync('./index.txt', '写入一些内容\n马嵬之变', {
//   encoding: 'utf8',
//   flag: 'a'
// })

// fs.appendFileSync('./index.txt', '\n写入一些内2容\n马2嵬之变', {
//   encoding: 'utf8'
// })

let verse = [
  '李白乘舟将欲行',
  '忽闻岸上踏歌声',
  '桃花潭水深千尺',
  '不及汪伦送我情',
]

let writeStream = fs.createWriteStream('./index.txt', {
  encoding: 'utf8',
  flags: 'a'
})

verse.forEach((item) => {
  writeStream.write(item + '\n')
})

writeStream.end()

writeStream.on('finish', () => {
  console.log('写入完成');
})

/**
 * 硬连接
 * fs.linkSync('./index.txt', './index2.txt')
 * 软连接
 * fs.symlinkSync('./index.txt', './index2.txt')
 */
