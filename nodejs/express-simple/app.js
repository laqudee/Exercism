import express from 'express'
import User from './src/user.js'
import loggerMiddleware from './middleware/logger.js'

const app = express()

app.use(loggerMiddleware)
app.use(express.json())
app.use('/user', User)

app.get('/', (req, res) => {
  console.log(req.query)
  res.end('get')
})

app.get('/:id', (req, res) => {
  console.log(req.params)
  res.send('get id')
})

app.post('/create', (req, res) => {
  console.log(req.body);
  res.send('post')
})


app.listen(3000, () => console.log('Listening on port 3000'))
