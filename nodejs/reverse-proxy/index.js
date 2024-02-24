import http from 'node:http'
import fs from 'node:fs'
import url from 'node:url'
import { createProxyMiddleware } from 'http-proxy-middleware'
import config from './rp.config.js'

const html = fs.readFileSync('./index.html')

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  const proxyList = Object.keys(config.server.proxy)

  if (proxyList.includes(pathname)) {
    const proxy = createProxyMiddleware(config.server.proxy[pathname])
    proxy(req, res)
    return
  }
  console.log(proxyList)
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(html)

})

server.listen(8000)
