import express from 'express'

const app = express()

app.use(express.json())


app.listen(3000, () => {
  console.log('Web Server is listening on port 3000')
})
