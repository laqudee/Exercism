import mysql2 from 'mysql2/promise'
import fs from 'node:fs'
import jsyaml from 'js-yaml'
import express from 'express'
import knex from 'knex'

const yaml = fs.readFileSync('./db.config.yaml', 'utf8')
const config = jsyaml.load(yaml)

const db = knex({
  client: "mysql2",
  connection: config.db,
})

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  const data = await db('user').select().orderBy('id', 'desc')
  const total = await db('user').count('* as total')

  res.json({
    code: 200,
    data,
    total: total[0].total
  })
})

app.get('/user/:id', async (req, res) => {
  const row = await db('user').select().where({ id: req.params.id })

  res.json({
    code: 200,
    data: row
  })
})

app.post('/create', async (req, res) => {
  const { name, age, hobby } = req.body
  const detail = await db('user').insert({ name, age, hobby })

  res.send({
    code: 200,
    data: detail
  })
})

app.post('/update', async (req, res) => {
  const { name, age, hobby, id } = req.body
  const info = await db('user').update({ name, age, hobby }).where({ id })
  res.json({
    code: 200,
    data: info
  })
})

app.post('/delete', async (req, res) => {
  const info = await db('user').delete().where({ id: req.body.id })
  res.json({
    code: 200,
    data: info
  })
})

// 事务
app.post('/trans', async (req, res) => {
  const { id1, id2 } = req.body
  await db.transaction(async (trx) => {
    try {
      await trx('user').update({ hobby: '生活' }).where({ id: id1 })
      await trx('user').update({ hobby: '活生' }).where({ id: id2 })
      await trx.commit() //提交事务

    } catch (err) {
      await trx.rollback() // 回滚事务
    }
  })
  res.json({
    code: 200,
    success: true,
    message: 'ok'
  })
})

app.listen(3000, () => {
  console.log('Server is listening on 3000');
})
