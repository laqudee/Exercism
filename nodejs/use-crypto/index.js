/**
 * crypto 模块
 * 加密与哈希算法
 */

// 对称加密
import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto'

// 生成一个随机16字节的初始化向量
const iv = Buffer.from(randomBytes(16))

// 生成一个随机的32字节密钥
const key = randomBytes(32)

// 创建加密实例 
const cipher = createCipheriv('aes-256-cbc', key, iv)

// 创建解密实例
const decipher = createDecipheriv('aes-256-cbc', key, iv)

cipher.update('yunlong', 'utf8', 'hex')
let result = cipher.final('hex')
console.log(result)

decipher.update(result, 'hex', 'utf8')
result = decipher.final('utf8')
console.log(result)

