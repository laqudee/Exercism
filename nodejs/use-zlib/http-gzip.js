const zlib = require('zlib');
const http = require('node:http');
const server = http.createServer((req, res) => {
  const txt = 'laqudee'.repeat(1000);

  res.setHeader('Content-Encoding', 'gzip')
  res.setHeader('Content-type', 'text/plan;charset=utf-8')

  const result = zlib.gzipSync(txt);
  res.end(result)
})

server.listen(3000)
