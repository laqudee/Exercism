import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'node:crypto'

// 生成RSA密钥对
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
})

const text = 'ladudee'

const encrypted = publicEncrypt(publicKey, Buffer.from(text, 'utf8'))

const decrypted = privateDecrypt(privateKey, encrypted)

console.log(decrypted.toString());
