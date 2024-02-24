/**
 * zlib
 * : Deflate
 * : Gzip
 * : Raw Deflate
 */

const zlib = require('zlib')

const fs = require('node:fs')

const readStream = fs.createReadStream('index.txt')
const writeStream = fs.createWriteStream('index.txt.gz')

readStream.pipe(zlib.createGzip()).pipe(writeStream)

// const readStreamUn = fs.createReadStream('index.txt.gz')
// const writeStreamUn = fs.createWriteStream('index2.txt')
// readStreamUn.pipe(zlib.createGunzip()).pipe(writeStreamUn)


// 无损压缩deflate
const writeStream2 = fs.createWriteStream('index.txt.deflate')
readStream.pipe(zlib.createDeflate()).pipe(writeStream2)

// readStream.pipe(zlib.createInflate()).pipe(writeStream);


/**
 * gzip 与deflate区别
 * 1. 压缩算法
 * 2. 压缩效率
 * 3. 压缩速度
 * 4. 应用场景，gzip常用于文件压缩、网络传输、HTTP响应
 */
