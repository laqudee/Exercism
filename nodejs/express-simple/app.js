import express from 'express'
import User from './src/user.js'
import loggerMiddleware from './middleware/logger.js'
import preventHotlink from './middleware/hotlink.js'

const app = express()

app.use(loggerMiddleware)
app.use(preventHotlink)

app.use(express.json())

app.use('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PATCH')
  next()
})

app.use('/assets', express.static('static'))

app.use('/user', User)

// app.get('/', (req, res) => {
//   console.log(req.query)

//   res.set('laqudee', '1')
//   res.setHeader('Access-Control-Expose-Headers', 'laqudee')
//   res.json({
//     name: 'laqudee',
//     age: 18
//   })
// })

// app.get('/:id', (req, res) => {
//   console.log(req.params)
//   res.send('get id')
// })

app.post('/create', (req, res) => {
  console.log(req.body);
  res.send('post')
})

app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream')
  res.status(200)
  setInterval(() => {
    res.write('event: test\n')
    res.write('data: ' + new Date() + '\n\n')
  }, 1000)
})


app.listen(3000, () => console.log('Listening on port 3000'))
