import { createServer } from 'node:http'
import url from 'node:url'

createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true)

  if (req.method === 'POST') {
    if (pathname === '/post') {
      let data = ''
      req.on('data', (chunk) => {
        data += chunk
        console.log(data)
      })
      req.on('end', () => {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(data)
      })
    } else {
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 404
      res.end('Not Found')
    }
  } else if (req.method === 'GET') { // 检查请求方法是否为 GET
    if (pathname === '/get') { // 检查路径是否为 '/get'
      console.log(query.a); // 打印查询参数中的键名为 'a' 的值
      res.end('get success'); // 返回 'get success' 作为响应体
    }
  }
}).listen(98, () => {
  console.log('server is running on port 98');
})
