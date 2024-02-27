import express from 'express'
import 'reflect-metadata'
import { InversifyExpressServer } from 'inversify-express-utils'
import { Container } from 'inversify'
import { UserController } from './user/controller'
import { UserService } from './user/service'
import { PrismaClient } from '@prisma/client'
import { PrismaDB } from './db'

const container = new Container()

// prisma di
container.bind<PrismaClient>('PrismaClient').toFactory(() => {
  return () => {
    return new PrismaClient()
  }
})
container.bind(PrismaDB).toSelf()

// user module
container.bind(UserService).to(UserService)
container.bind(UserController).to(UserController)

// post module
const server = new InversifyExpressServer(container)

server.setConfig(app => {
  app.use(express.json())
})

const app = server.build()

app.listen(3000, () => {
  console.log('Web Server is listening on port 3000')
})
