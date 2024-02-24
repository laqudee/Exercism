import http from 'node:http'
import url from 'node:url'

http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)

  if (pathname === '/api') {
    res.end('success proxy')
  }
}).listen(3000)
